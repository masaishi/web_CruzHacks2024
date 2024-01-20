"use client";
import * as React from "react";
import { Avatar, CssBaseline, Box, Typography, Container } from "@mui/material";
import { isMobile } from "react-device-detect";
import SearchIcon from "@mui/icons-material/Search";

import GoogleSearchBar from "@/components/GoogleSearchBar";
import ColoredChips from "@/components/chips"
import PieChart from "@/components/PieChart";
import Copyright from "@/components/Copyright";

// const defaultTheme = createTheme();

function Dashboard() {
  return (
    <Container>
      <CssBaseline />
      <Box
        width={"100%"}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cruz Hack 2024
        </Typography>
        <Box
          width={isMobile ? "70%" : "100%"}
          marginTop={5}
          className="flex-container"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "15%",
          }}
        >
          {/* GoogleSearchBar */}
          <Box
            marginTop={5}
            width={isMobile ? "80%" : "80%"}
            height={"75%"}
            
            sx={{
              flexDirection: isMobile ? "row" : "column",
            }}
          >
            <GoogleSearchBar />
            <ColoredChips />
          </Box>

          {/* Section */}
          <Box width={"100%"} height={"75%"}>
            <Typography>Section</Typography>
          </Box>

          {/* PieChart */}
          <Box
            width={isMobile ? "120%" : "100%"}
            
            sx={{
              flexDirection: isMobile ? "row" : "column",
            }}
          >
            <PieChart />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

export default Dashboard;
