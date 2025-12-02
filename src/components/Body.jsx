import { createBrowserRouter } from 'react-router-dom'; 
import { HeroPage } from './HeroPage';
import { Login } from './Login';
import { RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { ForgetPassword } from './ForgetPassword';
import { PublicRoute } from '../routes/PublicRoute';
import { ProtectRoute } from '../routes/ProtectRoute';

export const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:(
        <PublicRoute>
          <HeroPage/>
        </PublicRoute>
      )
    },
    {
      path:'/login',
       element:(
        <PublicRoute>
          <Login/>
        </PublicRoute>
      )
    },
    {
      path:'/home',
       element:(
        <ProtectRoute>
          <Home/>
        </ProtectRoute>
      )
    },
    {
      path:'/forget-password',
       element:(
        <PublicRoute>
          <ForgetPassword/>
        </PublicRoute>
      )
    },
  ])

  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  )
}



