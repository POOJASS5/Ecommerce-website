
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import { ShowCartContextProvider } from "./store/showCart-context";
import { ProductContextProvider } from "./store/product-context";
import ProductDetail from "./pages/ProductDetail";
import { CartContextProvider } from "./store/cart-Context";
import Login from "./pages/Login";

function App() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <React.Fragment>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>
          <CartContextProvider>
            <ShowCartContextProvider>
              <Header />
              <Route path="/store" exact>
                <Store productList={productsArr} />
              </Route>
            </ShowCartContextProvider>
          </CartContextProvider>

          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      {/* <Section productList={productsArr} /> */}
      <Footer />
    </React.Fragment>
  );
}
export default App;