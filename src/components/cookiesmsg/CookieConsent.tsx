import React from 'react';
import CookieConsent from "react-cookie-consent";

const CookiesMsg = () => (
    <CookieConsent
        location="bottom"
        buttonText="Acepto"
        cookieName="AndoSolutions"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
    >
            Este sitio usa cookies para mejorar la experiencia del usuario, si continúa navegando asumimos su consentimiento.
    </CookieConsent>
)

export default CookiesMsg;