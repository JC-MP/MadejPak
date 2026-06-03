'use client';
import { useEffect } from 'react';

// Fires Google Ads page-view conversions when the coboty page loads.
// Both send_to values are self-contained (account/label) so they work
// even if the base gtag('config', ...) for a given account isn't present.
export default function CobotyConversion() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', { send_to: 'AW-18172689985/AX3PCPmC37UcEMH8tNlD' });
    gtag('event', 'conversion', { send_to: 'AW-7628950723/ZT75CMOZ4rUcEJqttdlD' });
  }, []);
  return null;
}
