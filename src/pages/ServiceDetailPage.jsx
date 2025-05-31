import React from 'react';
    import { useParams, Link, Navigate } from 'react-router-dom';
    import ServiceHero from '@/components/pageSections/serviceDetail/ServiceHero';
    import ServiceOverview from '@/components/pageSections/serviceDetail/ServiceOverview';
    import ServiceKeyAspects from '@/components/pageSections/serviceDetail/ServiceKeyAspects';
    import ServiceCTA from '@/components/pageSections/serviceDetail/ServiceCTA';
    import { serviceDetailsData } from '@/config/serviceDetailsConfig';
    import { ChevronLeft } from 'lucide-react';

    const ServiceDetailPage = () => {
      const { serviceId } = useParams();
      const service = serviceDetailsData[serviceId];

      if (!service) {
        return <Navigate to="/services" replace />;
      }

      return (
        <div className="bg-slate-50">
          <ServiceHero 
            title={service.title}
            subtitle={service.heroSubtitle}
            icon={service.icon}
            heroImage={service.heroImage}
          />
          <ServiceOverview
            overview={service.overview}
            benefits={service.benefits}
            title={service.title}
          />
          <ServiceKeyAspects aspects={service.keyAspects} />
          <ServiceCTA title={service.title} ctaText={service.ctaText} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to All Services
            </Link>
          </div>
        </div>
      );
    };

    export default ServiceDetailPage;