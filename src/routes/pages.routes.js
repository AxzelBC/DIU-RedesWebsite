/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InterestsIcon from "@mui/icons-material/Interests";
import InfoIcon from "@mui/icons-material/Info";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Inicio from "layouts/pages/landing-pages/inicio";
import QuienesSomos from "layouts/pages/landing-pages/quienes-somos";
import QueNosInteresa from "layouts/pages/landing-pages/que-nos-interesa"
import ArticlePage from "layouts/pages/landing-pages/articulos";

import ProfilesList from "examples/Lists/ProfilesList"
import Reservas from "pages/LandingPages/Servicios/Reservas";
import Consultas from "pages/LandingPages/Servicios/Consultas";
import Asesorias from "pages/LandingPages/Servicios/Asesorias";
import Unirse from "pages/LandingPages/Servicios/Unirse";
// import SignIn from "layouts/pages/authentication/sign-in";

const routes = [
  {
    name: "Inicio",
    icon: <HomeIcon fontSize="small"/>,
    route: "/",
    key: "inicio",
    component: <Inicio />,
  },
  {
    name: "Quienes Somos",
    icon: <InfoIcon fontSize="small"/>,
    route: "/quienes-somos",
    key: "quienes-somos",
    component: <QuienesSomos />,
  },
  {
    name: "Que Nos Interesa",
    icon: <InterestsIcon fontSize="small"/>,
    route: "/que-nos-interesa",
    key: "que-nos-interesa",
    component: <QueNosInteresa />,
  },
  {
    name: "Artículos",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/articulos",
    key: "articulos",
    component: <ArticlePage />,
  },
  {
    name: "Servicios",
    icon: <Icon fontSize="small">laptop</Icon>,
    route: "/servicios",
    key: "servicios",
    component: <AboutUs />,
    collapse: [
      {
        name: "Asesorias",
        route: "/servicios/asesorias",
        key: "asesorias-usuario",
        component: <Asesorias />,

      },
      {
        name: "Consultas",
        route: "/servicios/consultas",
        key: "consultas-usuario",
        component: <Consultas />,

      },
      {
        name: "Reserva",
        route: "/servicios/reserva",
        key: "reserva-usuario",
        component: <Reservas />,
      },
      {
        name: "Unirse",
        route: "/servicios/unirse",
        key: "unirse-integrante",
        component: <Unirse />,
      },
    ]
  },/* 
  {
    name: "Profiles",
    icon: <Icon>laptop</Icon>,
    route: "/profiles",
    key: "profiles",
    component: <ProfilesList />,
  }, */
];

export default routes;
