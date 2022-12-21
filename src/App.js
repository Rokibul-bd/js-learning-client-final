import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/blog/Blog';
import CheackOut from './Components/cheackout/CheackOut';
import CourseDetails from './Components/courseDetails/CourseDetails';
import Courses from './Components/courses/Courses';
import LogIn from './Components/login/LogIn';
import Register from './Components/register/Register';
import Route404 from './Components/Rount404/Route404';
import Main from './leyout/Main';
import PrivetRoute from './routes/PrivetRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyCourses from './Components/MyCourses/MyCourses';
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
          path: '/mycourse',
          element: <PrivetRoute><MyCourses></MyCourses> </PrivetRoute>
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
          element: <PrivetRoute><CheackOut></CheackOut></PrivetRoute>
        }

      ]
    },
    {
      path: "*",
      element: <Route404></Route404>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
