// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function InfoQueNosInteresa() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <MKBox mb={1} alignItems="center">
                  <DefaultInfoCard 
                    title="Actividades y proyectos del grupo"
                    description="Propuesta de comités cuando el grupo se expanda 15 personas:"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={10}>
                <MKBox mb={2}>
                  <DefaultInfoCard
                    description="De planeación o nominación: 
                    Se encargará de planear las nuevas reuniones (definir su horario, día, las actividades, etc). 
                    Deben asegurarse que las reuniones se realicen exitosamente (para ello aconsejo que organicen 
                        como propuesta, uno o dos días antes de alguna reunión, cómo será el orden del día, es decir, 
                        el orden de temas que vamos a tratar).
                    "
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={10}>
                <MKBox mb={{ xs: 5, md: 2 }}>
                  <DefaultInfoCard
                    description=" De auditoría y gestión documental: 
                    Observar cómo van los registros financieros  (esto se implementará más adelante) 
                    Evitar algún fraude en la compilación de la información (acá también se incluyen 
                    Google docs o actas de reuniones) y recursos económicos (fuentes de los artículos, 
                    que se plasme en el blog los informes que saquemos, etc).
                    "
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={10}>
                <MKBox mb={{ xs: 5, md: 2 }}>
                  <DefaultInfoCard
                    description="De diseño gráfico: 
                    Se involucra en cualquier producción que involucre el diseño gráfico como 
                    la elaboración de pósteres, afiches publicitarios, brochures, etc… 
                    Acá deben de ir los que se sientan capacitados en hacer estos contenidos 
                    con calidad y rápidamente para darnos a conocer, organizar las reuniones 
                    o propósitos que definamos en reuniones.
                    "
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={10}>
                <MKBox mb={{ xs: 5, md: 3 }}>
                  <DefaultInfoCard
                    description=" De audio: 
                    Maneja el contenido auditivo del grupo para, por ejemplo, producir vídeos 
                    o audios (usualmente útiles para comprender temas o tópicos que requieran 
                        mucha profundización, se aprende mejor observando que leyendo algunas veces. 
                        También para publicidad).
                    "
                  />
                </MKBox>
              </Grid>

              
              
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InfoQueNosInteresa;