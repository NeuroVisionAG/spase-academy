import React from 'react';
import { PageLayout } from '@/shared/ui';
import { GroupHero } from '@/widgets/group-hero';
import { GroupDirections } from '@/widgets/group-directions';
import { GroupWho } from '@/widgets/group-who';
import { GroupSkills } from '@/widgets/group-skills';
import { GroupWorks } from '@/widgets/group-works';
import { GroupTeacher } from '@/widgets/group-teacher';
import { GroupPricing } from '@/widgets/group-pricing';
import { GroupSafety } from '@/widgets/group-safety';
import { Testimonials } from '@/widgets/testimonials';
import { GroupCTA } from '@/widgets/group-cta';
import { Faq } from '@/widgets/faq';
import { CourseLeadForm } from '@/widgets/course-lead-form';

export const GroupPage: React.FC<{ groupId: string }> = ({ groupId }) => {
  return (
    <PageLayout>
      <GroupHero groupId={groupId} />
      <GroupWho groupId={groupId} />
      <GroupDirections groupId={groupId} />
      <GroupSkills groupId={groupId} />
      <GroupWorks groupId={groupId} />
      <GroupTeacher groupId={groupId} />
      <GroupPricing groupId={groupId} />
      <GroupSafety groupId={groupId} />
      <Testimonials groupId={groupId} />
      <GroupCTA groupId={groupId} />
      <Faq groupId={groupId} />
      <CourseLeadForm groupId={groupId} />
    </PageLayout>
  );
};
