// =========================================================================
// SÉCURITÉ ABSOLUE KINSANTÉ - PROTECTION FRONT-END MAXIMALE
// =========================================================================

(function() {
    // 1. BLOCAGE ULTRA-PUISSANT DU CLAVIER ET DES RACCOURCIS
    window.addEventListener('keydown', function(e) {
        // Bloque F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Bloque Ctrl+U (Source), Ctrl+C (Copie), Ctrl+S (Sauvegarde), Ctrl+P (Imprimer)
        if (e.ctrlKey && ['c', 'u', 's', 'p', 'C', 'U', 'S', 'P'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
        // Bloque l'inspecteur d'élément (Ctrl+Shift+I, J, C)
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
    }, true);

    // 2. BLOCAGE DU CLIC DROIT SUR TOUTE LA PAGE
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, true);

    // 3. BLOCAGE JAVASCRIPT DE LA SÉLECTION (Double sécurité)
    document.addEventListener('selectstart', function(e) {
        // Laisse l'utilisateur taper normalement dans la barre de recherche
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return true;
        }
        e.preventDefault();
        return false;
    });

    // 4. INJECTION DIRECTE DU STYLE CSS ANTI-SÉLECTION (Pour bloquer le tactile mobile et la souris)
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important; /* Bloque le menu contextuel sur iPhone */
        }
        input, textarea, input * {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);

    // 5. PIÈGE DE LA CONSOLE (Freeze si quelqu'un force l'ouverture des outils dev)
    setInterval(function() {
        debugger;
    }, 50);
})();
