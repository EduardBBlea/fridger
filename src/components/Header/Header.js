import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      }}
    >
      <Toolbar>
        <IconButton
          href="/add"
          size="large"
          edge="start"
          color="inherit"
          aria-label="add button"
          sx={{
            margin: "auto",
          }}
        >
          <Stack direction="column">
            <AddIcon sx={{ margin: "auto" }} />
            <Typography variant="h6" component="div">
              ADD
            </Typography>
          </Stack>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
