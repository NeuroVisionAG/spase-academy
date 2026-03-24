import { createBrowserRouter } from 'react-router';
import { MainPage } from '../pages/main/MainPage';
import { GroupPage } from '../pages/group/GroupPage';
import { CoursePage } from '../pages/course/CoursePage';
import { StubPage } from '../pages/stub/StubPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';
import { ThankYouPage } from '../pages/thank-you/ThankYouPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/kadety',
    element: <GroupPage groupId="kadety" />,
  },
  {
    path: '/stajery',
    element: <StubPage title="Стажёры (10-13 лет) - Скоро!" />,
  },
  {
    path: '/komanda',
    element: <StubPage title="Команда (14+ лет) - Скоро!" />,
  },
  {
    path: '/kadety/:directionId',
    element: <CoursePage courseId="kadety-neyrokreativ" />,
  },
  {
    path: '/stajery/:directionId',
    element: <StubPage title="Страница курса - Скоро!" />,
  },
  {
    path: '/komanda/:directionId',
    element: <StubPage title="Страница курса - Скоро!" />,
  },
  {
    path: '/about',
    element: <StubPage title="О нас - в разработке" />,
  },
  {
    path: '/gallery',
    element: <StubPage title="Галерея проектов - в разработке" />,
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />,
  },
  {
    path: '/privacy',
    element: <StubPage title="Политика конфиденциальности" />,
  },
  {
    path: '/terms',
    element: <StubPage title="Пользовательское соглашение" />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
