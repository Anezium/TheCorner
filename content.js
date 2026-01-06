// TheCorner Content Script
// Detects partner sites and shows cashback notification

(function () {
    'use strict';

    const THECORNER_BASE_URL = 'https://clients.boursobank.com';
    const STORAGE_KEY = 'thecorner_hidden_sites';
    const AUTO_HIDE_DELAY = 8000; // 8 seconds

    // Get current domain
    function getCurrentDomain() {
        const hostname = window.location.hostname.toLowerCase();
        // Remove 'www.' prefix if present
        return hostname.replace(/^www\./, '');
    }

    // Check if site is hidden by user
    function isSiteHidden(domain) {
        try {
            const hidden = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return hidden.includes(domain);
        } catch {
            return false;
        }
    }

    // Hide site permanently
    function hideSite(domain) {
        try {
            const hidden = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            if (!hidden.includes(domain)) {
                hidden.push(domain);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(hidden));
            }
        } catch (e) {
            console.error('TheCorner: Error saving hidden site', e);
        }
    }

    // Find matching partner
    function findPartner(domain) {
        // Try exact match first
        if (THECORNER_PARTNERS[domain]) {
            return { domain, offers: THECORNER_PARTNERS[domain] };
        }

        // Try to find subdomain match (e.g., www.fnac.com matches fnac.com)
        // Only match if current domain ends with partner domain (not the reverse)
        for (const partnerDomain in THECORNER_PARTNERS) {
            if (domain.endsWith('.' + partnerDomain) || domain === partnerDomain) {
                return { domain: partnerDomain, offers: THECORNER_PARTNERS[partnerDomain] };
            }
        }

        return null;
    }

    // Get CSS class for offer type
    function getTypeClass(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('cashback')) return 'cashback';
        if (typeLower.includes("bon d'achat") || typeLower.includes('bon')) return 'bon-achat';
        return 'remise';
    }

    // Create notification HTML
    function createNotification(partner) {
        const container = document.createElement('div');
        container.className = 'thecorner-notification';
        container.id = 'thecorner-notification';

        const storeName = partner.offers[0].name;
        const mainOfferUrl = THECORNER_BASE_URL + partner.offers[0].url;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=32`;

        const offersHTML = partner.offers.map(offer =>
            `<div class="thecorner-offer">
<span class="thecorner-discount">${offer.discount}</span>
<span class="thecorner-type ${getTypeClass(offer.type)}">${offer.type}</span>
</div>`).join('');

        container.innerHTML = `
<div class="thecorner-header">
  <div class="thecorner-logo">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
    <span>TheCorner</span>
  </div>
  <button class="thecorner-close" aria-label="Fermer">×</button>
</div>
<div class="thecorner-body">
  <div class="thecorner-store-header">
    <img src="${faviconUrl}" alt="" class="thecorner-store-logo" onerror="this.style.display='none'">
    <h3 class="thecorner-store">${storeName}</h3>
  </div>
  <div class="thecorner-offers">
    ${offersHTML}
  </div>
  <a href="${mainOfferUrl}" target="_blank" rel="noopener noreferrer" class="thecorner-cta">
    Voir sur TheCorner →
  </a>
</div>
<div class="thecorner-footer">
  <label class="thecorner-hide-option">
    <input type="checkbox" id="thecorner-hide-checkbox">
    <span>Ne plus afficher sur ce site</span>
  </label>
</div>
`;

        return container;
    }

    // Show notification
    function showNotification(partner) {
        const notification = createNotification(partner);
        document.body.appendChild(notification);

        // Trigger animation after a small delay
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                notification.classList.add('visible');
            });
        });

        // Auto-hide after delay
        let autoHideTimeout = setTimeout(() => {
            hideNotification(notification, partner.domain);
        }, AUTO_HIDE_DELAY);

        // Close button handler
        const closeBtn = notification.querySelector('.thecorner-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoHideTimeout);
            hideNotification(notification, partner.domain);
        });

        // Checkbox handler
        const checkbox = notification.querySelector('#thecorner-hide-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                hideSite(partner.domain);
            }
        });

        // Pause auto-hide on hover
        notification.addEventListener('mouseenter', () => {
            clearTimeout(autoHideTimeout);
        });

        notification.addEventListener('mouseleave', () => {
            autoHideTimeout = setTimeout(() => {
                hideNotification(notification, partner.domain);
            }, AUTO_HIDE_DELAY);
        });
    }

    // Hide notification with animation
    function hideNotification(notification, domain) {
        // Check if user wants to hide permanently
        const checkbox = notification.querySelector('#thecorner-hide-checkbox');
        if (checkbox && checkbox.checked) {
            hideSite(domain);
        }

        notification.classList.remove('visible');
        notification.classList.add('hiding');

        setTimeout(() => {
            notification.remove();
        }, 400);
    }

    // Main initialization
    function init() {
        // Don't run on TheCorner itself
        if (window.location.href.includes('boursobank.com')) {
            return;
        }

        const currentDomain = getCurrentDomain();

        // Check if already hidden by user
        if (isSiteHidden(currentDomain)) {
            return;
        }

        // Check if already showing (avoid duplicates)
        if (document.getElementById('thecorner-notification')) {
            return;
        }

        // Find partner
        const partner = findPartner(currentDomain);
        if (partner) {
            // Small delay to let page load
            setTimeout(() => {
                showNotification(partner);
            }, 1000);
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
