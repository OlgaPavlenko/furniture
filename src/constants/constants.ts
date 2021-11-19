export const USER_MENU_ITEMS = [
  {
    src: require('assets/icons/login.svg').default as string,
    path: '/login',
  },

  {
    src: require('assets/icons/shopping-cart.svg').default as string,
    path: '/cart',
  },
];

export const SOCIAL_NETWORK_ITEMS = {
  instagram: require('assets/icons/instagram.svg').default as string,
  twitter: require('assets/icons/twitter.svg').default as string,
  facebook: require('assets/icons/facebook.svg').default as string,
  linkedin: require('assets/icons/linkedin.svg').default as string,
};

export const TOGGLE_BUTTONS_IMG = {
  menu: require('assets/icons/menu.svg').default as string,
  list: require('assets/icons/list.svg').default as string,
};

export const SORTING_IMGS = {
  up: require('assets/icons/arrowUp.svg').default as string,
  down: require('assets/icons/arrowDown.svg').default as string,
};

export const CONTACT_ITEMS = [
  {
    href: 'mailto:',
    descr: 'info@teststudio.com',
  },
  {
    href: 'tel:',
    descr: '+380971111111',
  },
];

export const NAV_BAR_LINK = [
  {
    name: 'Catalog',
    path: '/catalog',
  },
  {
    name: 'About Us',
    path: '/aboutUs',
  },
  {
    name: 'Delivery',
    path: '/delivery',
  },
];

export const PATH = {
  products: '/products',
  categories: {
    countries: '/countries',
    companies: '/companies',
    materials: '/materials',
  },
  price: '/price',
};

export const LANGUAGE = ['en', 'ru'];
