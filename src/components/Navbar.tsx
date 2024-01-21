import { Button, Link, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import { Magnifier } from "../icons/Magnifier";
import { Logo } from "../icons/Logo";
import { useEffect, useMemo, useState } from "react";
import { Roles } from "../pages/Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useRole } from "../hooks/useRole";

export const Navbar = ({logoutFunction, role}: any) => {

  console.log(role)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "35px 30px",
        marginRight: "30px",
        gap: "30px",
      }}
    >
      <Box>
        <SvgIcon sx={{ height: "24px", width: "24px" }}>
          <Logo />
        </SvgIcon>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "end",
        }}
      >
        {role === null && (<Link sx={{ textDecoration: "none" }} href="/">
          Главная
        </Link>
        )}
        {role === null && (<Link sx={{ textDecoration: "none" }} href="/panel">
          Панель
        </Link>
        )}
        {role === Roles.ADMIN && (
          <Link sx={{ textDecoration: "none" }} href="/users">
            Заявки
          </Link>
        )}
        {role === Roles.USER && (
          <Link sx={{ textDecoration: "none" }} href="/dashboard">
            Дашборд
          </Link>
        )}
        {role === Roles.USER && (
          <Link sx={{ textDecoration: "none" }} href="/prediction">
            Прогресс
          </Link>
        )}
        {(role && (
          <Link
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={logoutFunction}
          >
            Выход
          </Link>
        )) || (
          <Link sx={{ textDecoration: "none" }} href="/auth">
            Вход
          </Link>
        )}
        {/* <SvgIcon sx={{ height: "24px", width: "24px" }}>
          <Magnifier />
        </SvgIcon> */}
      </Box>
    </Box>
  );
};
