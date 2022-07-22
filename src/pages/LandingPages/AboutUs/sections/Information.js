// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon=""
                    title="Misión"
                    description="UnixValle es un grupo de estudiantes entusiastas del software libre.
                     Nuestra misión principal es elevar las habilidades en experimentación, los conocimientos
                    de sus integrantes y de la comunidad en general acerca de temas relacionados con los sistemas 
                    Linux junto con las herramientas de este sistema."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon=""
                    title="Visión"
                    description="El grupo se visualiza en el 2024 cómo un referente dentro de la Universidad del Valle,
                     la región y la comunidad en general, en temas asociados a Linux, siendo un lugar de apoyo frente a 
                     conocimientos y habilidades que permitan dar un acercamiento a saberes relacionados con este sistema. 
                     Lo anterior, por medio de plataformas virtuales que comuniquen a distintos grupos de estudio, 
                     investigación o divulgación a través del préstamo de espacios para el aprendizaje."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon=""
                    title="Lineas de trabajo"
                    description="Se crearán hilos en discord para ello:
                    Discord.
                    Podcast: se escribe sobre qué temas se van a discutir en los próximos podcast del grupo.
                    Blog: Se habla sobre el blog, donde se pueden lanzar sugerencias, inquietudes o peticiones para modificarlo.
                    Distribuciones: se detallarán conversaciones sobre distros de Linux. Por ejemplo: preguntas y respuestas 
                    sobre una distro en concreto como ubuntu o arch.
                    Social: discusión sobre la parte mediática del grupo a través de las redes sociales.
                    "
                  />
                </MKBox>
              </Grid>

              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon=""
                    title="Ubicación"
                    description="Universidad del Valle - Cl. 13 #100-00, Cali, Valle del Cauca" 
                  />
                </MKBox>
              </Grid>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.4464333038143!2d-76.52988882987928!3d3.3763544014358757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a11660b89f4f%3A0xffaffde9d3d8188e!2sEdificio%20B13%2C%20Escuela%20de%20Ingenier%C3%ADa%20de%20Sistemas%20y%20Computaci%C3%B3n!5e0!3m2!1ses!2sco!4v1654666638568!5m2!1ses!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
