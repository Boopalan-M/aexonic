import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import "./Summary.css";

const Summary = () => {
  const { cartItems, onAdd } = useContext(cartContext);
  const [percentage, setPercentage] = useState(0);
  const Amount = cartItems
    ?.map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  useEffect(() => {
    if (Amount >= 100 && Amount <= 500) {
      const per = (Amount / 100) * 10;
      setPercentage(per);
    } else if (Amount > 500) {
     
      const per = (Amount / 100) * 20;
      setPercentage(per);
    } else if (Amount < 100) {
      setPercentage(Amount);
    } else {
      return 0;
    }
  }, [Amount]);

  return (
    <div>
      <div className="Summary">
        <h2>Summary</h2>
        <Divider />

        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} className="checkout_number">
                <div className="checkout_Leftside">SUBTOTAL</div>
                <div className="checkout_Leftside">ESTIMATED TAX</div>
                <div className="checkout_Leftside">SHIPPING CHARGES</div>
              </Grid>

              <Grid item xs={2} className="checkout_right">
                <div className="checkout_Leftside">₹{Amount}</div>
                <div className="checkout_Leftside">₹100</div>
                <div className="checkout_Leftside">FREE</div>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={8} className="checkout_number">
                <div className="checkout_Leftside">Discount Amount</div>
                <div className="checkout_Leftside">TOTAL</div>
              </Grid>

              <Grid item xs={2} className="checkout_right">
                <div className="checkout_Leftside">
                  ₹{percentage.toFixed(2)}
                </div>
                <div className="checkout_Leftside">
                  ₹{(Amount.toFixed(2) - percentage.toFixed(2)).toFixed(0)}
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <Button className="Summary__Button" variant="contained">
        <span className="Summary__Paybutton">Proceed To Pay</span>
      </Button>
    </div>
  );
};

export default Summary;
