import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import React, { useContext, useEffect, useState } from "react";
import { getAllProductList } from "../../Services/Productlistservice";
import burger from "../Assests/burger.png";
import vegicon from "../Assests/vegetarianIcon.png";
import Checkout from "../Checkout/Checkout";
import { cartContext } from "../context/cartContext";
import Skeleton from "@mui/material/Skeleton";
import "./Home.css";

function Home() {
  const { onAdd } = useContext(cartContext);
  const [ProductsList, SetProductsList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    const res = await getAllProductList();

    if (res.data != undefined) {
      SetProductsList(res?.data);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);
  return (
    <div className="home">
      {isLoading === true ? (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      ) : (
        <Grid container spacing={7} isLoading={isLoading}>
          {ProductsList?.map((value, index) => (
            <Grid item xs={10}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <div className="home__impgreen">
                    <img
                      className="home__vegicon"
                      src={vegicon}
                      alt="vegetarian Icon"
                    />
                  </div>
                  <div className="home__heading">{value.item_name}</div>
                  <div className="home__amount">
                    <span className="home__rupeesymbol">₹</span>
                    <span>{value.price}</span>
                    <div className="home__description">
                      Stay Home Stay Safe &Share a Healthy Meal
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <img src={burger} alt="Imagess" className="home__images" />
                  <div className="home__number">
                    <ButtonGroup
                      variant="outlined"
                      color="success"
                      aria-label="outlined button group "
                      className="home__Buttons"
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        aria-label="outlined button group "
                        onClick={() => onAdd(value)}
                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </div>
                </Grid>
              </Grid>
              <Divider className="home__divider" />
            </Grid>
          ))}
        </Grid>
      )}
      <Grid item xs={6} className="Checkout">
        <Checkout />
      </Grid>
    </div>
  );
}

export default Home;
