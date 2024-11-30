
import Root from "./pages/Root"
import DetailsPage from "./pages/DetailsPage"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//never use it // just an example for router definitions

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: 'packages/:name',
        element: <DetailsPage />
      },
    ]
  },
])


function AppRegistry() {

  return (
    <div className="pt-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default AppRegistry
