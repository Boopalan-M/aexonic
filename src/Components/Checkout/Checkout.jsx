import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vegicon from "../Assests/vegetarianIcon.png";
import { cartContext } from "../context/cartContext";
import "./Checkout.css";
function Checkout() {
  const { cartItems, onAdd, onDecrease } = useContext(cartContext);
  const Amount = cartItems
    ?.map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <div className="Checkout">
      {cartItems?.length != 0 ? (
        <>
          <h2>Cart</h2>

          {cartItems?.map((product) => (
            <div key={product.id}>
              <div className="checkout__itemsCount">
                {cartItems.length} items
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <div className="checkout_number">S</div>
                    <img
                      className="checkout__vegicon"
                      src={vegicon}
                      alt="vegetarian Icon"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div className="checkout__itemname">Items</div>
                    <div>{product.item_name}</div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="checkout__Buttons">count</div>
                    <ButtonGroup
                      variant="outlined"
                      color="success"
                      aria-label="outlined button group "
                      className="checkout__Buttons"
                    >
                      <Button
                        style={{
                          maxWidth: "15px",
                          maxHeight: "30px",
                          minWidth: "30px",
                          minHeight: "30px",
                        }}
                        onClick={() => onDecrease(product)}
                      >
                        -
                      </Button>
                      <Button
                        style={{
                          maxWidth: "15px",
                          maxHeight: "30px",
                          minWidth: "30px",
                          minHeight: "30px",
                        }}
                      >
                        {product.qty}
                      </Button>
                      <Button
                        style={{
                          maxWidth: "15px",
                          maxHeight: "30px",
                          minWidth: "30px",
                          minHeight: "30px",
                        }}
                        onClick={() => onAdd(product)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="checkout__amount"> Amount</div>
                    <div>₹ {product.price * product.qty}</div>
                  </Grid>
                </Grid>
              </Box>
            </div>
          ))}

          <Grid container spacing={2}>
            <Grid item xs={8} className="checkout_number">
              <div className="checkout_Left">subTotal</div>
              <div>Extra charges May apply</div>
            </Grid>

            <Grid item xs={2} className="checkout_right">
              <div className="checkout_Left">₹{Amount}</div>
            </Grid>
          </Grid>

          <Link to="/cart">
            {" "}
            <Button
              className="checkout__Button"
              color="success"
              variant="contained"
            >
              <span className="checkout__Paybutton"> checkout </span>
            </Button>
          </Link>
        </>
      ) : (
        <div>
          {cartItems?.length === 0 && (
            <div className="checkout__empty"> Cart Is Empty!!Please Add</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Checkout;
