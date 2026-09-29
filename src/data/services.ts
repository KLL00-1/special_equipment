/**
 * Публичный каталог, перенесённый из photo_2026-04-19_18-06-36.jpg.
 * Себестоимость намеренно не включена. Цены не проверены на актуальность.
 * RUB — предположение, которое следует подтвердить перед публикацией.
 * Неизвестная цена — unknown, а не 0. Диапазон не заменяем ценой «от».
 */
export type Price =
  | { kind: 'fixed'; amount: number }
  | { kind: 'range'; min: number; max: number }
  | { kind: 'unknown' };

type BaseService = {
  id: string;
  slug: string;
  title: string;
};

export type DeliveryService = BaseService & {
  category: 'delivery';
  fractionsMm: readonly string[];
  offers: readonly { volumeM3: number; pricePerLoad: Price }[];
  // В исходнике нет самостоятельного тарифа за куб.
  pricePerM3: Price;
};

export type RentalService = BaseService & {
  category: 'rental';
  shift: { hours: number | null; price: Price };
  minimum: { hours: number | null; price: Price };
  hourly: Price;
};

export type ProjectService = BaseService & {
  category: 'works';
  price: Price;
};

export type Service = DeliveryService | RentalService | ProjectService;
const fixed = (amount: number): Price => ({ kind: 'fixed', amount });
const unknown: Price = { kind: 'unknown' };

export const catalog = {
  currency: 'RUB',
  currencyConfirmed: false,
  pricesVerifiedAt: null,
  categories: [
    { id: 'delivery', title: 'Доставка материалов', path: '/dostavka' },
    { id: 'rental', title: 'Аренда спецтехники', path: '/arenda' },
    { id: 'works', title: 'Земляные и проектные работы', path: '/raboty' },
  ],
  // Эти условия взяты из наброска, но пока не являются обещанием клиенту.
  deliveryTerms: {
    includedDistanceKm: null,
    extraKmPrice: unknown,
    distanceOrigin: null,
    distanceCalculation: null,
    materialPriceIncludesDelivery: null,
  },
  services: [
    {
      id: 'quarry-sand', slug: 'pesok-karernyy', title: 'Песок карьерный',
      category: 'delivery', fractionsMm: [], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: { kind: 'range', min: 15000, max: 17000 } },
        { volumeM3: 20, pricePerLoad: fixed(23000) },
      ],
    },
    {
      id: 'washed-sand', slug: 'pesok-mytyy', title: 'Песок мытый',
      category: 'delivery', fractionsMm: [], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: fixed(16000) },
        { volumeM3: 20, pricePerLoad: fixed(29000) },
      ],
    },
    {
      id: 'gravel-stone', slug: 'shcheben-graviynyy', title: 'Щебень гравийный',
      category: 'delivery', fractionsMm: ['20–40', '5–20'], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: fixed(41000) },
        { volumeM3: 20, pricePerLoad: fixed(76000) },
      ],
    },
    {
      id: 'recycled-material', slug: 'vtorichka', title: 'Вторичка',
      category: 'delivery', fractionsMm: [], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: fixed(28000) },
        { volumeM3: 20, pricePerLoad: fixed(53000) },
      ],
    },
    {
      id: 'granite-stone', slug: 'shcheben-granitnyy', title: 'Щебень гранитный',
      category: 'delivery', fractionsMm: ['20–40', '5–20'], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: unknown },
        { volumeM3: 20, pricePerLoad: fixed(95000) },
      ],
    },
    {
      id: 'limestone-stone', slug: 'shcheben-izvestnyakovyy', title: 'Щебень известняковый',
      category: 'delivery', fractionsMm: ['20–40', '40–70', '5–20'], pricePerM3: unknown,
      offers: [{ volumeM3: 20, pricePerLoad: fixed(60000) }],
    },
    {
      id: 'fill-soil', slug: 'peskogrunt', title: 'Пескогрунт, планировочный грунт',
      category: 'delivery', fractionsMm: [], pricePerM3: unknown,
      offers: [
        { volumeM3: 10, pricePerLoad: fixed(13000) },
        { volumeM3: 20, pricePerLoad: fixed(18000) },
      ],
    },
    {
      id: 'black-soil', slug: 'chernozem', title: 'Чернозём',
      category: 'delivery', fractionsMm: [], pricePerM3: unknown,
      offers: [{ volumeM3: 20, pricePerLoad: fixed(42000) }],
    },
    {
      id: 'backhoe-loader', slug: 'ekskavator-pogruzchik', title: 'Экскаватор-погрузчик',
      category: 'rental', shift: { hours: 7, price: fixed(28000) },
      minimum: { hours: null, price: fixed(18000) }, hourly: fixed(4000),
    },
    {
      id: 'backhoe-hammer', slug: 'ekskavator-s-gidromolotom',
      title: 'Экскаватор-погрузчик с гидромолотом', category: 'rental',
      shift: { hours: 7, price: fixed(35000) },
      minimum: { hours: null, price: fixed(23000) }, hourly: fixed(5000),
    },
    {
      id: 'road-roller', slug: 'katok', title: 'Каток', category: 'rental',
      shift: { hours: null, price: fixed(28000) },
      minimum: { hours: null, price: unknown }, hourly: unknown,
    },
    {
      id: 'heavy-tow-truck', slug: 'gruzovoy-evakuator',
      title: 'Эвакуатор грузовой', category: 'rental',
      shift: { hours: null, price: unknown },
      minimum: { hours: null, price: unknown }, hourly: unknown,
    },
    {
      id: 'excavation', slug: 'razrabotka-kotlovana',
      title: 'Разработка котлована', category: 'works', price: unknown,
    },
    {
      id: 'xxxx', slug: 'xxxx',
      title: 'Благоустройство', category: 'works', price: unknown,
    },
  ],
} as const satisfies {
  currency: 'RUB'; currencyConfirmed: boolean; pricesVerifiedAt: string | null;
  categories: readonly { id: Service['category']; title: string; path: string }[];
  deliveryTerms: {
    includedDistanceKm: number | null; extraKmPrice: Price;
    distanceOrigin: string | null; distanceCalculation: string | null;
    materialPriceIncludesDelivery: boolean | null;
  };
  services: readonly Service[];
};

export type ServiceId = (typeof catalog.services)[number]['id'];
export type CatalogService = (typeof catalog.services)[number];

export function getServicePath(service: CatalogService): string {
  const category = catalog.categories.find(item => item.id === service.category)!;
  return `${category.path}/${service.slug}`;
}

export function formatPrice(price: Price): string {
  const number = (value: number) => new Intl.NumberFormat('ru-RU').format(value);
  switch (price.kind) {
    case 'fixed': return `${number(price.amount)} ₽`;
    case 'range': return `${number(price.min)}–${number(price.max)} ₽`;
    case 'unknown': return 'По запросу';
  }
}

// Только данные для select; нет дублирования каталога и отдельной страницы «Другое».
export const serviceOptions = [
  ...catalog.services.map(service => ({ value: service.id, label: service.title })),
  { value: 'other', label: 'Другое' },
] as const;

