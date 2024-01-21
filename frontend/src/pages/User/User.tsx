import { Divider, InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import temperature from "../../icons/temperature_icon.png";
import plant from "../../icons/plant_icon.png";
import humidity from "../../icons/humidity_icon.png";
import refresh from "../../icons/refresh_icon.png";
import lamp from "../../icons/lamp_icon.png";

import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import { format } from "date-fns"

const GrowBoxBackendUrl = "http://localhost:9000/stats"

interface GrowBoxStats {
  temperature: number
  humidity: number
  acid: number
}

export const User = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [updatedTime, setUpdatedTime] = useState(Date.now())
  
  const [growBoxStats, setGrowBoxStats] = useState<GrowBoxStats | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GrowBoxBackendUrl);
        const jsonData = await response.json();
        setGrowBoxStats(jsonData as GrowBoxStats);
        setUpdatedTime(Date.now())
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  
  const formattedTime = format(updatedTime, 'yyyy-MM-dd HH:mm:ss');

  const handleRedChange = (event: Event, newValue: number | number[]) => {
     setRed(newValue as number);
  };

  const handleGreenChange = (event: Event, newValue: number | number[]) => {
    setGreen(newValue as number);
  };

  const handleBlueChange = (event: Event, newValue: number | number[]) => {
    setBlue(newValue as number);
  };

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
              {growBoxStats ? growBoxStats.temperature : "Loading"}℃
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>
              Обновлено {formattedTime}
            </Typography>
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
              {growBoxStats ? growBoxStats.humidity : "Loading"}%
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>Обновлено {formattedTime}</Typography>
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
              {growBoxStats ? growBoxStats.acid : "Loading"}%
              </Typography>
            </Box>
          </Box>
          <Divider color="white" />
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <img src={refresh} height="20px" alt="" />
            <Typography>Обновлено {formattedTime}</Typography>
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
          <InputLabel>Red</InputLabel>
          <Slider
            value={red}
            onChange={handleRedChange}
            aria-label={"Red"}
            min={0}
            max={60}
            sx={{width: '150px'}}
          />
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <InputLabel>Green</InputLabel>
          <Slider
            value={green}
            aria-label={"Green"}
            onChange={handleGreenChange}
            min={0}
            max={100}
            sx={{width: '150px'}}
          />
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <InputLabel>Blue</InputLabel>
          <Slider
            value={blue}
            aria-label={"Blue"}
            onChange={handleBlueChange}
            min={0}
            max={100}
            sx={{width: '150px'}}
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};