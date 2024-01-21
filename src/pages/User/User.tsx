import { Divider, InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import temperature from "../../icons/temperature_icon.png";
import plant from "../../icons/plant_icon.png";
import humidity from "../../icons/humidity_icon.png";
import refresh from "../../icons/refresh_icon.png";
import lamp from "../../icons/lamp_icon.png";

export const User = () => {
  return (
    <Box
      sx={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Мой гроубокс
      </Typography>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "50px", 
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "2px solid white",
            padding: "20px 10px 20px 20px",
            minWidth: "245px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>
            <img src={temperature} height="50px" alt="" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>Температура</Typography>
              <Typography variant="h6" sx={{ textAlign: "end" }}>
                + 25°C
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>Обновлено сейчас</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "2px solid white",
            padding: "20px 10px 20px 20px",
            minWidth: "245px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>
            <img src={humidity} height="50px" alt="" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>Влажность</Typography>
              <Typography variant="h6" sx={{ textAlign: "end" }}>
                80%
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>Обновлено 1 час назад</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "2px solid white",
            padding: "20px 10px 20px 20px",
            minWidth: "245px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>
            <img src={plant} height="50px" alt="" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>Кислотность</Typography>
              <Typography variant="h6" sx={{ textAlign: "end" }}>
                30%
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>Обновлено сейчас</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: "80px",
          border: "2px solid white",
          marginTop: "50px",
          padding: "20px",
          maxWidth: "500px",
        }}
      >
        <img src={lamp} height="100px" alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <InputLabel>R</InputLabel>
          <TextField variant="standard" disabled sx={{width: '150px'}}></TextField>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <InputLabel>G</InputLabel>
          <TextField variant="standard" disabled sx={{width: '150px'}}></TextField>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <InputLabel>B</InputLabel>
          <TextField variant="standard" disabled sx={{width: '150px'}}></TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
