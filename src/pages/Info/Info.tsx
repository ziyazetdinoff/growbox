import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Pictures } from "./Pictures";

export const Info = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "50px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "70px",
          }}
        >
          <Typography variant="h4">ПРЕИМУЩЕСТВА</Typography>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textTransform: "capitalize",
            }}
          >
            <Typography>ЭСТЕТИЧНЫЙ И АВТОНОМНЫЙ</Typography>
            <Typography>МИНИМАЛЬНАЯ НАСТРОЙКА ЧЕРЕЗ ИНТЕРФЕЙС</Typography>
            <Typography>
              ИНТЕЛЛЕКТУАЛЬНАЯ СИСТЕМА САМА ОПРЕДЕЛЯЕТ СТАДИИ РОСТА РАСТЕНИЙ
            </Typography>
          </Box>
        </Box>
        <Pictures />
        <Typography variant="h4">ПОЧЕМУ ИМЕННО МЫ?</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "70px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "300px",
            }}
          >
            <Typography variant="h6">Для пользователя:</Typography>
            <List>
              <ListItem>- ОБЕСПЕЧИТ СВЕЖИМИ ЯГОДАМИ КРУГЛЫЙ ГОД</ListItem>
              <ListItem>- МОЖНО ПОДКЛЮЧИТЬ К ЭКОСИСТЕМЕ «УМНОГО ДОМА»</ListItem>
              <ListItem>
                - ВЫРАСТИТ ЯГОДЫ В ТЕХ РЕГИОНАХ, ГДЕ ОНИ НЕ РАСТУТ!
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "300px",
            }}
          >
            <Typography variant="h6">Для предпринимателя:</Typography>
            <List>
              <ListItem>- СНИЖАЕТ СЕБЕСТОИМОСТЬ УРОЖАЯ</ListItem>
              <ListItem>- ОКУПАЕМОСТЬ ОТ 3 МЕСЯЦЕВ!</ListItem>
              <ListItem>
                - ПОТЕНЦИАЛ ВЫРАЩИВАНИЯ РЕДКИХ СОРТОВ УРОЖАЯ ДЛЯ КОММЕРЧЕСКОЙ
                РЕАЛИЗАЦИИ МАЛЫМИ ПАРТИЯМИ (НАПРИМЕР, В РЕСТОРАНЫ)
              </ListItem>
            </List>
          </Box>
        </Box>
        <Pictures />

        <Typography variant="h4">НАШЕ РЕШЕНИЕ</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "70px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h6">АППАРАТНАЯ ЧАСТЬ</Typography>
            <List>
              <ListItem>- Контроль температуры и влажности воздуха</ListItem>
              <ListItem>
                - Автоматическая система питания (гидропоника)
              </ListItem>
              <ListItem>- Система вентиляции</ListItem>

              <ListItem>- Система электропитания</ListItem>
              <ListItem>- Система освещения</ListItem>
              <ListItem>- Система управления</ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h6">ПРОГРАММНАЯ ЧАСТЬ</Typography>
            <List>
              <ListItem>
                - Приложение для отслеживания параметров теплицы
              </ListItem>
              <ListItem>- Камера с искусственным интеллектом</ListItem>
              <ListItem>
                - Конфигурация параметров под различные культуры
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
