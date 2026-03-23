import React from 'react';
import { PageLayout } from '@/shared/ui';
import { HeroMain } from '@/widgets/hero-main';
import { WhyNow } from '@/widgets/why-now';
import { UtpBlock } from '@/widgets/utp-block';
import { ThreePaths } from '@/widgets/three-paths';
import { Gallery } from '@/widgets/gallery';
import { Team } from '@/widgets/team';
import { PricingOverview } from '@/widgets/pricing-overview';
import { Quiz } from '@/widgets/quiz';
import { Testimonials } from '@/widgets/testimonials';
import { Faq } from '@/widgets/faq';
import { CtaFinal } from '@/widgets/cta-final';

export const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <HeroMain />
      <WhyNow />
      <UtpBlock />
      <ThreePaths />
      <Gallery />
      <Team />
      <PricingOverview />
      <Quiz />
      <Testimonials />
      <Faq />
      <CtaFinal />
    </PageLayout>
  );
};
