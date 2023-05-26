import { AppBar, Box, InputBase, Toolbar, Typography} from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import styled from "@emotion/styled";

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
}))
const Icons = styled(Box)(({theme}) => ({
    backgroundColor: "white"
}))

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          ChatOn
        </Typography>
        <ChatIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="Search..."/></Search>
        <Icons>Icons</Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
