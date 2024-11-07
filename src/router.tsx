import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Route/Home';
import NowPlay from './Route/NowPlay';
import Coming from './Route/Coming';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'movie/:id',
            element: <Home />,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <Coming />,
        children: [
          {
            path: 'movie/:id',
            element: <Coming />,
          },
        ],
      },
      {
        path: 'now-playing',
        element: <NowPlay />,
        children: [
          {
            path: 'movie/:id',
            element: <NowPlay />,
          },
        ],
      },
    ],
  },
]);
