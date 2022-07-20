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

//Icons
import Icon from "@mui/material/Icon";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

// Pages
import Dashboard from "layouts/dashboard";
import NewUser from "pages/Admin/NewUser";
import Users from "pages/Admin/Users";
import NewArticle from "pages/Member/NewArticle";
import Article from "pages/Member/Articles";
import Consultancies from "pages/Member/Consultancies";
import ViewFeed from "pages/Admin/ViewFeed";
import NewInventary from "pages/Admin/NewInventary";
import HistoryPC from "pages/Admin/HistoryPC";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "home",
    component: <Dashboard />,
  },

  { type: "title", title: "Integrantes", key: "users-pages" },

  {
    type: "collapse",
    name: "Nuevo integrante",
    key: "new-user",
    icon: <PersonAddAltIcon fontSize="small"/>,
    route: "newuser",
    component: <NewUser />,
  },
  {
    type: "collapse",
    name: "Ver integrantes",
    key: "view-users",
    icon: <Icon fontSize="small">group</Icon>,
    route: "users",
    component: <Users />,
  },

  { type: "title", title: "Artículos", key: "article-pages" },

  {
    type: "collapse",
    name: "Crear artículo",
    key: "create-article",
    icon: <Icon fontSize="small">add</Icon>,
    route: "newarticle",
    component: <NewArticle />,
  },
  {
    type: "hidden",
    name: "Editar artículo",
    key: "edit-article",
    route: "/articles/edit",
  },
  {
    type: "collapse",
    name: "Ver artículos",
    key: "view-articles",
    icon: <Icon fontSize="small">article</Icon>,
    route: "articles",
    component: <Article />,
  },

  { type: "title", title: "Servicios de acompañamiento", key: "services-pages" },

  {
    type: "collapse",
    name: "Asesorías solicitadas",
    key: "view-consultances",
    icon: <PersonSearchIcon fontSize="small"/>,
    route: "consultancies",
    component: <Consultancies />,
  },
  {
    type: "collapse",
    name: "Retroalimentación",
    key: "view-feed",
    icon: <Icon fontSize="small">feedback</Icon>,
    route: "feed",
    component: <ViewFeed />,
  },

  { type: "title", title: "Inventario", key: "inventory-pages" },

  {
    type: "collapse",
    name: "Agregar inventario",
    key: "add-inventory",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "addinventary",
    component: <NewInventary />,
  },
  {
    type: "collapse",
    name: "Historial de reservas",
    key: "historypc",
    icon: <Icon fontSize="small">history</Icon>,
    route: "historypc",
    component: <HistoryPC />,
  },
];

export default routes;