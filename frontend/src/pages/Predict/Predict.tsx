import { InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useMemo, useState } from "react";
import { postImage } from "../../api/postImage";
import { input } from "./styles";

export const Predict = () => {
  const [file, setFile] = useState<File>();
  const [result, setResult] = useState<string>("");

  const filename = useMemo(() => {
    if (file) {
      return file?.name;
    }
    return "";
  }, [file]);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handlePredictRequest = () => {
    if (file) {
      postImage(file)
        .then((response) => {
          console.log(response);
          return JSON.parse(JSON.stringify(response.data));
        })
        .then((data) => {
          console.log(data);
          setResult(data);
        });
    }
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
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
            width: "300px",
          }}
        >
          <Typography>
            Выберите любое изображение и нажмите на кнопку, расположенную ниже.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 0 0 0",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <InputLabel>
          <TextField
            sx={{ display: "none" }}
            name="upload-photo"
            type="file"
            onChange={handleChangeFile}
          />
          <Button component="span">Загрузить фото</Button>
        </InputLabel>
        <TextField
          value={filename}
          label="Ваше изображение:"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          sx={input}
        />
      </Box>
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
          <Typography variant="body1">Ваше растение на стадии:</Typography>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            {result}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
