import { useEffect } from 'react';

const ZendeskScriptLoader = () => {
  useEffect(() => {
    const loadScript = () => {
      // Create a script element
      const script = document.createElement('script');

      script.src = "https://static.zdassets.com/ekr/snippet.js?key=da5d1190-fb53-4e5e-8047-3fe0a600764d";

      script.id = "ze-snippet";

      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      loadScript();
    } else {
      document.addEventListener('DOMContentLoaded', loadScript);
    }

    return () => {
      const script = document.getElementById('ze-snippet');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ZendeskScriptLoader;