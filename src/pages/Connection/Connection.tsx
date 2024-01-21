import {
  Button,
  InputLabel,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { postUser, UserData } from "../../api/postUser";
import { Mail } from "../../icons/Mail";
import { Phone } from "../../icons/Phone";
import { Telegram } from "../../icons/Telegram";

export const Connection = () => {
  const { control, handleSubmit } = useForm<UserData>();

  const submitForm = (data: UserData) => {
    postUser(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submitForm)}
      sx={{
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        marginTop: "80px",
      }}
    >
      <Typography sx={{ fontSize: "60px", textAlign: "center" }}>
        Будем на связи
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          gap: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <InputLabel sx={{ color: "#ffffff" }}>Имя</InputLabel> */}
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField variant="standard" label="Имя" onChange={onChange} />
            )}
            name={"name"}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <InputLabel sx={{ color: "#ffffff" }}>Email</InputLabel> */}
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField variant="standard" label="Email" onChange={onChange} />
            )}
            name={"email"}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <InputLabel sx={{ color: "#ffffff" }}>Вопрос</InputLabel> */}
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                variant="standard"
                label="Вопрос"
                onChange={onChange}
              />
            )}
            name={"question"}
          />
        </Box>
      </Box>
      <Button type="submit">Отправить</Button>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <SvgIcon sx={{ height: "30px", width: "30px" }}>
          <Mail />
        </SvgIcon>
        <SvgIcon sx={{ height: "30px", width: "30px" }}>
          <Telegram />
        </SvgIcon>
        <SvgIcon sx={{ height: "30px", width: "30px" }}>
          <Phone />
        </SvgIcon>
      </Box>
    </Box>
  );
};
