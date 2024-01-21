import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authUser, IUser } from "../../api/auth";

export enum Roles {
  ADMIN = 'admin',
  USER = 'user'
}

export const Auth = ({onSubmit}: {onSubmit: (role: Roles) => void}) => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<IUser>();
  const [user, setUser] = useState<IUser>();

  const submitForm = (data: IUser) => {
    authUser(data)
      .then((response) => {
        return JSON.parse(JSON.stringify(response.data));
      })
      .then((data) => {
        console.log(data);
        setUser(user);
        if (data) {
          if (data.role) {
            localStorage.setItem('email', data.email);
            localStorage.setItem('role', data.role);
            onSubmit(data.role)
            if (data.role === Roles.ADMIN) {
              navigate('/users')
            }
            else {
              navigate('/dashboard')
            }
          }
        }
      });
  };

  return (
    <Box
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "130px",
      }}
    >
      <Typography variant="h3">Авторизация</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        sx={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextField variant="standard" label="Логин" onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextField
              variant="standard"
              label="Пароль"
              type="password"
              onChange={onChange}
            />
          )}
        />
        <Button type="submit">Войти</Button>
      </Box>
    </Box>
  );
};
