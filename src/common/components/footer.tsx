import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
      position: "fixed",
        mt: 15,
        py: 3,
        px: 2,
        backgroundColor: "skyblue",
        width: "100%", 
        overflow: "hidden", 
      
      }}
    >
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}> 
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            width: "100%", 
            margin: 0,
          }}
        >
          
          <Grid 
            
            
            sx={{ 
              textAlign: { xs: "center", sm: "left" }, // Centrado en móviles
              overflow: "hidden", // Previene overflow
            }}
          >
            <Typography variant="h6" gutterBottom>
              Mi Empresa
            </Typography>
            <Typography variant="body2">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </Typography>
          </Grid>

          <Grid 
            
            sx={{ 
              textAlign: { xs: "center", sm: "left" },
              overflow: "hidden",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/productos" color="inherit" underline="hover">
                Productos
              </Link>
              <Link href="/contacto" color="inherit" underline="hover">
                Contacto
              </Link>
            </Box>
          </Grid>

        
          <Grid 
            
            sx={{ 
              textAlign: { xs: "center", sm: "left" },
              overflow: "hidden",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Link href="#">
                <Facebook fontSize="small" />
              </Link>
              <Link href="#">
                <Twitter fontSize="small" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;