const baseTitle = 'Shoe Store';

export const generatePageTitle = (pageTitle?: string): string => {
  return pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
};