import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#service" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const darktheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={darktheme} >
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "none",
          height: "80px", // Increased height
        }}
        className=" bg-transparent shadow-transparent"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: "100%", // Ensures content is vertically centered
            }}
          >
            {/* HnS Logo (Left Side) */}
            <Typography
              variant="h3" // Bigger text size
              noWrap
              component="a"
              href="#home"
              sx={{
                fontFamily: "Audiowide",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                mr: 2,
              }}
            >
              HnS
            </Typography>

            {/* Navigation Links (Right Side) */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end", // Push links to the right
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "black",
                    fontSize: "1.2rem", // Bigger text size for links
                    textTransform: "none", // Prevent uppercase transformation
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href={page.href}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
