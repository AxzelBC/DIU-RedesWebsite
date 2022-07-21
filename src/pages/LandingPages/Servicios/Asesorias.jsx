import React from "react";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import SignIn from "layouts/pages/authentication/sign-in";

// Routes
import routes from "routes/pages.routes";
import footerRoutes from "routes/footer.routes";

function Asesorias(){
    return(
        <>
            <MKBox variant="gradient" bgColor="error" shadow="sm" py={0.25}>
              <DefaultNavbar
                routes={routes}
                action={{
                  type: "internal",
                  route: "/login",
                  component: <SignIn/>,
                  label: "Integrantes",
                  color: "default",
                }}
                sticky
                transparent
                relative
                light
                center
              />
            </MKBox>

            <MKBox>
                Asesorias
            </MKBox>

            <MKBox pt={6} px={1} mt={6}>
              <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    )
}

export default Asesorias;