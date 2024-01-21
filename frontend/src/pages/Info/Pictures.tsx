import Box from "@mui/material/Box";
import first from "./first.jpg";
import second from "./second.jpg";
import third from "./third.jpg";

export const Pictures = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <img src={first} height="100px" />
      <img src={second} height="100px" />
      <img src={third} height="100px" />
      <img src={first} height="100px" />
      <img src={second} height="100px" />
    </Box>
  );
};
