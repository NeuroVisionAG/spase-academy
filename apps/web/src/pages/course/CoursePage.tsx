import React from 'react';
import { CourseId } from '@space-academy/shared';
import { PageLayout } from '@/shared/ui';
import { CourseHero } from '@/widgets/course-hero';
import { CourseProgram } from '@/widgets/course-program';
import { PricingOverview } from '@/widgets/pricing-overview';
import { CourseLeadForm } from '@/widgets/course-lead-form';

export const CoursePage: React.FC<{ courseId: CourseId }> = ({ courseId }) => {
  return (
    <PageLayout>
      <CourseHero courseId={courseId} />
      <CourseProgram />
      <PricingOverview />
      <CourseLeadForm />
    </PageLayout>
  );
};
