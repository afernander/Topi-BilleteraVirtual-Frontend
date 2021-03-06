import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import PaidIcon from "@mui/icons-material/Paid";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import VerticalAlignTopRoundedIcon from "@mui/icons-material/VerticalAlignTopRounded";
import Avatar from "@mui/material/Avatar";
import { Text } from "../../text/text";
import Image from "./../../../images/girl.png";
import LayoutBg from "./../../../images/bg-layout.png";
import { Button } from "@mui/material";
import { MainButton } from "./../../general/button/main-button";

const drawerWidth = 240;


const reg=/\d{1,3}(?=(\d{3})+$)/g;
  const saldo0 = JSON.parse(localStorage.getItem('user')).balance;

    const saldo = ((saldo0 + '').replace(reg, '$&.')).replace(",", ".");

//size top bar
const styles = {
  height: "2rem",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  width: "95%",
};

const dividerStyles = {
  margin: ".7rem",
};

const textColor = {
  color: "white",
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Aside(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleName = async () => {

    const id = JSON.parse(localStorage.getItem('user')).id;
    fetch(`http://localhost:3000/users/${id}`, {
      "method": "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundImage: `url(${LayoutBg})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "125% 33%",
          display: "flex",
          flexFlow: "row nowrap",
        }}
      >
        <span>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 1, marginTop: "20%", ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </span>
        <Toolbar sx={styles}>
        <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          width: "15%",
          height: "50%",
          position: "relative",
          right: "70%",
          textAlign: "center",
          alignItems: "center",

          border: "1px solid black",

        }}
      >
        <Text variant="h5" color="black">
        $  {saldo}
        </Text>
      </div>
          <MainButton width="15%" href="/ingresar">Cerrar sesi??n</MainButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#ED1C29",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              paddingBottom: "1.5rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Image}
              sx={{ width: 160, height: 160, marginTop: "1rem" }}
            />
            <Text color="white">{JSON.parse(localStorage.getItem('user')).name}</Text>
            <Text color="white"> Universidad EAFIT</Text>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={dividerStyles} />
        <List>
          <Button sx={{ textTransform: "none", margin: "0" }} href="/home">
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
          </Button>
          <Button sx={{ textTransform: "none" }} href="/code">
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Clave Din??mica" />
            </ListItem>
          </Button>
        </List>
        <Divider sx={dividerStyles} />
        <List>
          <Button
            sx={{ textTransform: "none", margin: "0" }}
            href="/destinarGastos "
          >
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <PaidIcon />
              </ListItemIcon>
              <ListItemText primary="Destinar Gastos" />
            </ListItem>
          </Button>

          <Button
            sx={{ textTransform: "none", margin: "0" }}
            href="/historical"
          >
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Historico de Transacciones" />
            </ListItem>
          </Button>
        </List>
        <Divider sx={dividerStyles} />
        <List>
          <Button sx={{ textTransform: "none", margin: "0" }} href="/recargas">
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <VerticalAlignTopRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Recargas" />
            </ListItem>
          </Button>

          <Button sx={{ textTransform: "none", margin: "0" }} href="/info">
            <ListItem sx={textColor}>
              <ListItemIcon sx={textColor}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItem>
          </Button>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader sx={styles} />
        {props.children}
      </Main>
    </Box>
  );
}
