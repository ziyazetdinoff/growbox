import { Link, SvgIcon, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Logo } from "../../icons/Logo";
import { MailWhite } from "../../icons/Mail_white";

export const Panel = () => {
  return (
    <Box
      sx={{
        marginTop: "15%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "120px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
          justifyContent: "center",
          textAlign: "center",
          width: '180px'
        }}
      >
        <Link sx={{ textDecoration: "none" }} href="/feedback">
          <SvgIcon sx={{ width: "100px", height: "100px" }}>
            <MailWhite />
          </SvgIcon>
        </Link>
        <Typography variant="h5" sx={{ wordWrap: "break-word" }}>
          Связаться с нами
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
          justifyContent: "center",
          textAlign: "center",
          width: '180px'
        }}
      >
        <Link sx={{ textDecoration: "none" }} href="/predict">
          <SvgIcon sx={{ width: "100px", height: "100px" }}>
            <Logo />
          </SvgIcon>{" "}
        </Link>
        <Typography variant="h5" sx={{ wordWrap: "break-word" }}>
          Попробовать наше приложение
        </Typography>
      </Box>
    </Box>
  );
};
