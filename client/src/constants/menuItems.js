import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const generalItems = [
  {
    identifier: 'home',
    title: 'Home',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: false,
    showInDesktop: false,
    showInMobile: false
  },
  {
    identifier: 'our-services',
    title: 'Our Services',
    to: PAGE_ROUTES.OUR_SERVICES,
    hasSubMenu: true,
    showInDesktop: true,
    showInMobile: true,
    submenuTranslteX: '-100px'
  },
  {
    identifier: 'about-us',
    title: 'About Us',
    to: PAGE_ROUTES.ABOUT_US,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'case-studies',
    title: 'Case Studies',
    to: PAGE_ROUTES.CASE_STUDIES,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'blog',
    title: 'Blog',
    to: PAGE_ROUTES.BLOG,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  }
];

export const MENU_ITEMS = [...generalItems];

export const SUB_MENU_ITEMS = {
  'our-services': [
    {
      identifier: 'mvp-development',
      title: 'MVP Development',
      to: PAGE_ROUTES.OUR_SERVICES_MVP_DEVELOPMENT
    },

    {
      identifier: 'web-app-development',
      title: 'Customized Web/Mobile App Development',
      to: PAGE_ROUTES.OUR_SERVICES_WEB_APP_DEVELOPMENT
    },

    {
      identifier: 'branding',
      title: 'Website Development & Branding',
      to: PAGE_ROUTES.OUR_SERVICES_BRANDING
    },

    {
      identifier: 'counselling',
      title: 'Counselling & Coaching',
      to: PAGE_ROUTES.OUR_SERVICES_COUNSELLING
    },

    {
      identifier: 'team-augmentation',
      title: 'Team Augmentation',
      to: PAGE_ROUTES.OUR_SERVICES_TEAM_AUGMENTATION
    }
  ]
};
