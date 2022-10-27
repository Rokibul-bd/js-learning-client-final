import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/blog/Blog';
import CheackOut from './Components/cheackout/CheackOut';
import CourseDetails from './Components/courseDetails/CourseDetails';
import Courses from './Components/courses/Courses';
import LogIn from './Components/login/LogIn';
import Register from './Components/register/Register';
import Main from './leyout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch('https://js-learning-liard.vercel.app/courses');
          },
          element: <Courses></Courses>
        },
        {
          path: "/courses",
          loader: async () => {
            return fetch('https://js-learning-liard.vercel.app/courses');
          },
          element: <Courses></Courses>
        },
        {
          path: '/courses/:id',
          loader: async ({ params }) => {
            return fetch(`https://js-learning-liard.vercel.app/courses/${params.id}`)
          },
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/courses/:id/cheackout',
          loader: async ({ params }) => {
            return fetch(`https://js-learning-liard.vercel.app/courses/${params.id}`)
          },
          element: <CheackOut></CheackOut>
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
