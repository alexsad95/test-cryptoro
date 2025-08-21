import { create } from 'zustand';

const staticData = {
  header: {
    logo: 'CRYPTORO',
    navigation: [
      { id: 1, title: 'Главная', href: '#home', isActive: true },
      { id: 2, title: 'Каталог', href: '#catalog' },
      { id: 3, title: 'Бренды', href: '#brands' },
      { id: 4, title: 'Доставка и оплата', href: '#delivery' },
      { id: 5, title: 'Помощь', href: '#help' },
      { id: 6, title: 'Компания', href: '#company' },
    ],
    actions: [
      { id: 1, type: 'search' },
      { id: 2, type: 'favorites' },
      { id: 3, type: 'cart' },
    ],
  },
  hero: {
    title: 'Интернет-магазин оборудования для защиты криптоактивов',
    subtitle: 'Cryptoro - официальный реселлер, самый большой выбор в России',
    description:
      'Физические устройства из стали и титана надёжнее бумаги и облачных сервисов',
    ctaButton: 'В каталог',
    stats: [
      { id: 1, value: '10+', label: 'лет на рынке' },
      { id: 2, value: '50+', label: 'брендов' },
    ],
    productsInfo: [
      {
        id: 1,
        image: '/images/products/product1.png',
      },
      {
        id: 2,
        image: '/images/products/product2.png',
      },
      {
        id: 3,
        image: '/images/products/product3.png',
      },
      {
        id: 4,
        image: '/images/products/product4.png',
      },
      {
        id: 5,
        image: '/images/products/product5.png',
      },
      {
        id: 6,
        image: '/images/products/product6.png',
      },
    ],
    offers: {
      title: 'Выгодные предложения',
      offersBackground: '/images/hero-block/offers-bg.png',
      productsOffers: [
        {
          id: 1,
          name: 'Аппаратный кошелёк SecuX Nifty NFT',
          price: '24 490 ₽',
          category: 'hardware-wallet',
          image: '/images/products/product2(1).png',
        },
        {
          id: 2,
          name: 'Устройство для записи seed фразы Cryptotag Thor',
          price: '14 490 ₽',
          category: 'seed-storage',
          image: '/images/products/product6(1).png',
        },
        {
          id: 3,
          name: 'Аппаратный ключ Yubikey 5C Nano',
          price: '2 490 ₽',
          category: 'security-key',
          image: '/images/products/product3(1).png',
        },
        {
          id: 4,
          name: 'Аппаратный кошелёк Trezor T Black',
          price: '8 490 ₽',
          category: 'hardware-wallet',
          image: '/images/products/product4(1).png',
        },
      ],
    },
    cards: [
      {
        id: 1,
        title: 'Защита учётных записей',
        image: '/images/hero-block/usb-flash.png',
      },
      {
        id: 2,
        title: 'Социальные сети',
        background: '/images/hero-block/enis-bg.png',
        socialLinks: [
          { id: 1, platform: 'Telegram', url: '#' },
          { id: 2, platform: 'YouTube', url: '#' },
          {
            id: 3,
            platform: 'Email',
            url: 'mailto:shop@cryptoro.ru',
            text: 'shop@cryptoro.ru',
          },
        ],
      },
      {
        id: 3,
        title: 'Актуальные статьи',
        image: '/images/hero-block/coin.png',
        buttonText: 'Читать',
      },
      {
        id: 4,
        title: 'Хранение паролей и seed-фраз',
        image: '/images/hero-block/cryptotag.png',
      },
    ],
  },
  popularProducts: {
    title: 'Товары, которые покупают чаще всего',
    bannerTitle: 'Популярные категории',
    bannerBackground: '/images/popular-products/banner-bg.png',
    categories: [
      {
        id: 1,
        title: 'Аппаратные кошельки',
        image: '/images/popular-products/flash1.png',
      },
      {
        id: 2,
        title: 'Устройства для записи seed',
        description:
          'Надежные устройства для хранения мнемонической фразы, необходимой для восстановления доступа к вашим средствам',
      },
      {
        id: 3,
        title: 'Аксессуары',
        image: '/images/popular-products/flash2.png',
      },
      {
        id: 4,
        title: 'U2F-токены',
        image: '/images/popular-products/flash3.png',
      },
      {
        id: 5,
        title: 'Кабели и переходники',
        description:
          'Большой выбор кабелей и переходников для удобного использования ваших устройств',
      },
      {
        id: 6,
        title: 'Чехлы и кейсы',
        image: '/images/popular-products/flash4.png',
      },
    ],
  },
};

export const useAppStore = create((set, get) => ({
  content: staticData,
  isLoading: false,
  error: null,
}));
