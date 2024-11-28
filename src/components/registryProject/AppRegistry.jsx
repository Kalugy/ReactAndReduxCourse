
import Root from "./pages/Root"
import DetailsPage from "./pages/DetailsPage"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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

//only on router so i made it with the other component this is just another example but is never used

function AppRegistry() {

  return (
    <div className="pt-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default AppRegistry
