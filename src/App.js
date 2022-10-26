import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CourseDetails from './Components/courseDetails/CourseDetails';
import Courses from './Components/courses/Courses';
import Home from './Components/home/Home';
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
          element: <Home></Home>
        },
        {
          path: "/home",
          element: <Home></Home>
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
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },

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
