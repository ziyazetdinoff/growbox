import { Button, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "./growBox.png";

export const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "15%",
          columnGap: "150px",
          rowGap: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "40pt", textTransform: "uppercase" }}>
            Лукошко
          </Typography>
          <Typography>Умный гроубокс для вашего дома</Typography>
          <Button sx={{marginTop: '40px'}} href='/info'>Узнать больше</Button>
        </Box>
        <Box>
          <img src={logo} height="400px" alt="" />
        </Box>
      </Box>
    </Box>
  );
};
