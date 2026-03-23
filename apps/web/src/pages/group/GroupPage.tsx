import React from 'react';
import { PageLayout } from '@/shared/ui';
import { GroupHero } from '@/widgets/group-hero';
import { GroupDirections } from '@/widgets/group-directions';

export const GroupPage: React.FC<{ groupId: string }> = ({ groupId }) => {
  return (
    <PageLayout>
      <GroupHero groupId={groupId} />
      <GroupDirections groupId={groupId} />
    </PageLayout>
  );
};
