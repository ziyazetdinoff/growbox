import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: 'rgba(255, 255, 255, 1)',
        padding: "30px",
        minHeight: '50px',
        // position: 'absolute',
        // bottom: 0,
        width: '100%'
      }}
    >
      <Box sx={{backgroundColor: 'transparent', zIndex: 100}}>
        <Typography variant="body1">ⓒ 2023 Лукошко</Typography>
      </Box>
    </Box>
  );
};
