// Podigee Podcast Player Integration for BeatSquares Documentation
// 
// This script automatically loads the Podigee podcast player on any page
// that contains a div with class "podigee-podcast-player" and a 
// "data-configuration" attribute.
//
// Usage in MDX:
// <div className="podigee-podcast-player" 
//      data-configuration="https://your-podcast.podigee.io/embed?context=external">
// </div>
//
// This file is automatically included by Mintlify on all documentation pages.

(function() {
  // Only load on pages with the podigee player container
  function loadPodigeePlayer() {
    const playerContainer = document.querySelector('.podigee-podcast-player[data-configuration]');
    
    if (playerContainer && !document.getElementById('podigee-player-script')) {
      const script = document.createElement('script');
      script.id = 'podigee-player-script';
      script.className = 'podigee-podcast-player';
      script.src = 'https://player.podigee-cdn.net/podcast-player/javascripts/podigee-podcast-player.js';
      script.setAttribute('data-configuration', playerContainer.getAttribute('data-configuration'));
      document.body.appendChild(script);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPodigeePlayer);
  } else {
    loadPodigeePlayer();
  }
  
  // Also try to load when the page changes (for SPA navigation)
  if (typeof window !== 'undefined') {
    window.addEventListener('load', loadPodigeePlayer);
  }
})();

