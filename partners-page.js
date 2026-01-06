// Partners Page Script
document.addEventListener('DOMContentLoaded', () => {
    function getTypeClass(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('cashback')) return 'cashback';
        if (typeLower.includes("bon d'achat") || typeLower.includes('bon')) return 'bon-achat';
        return 'remise';
    }

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
        return partners.sort((a, b) => a.name.localeCompare(b.name));
    }

    function renderPartners(partners) {
        const grid = document.getElementById('partners-grid');
        const totalCount = document.getElementById('total-count');

        totalCount.textContent = partners.length;

        if (partners.length === 0) {
            grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🔍</div>
          <div>Aucun partenaire trouvé</div>
        </div>
      `;
            return;
        }

        grid.innerHTML = partners.map(partner => `
      <a href="${THECORNER_BASE_URL + partner.url}" target="_blank" class="partner-card">
        <div class="partner-header">
          <div class="partner-info">
            <img src="https://www.google.com/s2/favicons?domain=${partner.domain}&sz=32" alt="" class="partner-logo" onerror="this.style.display='none'">
            <div>
              <div class="partner-name">${partner.name}</div>
              <div class="partner-domain">${partner.domain}</div>
            </div>
          </div>
          <div class="partner-discount">${partner.discount}</div>
        </div>
        <span class="partner-type ${getTypeClass(partner.type)}">${partner.type}</span>
      </a>
    `).join('');
    }

    // Initialize
    const allPartners = getAllPartners();
    renderPartners(allPartners);

    let currentFilter = 'all';
    let currentSearch = '';

    function applyFilters() {
        let filtered = allPartners;

        // Apply type filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(p => getTypeClass(p.type) === currentFilter);
        }

        // Apply search
        if (currentSearch) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                p.domain.toLowerCase().includes(currentSearch.toLowerCase())
            );
        }

        renderPartners(filtered);
    }

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        applyFilters();
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });
});
