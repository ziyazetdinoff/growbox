import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useGetUsers } from "../../api/getUsers";

export interface User {
  name: string;
  email: string;
  question: string;
}
export const Users = () => {
  const newUsers = useGetUsers();

  return (
    <Box
      sx={{
        margin: "50px 20px 50px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        minHeight: "70vh",
      }}
    >
      <Typography variant="h4">Новые заявки</Typography>
      {newUsers && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Вопрос</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newUsers.map((user) => (
              <TableRow key={user.email}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.question}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};
