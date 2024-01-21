import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MouseEventHandler, useState } from "react";

import pic00 from "../../pics/set/pic_0000.jpg";
import pic01 from "../../pics/set/pic_0001.jpg";
import pic04 from "../../pics/set/pic_0004.jpg";
import pic13 from "../../pics/set/pic_0013.jpg";
import pic18 from "../../pics/set/pic_0018.jpg";
import pic21 from "../../pics/set/pic_0021.jpg";
import pic30 from "../../pics/set/pic_0030.jpg";
import pic32 from "../../pics/set/pic_0032.jpg";
import pic34 from "../../pics/set/pic_0034.jpg";

interface IPicType {
  id: string;
  name: string;
  selected: boolean;
  result: string;
}

const picsArray: IPicType[] = [
  { id: "1", name: pic00, selected: false, result: "Final" },
  { id: "2", name: pic01, selected: false, result: "Final" },
  { id: "3", name: pic04, selected: false, result: "Final" },
  { id: "4", name: pic13, selected: false, result: "Average" },
  { id: "5", name: pic18, selected: false, result: "Final" },
  { id: "6", name: pic21, selected: false, result: "Average" },
  { id: "7", name: pic30, selected: false, result: "Average" },
  { id: "8", name: pic32, selected: false, result: "Final" },
  { id: "9", name: pic34, selected: false, result: "Start" },
];

export const PredictImage = () => {
  const [result, setResult] = useState<string>("");

  const [activePic, setActivePic] = useState<string>("");


  const handlePredictRequest = () => {
    const result = picsArray.find((pic) => pic.id === activePic);
    result && setResult(result?.result);
  };

  const handleImageClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setActivePic(event.currentTarget.id);
    setResult("");
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        margin: "30px 50px 50px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography variant="h4">Определение стадии роста растения</Typography>
      <Typography variant="h6">
        Наши гроубоксы используют современные технологии в области
        искусственного интеллекта для определения стадии роста растения.
      </Typography>
      <Typography variant="h5">Попробуйте сами!</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "20px",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px",
            justifyContent: "center",
            width: "72%",
          }}
        >
          {picsArray.map((pic) => (
            <Button
              key={pic.id}
              id={pic.id}
              onClick={handleImageClick}
              sx={
                activePic === pic.id
                  ? {
                      cursor: "pointer",
                      padding: "0",
                      width: "32%",
                      opacity: "0.4",
                    }
                  : { cursor: "pointer", padding: "0", width: "32%" }
              }
            >
              <img src={pic.name} width="100%" height="100%" alt="" />
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
            width: "300px",
          }}
        >
          <Typography>
            Выберите любое изображение и нажмите на кнопку, расположенную ниже.
          </Typography>
          <Button sx={{ marginBottom: "30px" }} onClick={handlePredictRequest}>
            Определить стадию
          </Button>
          {result && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "30px",
              }}
            >
              <Typography variant="body1">Растение на стадии:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                {result}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
