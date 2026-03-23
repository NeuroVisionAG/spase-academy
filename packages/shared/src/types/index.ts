export type GroupId = 'kadety' | 'stajery' | 'komanda';
export type DirectionId = 'neyrokreativ' | 'vayb-koding';
export type CourseId = `${GroupId}-${DirectionId}`;

export interface GroupInfo {
  id: GroupId;
  slug: string;
  name: string;
  ageRange: string;
  description: string;
}

export interface DirectionInfo {
  id: DirectionId;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
}
