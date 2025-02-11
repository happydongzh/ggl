import { useRoutes } from "react-router-dom";
import {
  HOME_ROUTE
} from "@/constants";
import HomeLayout from "@/layouts";
import Home from "@/pages/home";

/**
 * 应用的路由配置
 */
const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: ABOUT_ROUTE,
      //   element: <About />,
      // },
      // {
      //   path: CONTACT_ROUTE,
      //   element: <Contact />,
      // },
      // {
      //   path: FAQ_ROUTE,
      //   element: <Faq />,
      // },
    ],
  },
];
export const RenderRouter = () => {
  const element = useRoutes(routes);
  return element;
};
