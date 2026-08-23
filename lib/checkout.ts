const DEFAULT_CHECKOUT_URL = 'https://whop.com/checkout/plan_UdTwlBztca303';

const CHECKOUT_URL_BY_PATH: Record<string, string> = {
  '/x': 'https://whop.com/checkout/ch_cXXXIV7O7NMY2uq/',
  '/yt': 'https://whop.com/checkout/ch_zHtsP7ch3472vFo/',
  '/tg': 'https://whop.com/checkout/ch_1FoI1HxlrqSwUVd/',
};

export const getCheckoutUrl = () =>
  CHECKOUT_URL_BY_PATH[window.location.pathname.toLowerCase()] ?? DEFAULT_CHECKOUT_URL;

export const openCheckout = () => window.open(getCheckoutUrl(), '_blank');
