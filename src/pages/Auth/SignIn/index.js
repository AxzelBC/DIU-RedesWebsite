import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'utils/firebase';
import { useNavigate } from "react-router-dom";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes/pages.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";


function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //Login - Firebase
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msgError, setMsgError] = useState(null);
  
  const loginUsuario = () => {
    signInWithEmailAndPassword(auth,email,pass)

        .then( (r) => {
            navigate('/admin');
        })
        .catch( (err) => {
            //Firebase: Error (auth/wrong-password)
            if (err.code === 'auth/wrong-password') {
                setMsgError('Contraseña incorrecta');
            }
            //Firebase: Error (auth/user-not-found).
            if (err.code === 'auth/user-not-found') {
                setMsgError('El usuario no existe');
            }
            //Firebas: Error (auth/invalid-email)
                setMsgError('El usuario no existe');
            if (err.code === 'auth/invalid-email')
                setMsgError('El correo es invalido');
            console.log(err)
    })
}

  return (
    <>
      <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          sticky
          transparent
          relative
          light
          center
        />
      </MKBox>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="error"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Iniciar Sesión
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth onChange={(e) => { setEmail(e.target.value) }}/>
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth onChange={(e) => { setPass(e.target.value) }}/>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="error" fullWidth onClick={loginUsuario}>
                      iniciar sesión
                    </MKButton>
                  </MKBox>
                  {
                    msgError != null ?
                    (
                        <>
                            <MKBox mt={3} mb={1} textAlign="center">
                            {msgError}
                            </MKBox>
                        </>
                    )
                    :
                    (
                        <span></span>
                    )
                  }
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
