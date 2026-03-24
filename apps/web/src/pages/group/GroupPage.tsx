import React from 'react';
import { PageLayout } from '@/shared/ui';
import { GroupHero } from '@/widgets/group-hero';
import { GroupDirections } from '@/widgets/group-directions';
import { GroupInfo } from '@/widgets/group-info';
import { GroupSkills } from '@/widgets/group-skills';
import { CourseLeadForm } from '@/widgets/course-lead-form';

export const GroupPage: React.FC<{ groupId: string }> = ({ groupId }) => {
  return (
    <PageLayout>
      <GroupHero groupId={groupId} />
      <GroupDirections groupId={groupId} />
      <GroupInfo groupId={groupId} />
      <GroupSkills />
      <CourseLeadForm />
    </PageLayout>
  );
};
