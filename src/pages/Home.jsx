import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import bannerImage from "../assets/image/baner.png";
import BanquateDetails from "../pages/Data";

function Home() {
  const [halls, setHalls] = useState([]);
  const [search, setSearch] = useState({
    cost: "",
    capacity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/halls")
      .then((response) => setHalls(response.data))
      .catch((error) => console.error("Error fetching halls:", error));
  }, []);

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          component="img"
          src={bannerImage}
          alt="Banquet Hall Banner"
          sx={{
            width: "100%",
            height: { xs: 300, md: 400 },
            objectFit: "cover",
            opacity: 0.5,
            mb: 2,
          }}
        />

        {/* Text over banner */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
          <Typography variant="h4" color="white" fontWeight="bold">
            Find the Perfect
          </Typography>
          <Typography variant="h4" color="white" fontWeight="bold">
            Banquet Hall
          </Typography>
        </Box>

        {/* Search box */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "35%", md: "40%" },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            width: { xs: "90%", md: "80%", lg: "70%" },
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            p: 2,
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Capacity"
                variant="outlined"
                fullWidth
                value={search.capacity}
                onChange={(e) =>
                  setSearch({ ...search, capacity: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Budget"
                variant="outlined"
                fullWidth
                value={search.cost}
                onChange={(e) =>
                  setSearch({ ...search, cost: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSearch}
                sx={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  borderRadius: "30px",
                  padding: "14px",
                  fontSize: "16px",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(255, 87, 34, 0.4)",
                  "&:hover": {
                    backgroundColor: "#ff8a50",
                  },
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <BanquateDetails />
    </>
  );
}

export default Home;
