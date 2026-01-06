// Popup Script
document.addEventListener('DOMContentLoaded', async () => {
    const THECORNER_BASE_URL = 'https://clients.boursobank.com';

    // Get type class for styling
    function getTypeClass(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('cashback')) return 'cashback';
        if (typeLower.includes("bon d'achat") || typeLower.includes('bon')) return 'bon-achat';
        return 'remise';
    }

    // Get current tab domain
    async function getCurrentTabDomain() {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (tab && tab.url) {
                const url = new URL(tab.url);
                return url.hostname.replace(/^www\./, '').toLowerCase();
            }
        } catch (e) {
            console.error('Error getting current tab:', e);
        }
        return null;
    }

    // Find partner for domain
    function findPartner(domain) {
        if (!domain) return null;

        // Exact match
        if (THECORNER_PARTNERS[domain]) {
            return { domain, offers: THECORNER_PARTNERS[domain] };
        }

        // Partial match
        for (const partnerDomain in THECORNER_PARTNERS) {
            if (domain.endsWith(partnerDomain) || partnerDomain.endsWith(domain)) {
                return { domain: partnerDomain, offers: THECORNER_PARTNERS[partnerDomain] };
            }
        }

        return null;
    }

    // Render current site section
    function renderCurrentSite(partner) {
        const container = document.getElementById('current-site-content');

        if (!partner) {
            container.innerHTML = '<div class="no-partner">Pas de partenaire TheCorner sur ce site</div>';
            return;
        }

        const faviconUrl = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=32`;

        const firstOffer = partner.offers[0];
        const mainUrl = THECORNER_BASE_URL + firstOffer.url;

        container.innerHTML = `
      <div class="partner-card">
        <div class="partner-card-header">
          <div class="partner-name-header">
            <img src="${faviconUrl}" alt="" class="partner-logo" onerror="this.style.display='none'">
            <div class="partner-name">${firstOffer.name}</div>
          </div>
          <span class="partner-type ${getTypeClass(firstOffer.type)}">${firstOffer.type}</span>
        </div>
        <div class="partner-card-footer">
          <span class="partner-discount">${firstOffer.discount}</span>
        </div>
        <a href="${mainUrl}" target="_blank" class="partner-cta">Voir sur TheCorner →</a>
      </div>
    `;
    }

    // Get all partners as flat list
    function getAllPartners() {
        const partners = [];
        for (const domain in THECORNER_PARTNERS) {
            for (const offer of THECORNER_PARTNERS[domain]) {
                partners.push({
                    domain,
                    name: offer.name,
                    discount: offer.discount,
                    type: offer.type,
                    url: offer.url
                });
            }
        }
        // Sort alphabetically
        return partners.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Render partners list
    function renderPartnersList(partners, filter = '') {
        const container = document.getElementById('partners-list');
        const countEl = document.getElementById('partners-count');

        const filtered = filter
            ? partners.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
            : partners;

        countEl.textContent = filtered.length;

        if (filtered.length === 0) {
            container.innerHTML = '<div class="no-partner">Aucun partenaire trouvé</div>';
            return;
        }

        container.innerHTML = filtered.map(partner => `
      <a href="${THECORNER_BASE_URL + partner.url}" target="_blank" class="partner-item">
        <img src="https://www.google.com/s2/favicons?domain=${partner.domain}&sz=32" alt="" class="partner-item-logo" onerror="this.style.display='none'">
        <div class="partner-item-left">
          <span class="partner-item-name">${partner.name}</span>
          <span class="partner-item-type">${partner.type}</span>
        </div>
        <span class="partner-item-discount">${partner.discount}</span>
      </a>
    `).join('');
    }

    // Initialize
    const currentDomain = await getCurrentTabDomain();
    const currentPartner = findPartner(currentDomain);
    renderCurrentSite(currentPartner);

    const allPartners = getAllPartners();
    renderPartnersList(allPartners);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        renderPartnersList(allPartners, e.target.value);
    });

    // Open full page button
    document.getElementById('open-full-page').addEventListener('click', () => {
        chrome.tabs.create({ url: chrome.runtime.getURL('partners-page.html') });
    });
});
