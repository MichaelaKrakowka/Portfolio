import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Vždy true, nelze vypnout
    analytics: false,
  });

  useEffect(() => {
    // Zkontrolovat, zda už uživatel dal souhlas
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Načíst Google Analytics pokud byl souhlas udělen
      if (savedPreferences.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Nahraďte 'G-XXXXXXXXXX' vaším skutečným Google Analytics ID
    const GA_ID = "G-8DQHLD3R8D";

    // Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(script2);
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
    loadGoogleAnalytics();
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggleAnalytics = () => {
    setPreferences({
      ...preferences,
      analytics: !preferences.analytics,
    });
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-banner">
        {!showSettings ? (
          <>
            <div className="cookie-consent-content">
              <h3>🍪 Cookies a ochrana soukromí</h3>
              <p>
                Tento web používá cookies pro zlepšení vašeho uživatelského
                zážitku. Technické cookies jsou nutné pro fungování webu.
                Analytické cookies nám pomáhají pochopit, jak návštěvníci web
                používají.
              </p>
              <p className="cookie-consent-link">
                Více informací najdete v našich{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer">
                  Zásadách ochrany osobních údajů
                </a>
              </p>
            </div>
            <div className="cookie-consent-actions">
              <button
                className="cookie-btn cookie-btn-settings"
                onClick={() => setShowSettings(true)}>
                Nastavení
              </button>
              <button
                className="cookie-btn cookie-btn-reject"
                onClick={handleRejectAll}>
                Odmítnout vše
              </button>
              <button
                className="cookie-btn cookie-btn-accept"
                onClick={handleAcceptAll}>
                Přijmout vše
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-consent-content">
              <h3>Nastavení cookies</h3>
              <div className="cookie-preference">
                <div className="cookie-preference-info">
                  <strong>Nezbytné cookies</strong>
                  <p>
                    Tyto cookies jsou nutné pro správné fungování webu a nelze
                    je vypnout.
                  </p>
                </div>
                <label className="cookie-toggle">
                  <input type="checkbox" checked={true} disabled />
                  <span className="cookie-toggle-slider disabled"></span>
                </label>
              </div>
              <div className="cookie-preference">
                <div className="cookie-preference-info">
                  <strong>Analytické cookies</strong>
                  <p>
                    Pomáhají nám pochopit, jak návštěvníci web používají (Google
                    Analytics).
                  </p>
                </div>
                <label className="cookie-toggle">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={handleToggleAnalytics}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
            </div>
            <div className="cookie-consent-actions">
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(false)}>
                Zpět
              </button>
              <button
                className="cookie-btn cookie-btn-accept"
                onClick={handleSavePreferences}>
                Uložit nastavení
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
