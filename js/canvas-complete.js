/*
 * Canvas Complete JavaScript
 * 
 * Complete Canvas LMS and CidiLabs JavaScript for local development environment.
 * This single file contains all JavaScript needed to accurately replicate Canvas functionality.
 * 
 * Organization:
 * - Canvas Core Functions
 * - Event Handlers & Interactions
 * - Utility Functions
 * - Canvas UI Components
 * - CidiLabs Integration
 */

/* ================================
   CANVAS CORE FUNCTIONS
   ================================ */
/* Core Canvas JavaScript functionality and initialization */


/* ================================
   EVENT HANDLERS & INTERACTIONS
   ================================ */
/* Click handlers, form interactions, and user interface behaviors */


/* ================================
   UTILITY FUNCTIONS
   ================================ */
/* Helper functions and utilities used throughout Canvas */


/* ================================
   CANVAS UI COMPONENTS
   ================================ */
/* JavaScript for Canvas UI components like modals, tooltips, etc. */

// dp-panels Accordion System
function initializeDpPanels() {
    const panelHeadings = document.querySelectorAll('.dp-panel-heading');

    panelHeadings.forEach(heading => {
        heading.addEventListener('click', function () {
            const panelGroup = this.closest('.dp-panel-group');
            const content = panelGroup.querySelector('.dp-panel-content');
            const isExpanded = panelGroup.classList.contains('dp-panel-active');

            // Toggle active state
            if (isExpanded) {
                panelGroup.classList.remove('dp-panel-active');
                content.style.display = 'none';
            } else {
                panelGroup.classList.add('dp-panel-active');
                content.style.display = 'block';
            }

            // Triangle icon rotation happens via CSS transition
        });

        // Add cursor pointer style
        heading.style.cursor = 'pointer';
    });

    // Initialize first panel as expanded by default (optional)
    const firstPanel = document.querySelector('.dp-panel-group');
    if (firstPanel && !document.querySelector('.dp-panel-active')) {
        firstPanel.classList.add('dp-panel-active');
        const firstContent = firstPanel.querySelector('.dp-panel-content');
        if (firstContent) {
            firstContent.style.display = 'block';
        }
    }
}


/* ================================
   CIDILABS INTEGRATION
   ================================ */
/* CidiLabs initialization and Canvas integration functions */

// dp-popup-image functionality - Click to enlarge
function initializeDpPopupImages() {
    const popupImages = document.querySelectorAll('.dp-popup-image');

    popupImages.forEach(img => {
        img.addEventListener('click', function () {
            createImagePopup(this);
        });
    });
}

function createImagePopup(img) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'dp-popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;

    // Create enlarged image
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    `;

    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);

    // Close on click
    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    // Close on escape key
    const handleKeyPress = function (e) {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', handleKeyPress);
        }
    };
    document.addEventListener('keydown', handleKeyPress);
}

// Initialize all Canvas components when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dp-panels accordions
    initializeDpPanels();

    // Initialize popup images
    initializeDpPopupImages();

    // Future component initializations will go here
    // initializeDpCallouts();
    // initializeDpModals();
});