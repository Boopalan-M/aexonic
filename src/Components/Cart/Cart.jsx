import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext } from "react";
import burger from "../Assests/burger.png";
import { cartContext } from "../context/cartContext";
import Summary from "../Summary/Summary";
import "./Cart.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { cartItems, onremove } = useContext(cartContext);
  return (
    <>
      <h1 className="cart_heading">ITEMS IN YOUR CART</h1>
      <Grid container spacing={2}>
        <Grid item xs={7} className="cart__gridstyle">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>S.No</StyledTableCell>
                  <StyledTableCell align="right">Image</StyledTableCell>
                  <StyledTableCell align="right">
                    Item &nbsp;Name
                  </StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((product, index) => (
                  <StyledTableRow key={product.name}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      <img
                        src={burger}
                        alt="Imagess"
                        className="cart__images"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.item_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {product.qty}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ₹ {product.price * product.qty}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {cartItems.length != 0 ? (
            <Button
              onClick={() => onremove()}
              className="Cart__Button"
              variant="contained"
            >
              <span>Delete Cart</span>
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
}
