const DEFAULT_CHECKOUT_URL = 'https://whop.com/checkout/plan_UdTwlBztca303';

const CHECKOUT_URL_BY_PATH: Record<string, string> = {
  '/x': 'https://whop.com/checkout/plan_WHYGNyN2sQBEW',
  '/yt': 'https://whop.com/checkout/plan_pkE0FN8q9pqiH',
  '/tg': 'https://whop.com/checkout/plan_ayM4hdgvC5pGM',
};

export const getCheckoutUrl = () =>
  CHECKOUT_URL_BY_PATH[window.location.pathname.toLowerCase()] ?? DEFAULT_CHECKOUT_URL;

export const openCheckout = () => window.open(getCheckoutUrl(), '_blank');
