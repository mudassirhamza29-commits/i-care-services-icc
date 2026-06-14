import { useParams } from 'react-router-dom';
import { SEO } from '../../components/layout/SEO';
import { ServicePage } from '../../components/shared/ServicePage';
import { SERVICES_DATA } from '../../lib/servicesData';
import NotFound from '../NotFound';

export default function ServiceDetail(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_DATA[slug] : undefined;

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={service.title}
        description={service.heroDescription}
        ogImage={service.image}
      />
      <ServicePage service={service} />
    </>
  );
}
