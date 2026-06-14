import { Helmet } from 'react-helmet-async';
import { IMAGES, SITE_DESCRIPTION, SITE_NAME } from '../../lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export function SEO({
  title,
  description = SITE_DESCRIPTION,
  ogImage = IMAGES.og,
}: SEOProps): JSX.Element {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Community Support Hub`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
