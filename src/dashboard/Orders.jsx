import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "10 jul, 2024",
    "Ryan Ray",
    "Calle 23",
    "Pago Móvil",
    5
  ),
  createData(
    1,
    "16 Mar, 2024",
    "Paul Marcano",
    "Calle Brasil",
    "Divisa",
    8
  ),
  createData(
    2,
    "16 Mar, 2024",
    "Tom Scholz",
    "Urb. Los Cocales",
    "Pago Móvil",
    6
  ),
  createData(
    3,
    "16 Mar, 2024",
    "Pedro Zambrano",
    "Urb. Los Girasoles",
    "Divisa",
    9
  ),
  createData(
    4,
    "15 Mar, 2024",
    "Ernesto Guevara",
    "Calle 23 de Enero",
    "Divisa",
    5
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Servicios recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Viaje a</TableCell>
            <TableCell>Método de Pago</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver más
      </Link>
    </React.Fragment>
  );
}
