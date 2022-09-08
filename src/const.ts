export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  Intro = '/introduction',
  Reviews = '/reviews',
  Promo = '/promo',
  Contacts = '/contacts',
  NotFound = '/*'
}

export enum APIRoute {
  Quests = '/quests',
  Order = '/orders'
}

export const QuestGenreTabs = [
  {
    type: 'All genres',
    name: 'Все жанры'
  },
  {
    type: 'adventures',
    name: 'Приключения'
  },
  {
    type: 'horror',
    name: 'Ужасы'
  },
  {
    type: 'mystic',
    name: 'Мистика'
  },
  {
    type: 'detective',
    name: 'Детектив'
  },
  {
    type: 'sci-fi',
    name: 'Sci-fi'
  }
];

export const MainNavLinks = [
  {
    name: 'Квесты',
    URL: AppRoute.Root
  },
  {
    name: 'Новичкам',
    URL: '/introduction'
  },
  {
    name: 'Отзывы',
    URL: '/reviews'
  },
  {
    name: 'Акции',
    URL: '/promo'
  },
  {
    name: 'Контакты',
    URL: AppRoute.Contacts
  },
];

export const DEFAULT_GENRE = 'All genres';
export const DEFAULT_MAIN_NAV_LINK = AppRoute.Root;
