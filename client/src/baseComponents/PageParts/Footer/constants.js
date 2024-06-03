import { LIST_OF_ICONS, PNG_ICON_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

export const COMPANY_LINKS = [
  { title: 'About Us', url: PAGE_ROUTES.ABOUT_US },
  { title: 'Our Mission', url: PAGE_ROUTES.OUR_MISSION },
  { title: 'Careers', url: PAGE_ROUTES.CAREERS },
  { title: 'Terms & Conditions', url: PAGE_ROUTES.TERMS }
];

export const LEARN_MORE_LINKS = [
  { title: 'Our Services', url: PAGE_ROUTES.OUR_SERVICES },
  { title: 'Case Studies', url: PAGE_ROUTES.CASE_STUDIES },
  { title: 'Blog', url: PAGE_ROUTES.BLOG },
  { title: 'FAQ', url: PAGE_ROUTES.FAQ }
];

export const CONTACT = [
  { icon: LIST_OF_ICONS.phone, value: '+1(613)298-0855' },
  { icon: LIST_OF_ICONS.envelope, value: 'info@iswad.tech' }
];

export const FOLLOW = [
  { icon: PNG_ICON_TYPES.instagram, url: 'https://www.instagram.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.facebook, url: 'https://www.facebook.com/iswad.tech/' },
  { icon: PNG_ICON_TYPES.linkedIn, url: 'https://ca.linkedin.com/company/iswadtech' }
];
