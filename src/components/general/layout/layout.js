import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
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

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

//json object with some promotions
const promotions = [
  {
    id: 1,
    title: "Promotion 1",
    description: "Description 1",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "Promotion 2",
    description: "Description 2",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    title: "Promotion 3",
    description: "Description 3",
    image: "https://source.unsplash.com/random",
  },
];

//size top bar
const styles = {
  height: "10rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
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
  const [filter, setFilter] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
    console.log(filter);
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
            sx={{ ml: 4, marginTop: "95%", ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </span>
        <Toolbar sx={styles}>
          <div>
            <SearchIcon sx = {{ mt: 3, mr:2  }} />
            <TextField
              label="Buscar"
              onChange={handleSearchChange}
              variant="standard"
            />
          </div>
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
            <Text color="white"> JUANITA PEREZ</Text>
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
          {["Inicio", "Clave Dinámica"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon sx={textColor}>
                {text === "Inicio" ? <HomeIcon /> : <KeyIcon />}
              </ListItemIcon>
              <ListItemText sx={textColor} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={dividerStyles} />
        <List>
          {["Destinar Gastos", "Historico de Transacciones"].map((text) => (
            <ListItem button key={text} sx={textColor}>
              <ListItemIcon sx={textColor}>
                {text === "Destinar Gastos" ? <PaidIcon /> : <HistoryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={dividerStyles} />
        <List>
          {["Recargas", "Info"].map((text) => (
            <ListItem sx={textColor} button key={text}>
              <ListItemIcon sx={textColor}>
                {text === "Info" ? (
                  <InfoIcon />
                ) : (
                  <VerticalAlignTopRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader sx={styles} />
        {props.children}
      </Main>
    </Box>
  );
}
