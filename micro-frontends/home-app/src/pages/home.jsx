// import About from "../../components/about/about";
// import Categories from "../../components/categories/categories";
// import Footer from "../../components/footer/footer";
// import Header from "../../components/header/header";
// import Hero from "../../components/home_hero/hero";
// last used code
// import React, { useContext, lazy, Suspense } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { useAuth } from "containerApp/AuthContext";
// import { AuthContext } from "containerApp/AuthContext";
// import CartContext from "containerApp/CartContext";
// import CartService from "containerApp/CartService";
// import { Link, useAsyncError, useNavigate } from "react-router-dom";
// import Hero from '../components/home_hero/hero';
// import Categories from '../components/categories/categories';

// // Dynamically import Header from the container app (host)
// const Header = React.lazy(() => import("containerApp/Header"));
// const Footer = React.lazy(() => import("containerApp/Footer"));
// till here last used
// let CartContext;
// const AuthContext = React.lazy(() => import("containerApp/AuthContext"));
// const useAuth = React.lazy(() => import("containerApp/AuthContext"));
// const CartContext = React.lazy(() => import("containerApp/CartContext"));
// const CartService = React.lazy(() => import("containerApp/CartService"));

// function Home() {
//     return (
//         <>
//             <Header/>
//             <Hero/>
//             <Categories/>
//             <About/>
//             <Footer/>
//         </>
//     )
// }

// function Home() {
//     const {user, toggleUser} = useAuth();
//     const { 
//         cart, 
//         cartError, 
//         isProcessingCart, 
//         addItemToCart, 
//         removeItemFromCart, 
//         getCartInformation 
//     } = CartService();
// //   if (!AuthContext) {
// //     console.error("AuthContext is undefined:",AuthContext);
// //     return <div>AuthContext is undefined.</div>;
// //   }
// //   if (!CartService) {
// //     console.error("CartService is undefined");
// //     return <div>CartService is undefined.</div>;
// //   }
// //   try {
// //     CartContext = require("containerApp/CartContext").default;
// //     console.log("Cart Context Module:", CartContext);
// //   } catch (e) {
// //     console.error("Failed to load CartContext:", e);
// //     CartContext = React.createContext({});
// //   }
// //   if (!CartContext) {
// //     console.error("CartContext is undefined");
// //     return <div>CartContext is undefined.</div>;
// //   }
// //   console.log("CartContext in Home:", CartContext);
// //   console.log("CartService in Home:", CartService);
//     return (
//         <>
//             <BrowserRouter>
//             <AuthContext.Provider value={{user, toggleUser}}>
//                 <CartContext.Provider value={{ cart, cartError, isProcessingCart, addItemToCart, removeItemFromCart, getCartInformation }}>
//                 {/* <div className="app-home" style={{ display: 'flex', flexDirection: 'column' }}> */}
//                     {/* HELLO WORLD! Container-app (app-shell) */}
//                     <Header />
//                     <Hero/>
//                     <Categories/>
//                     <About/>
//                     <Footer/>
//                     {/* <Link to="products" className="nav-link">
//                         Products
//                         <br />
//                         Products2
//                         <br />
//                         Products3
//                         <br />
//                         Products4
//                         <br />
//                         Products5
//                     </Link> */}
//                     {/* <Link to="products" className="nav-link">Products<br>Products2</br><br>Products3</br><br>Products4</br><br>Products5</br></Link> */}
//                     {/* <div className="app-container-routes">
//                     <main className="content"> */}
//                     {/* <AppRoutes /> */}
//                     {/* </main>
//                     </div> */}
//                     {/* <Footer /> */}
//                 {/* </div> */}
//                 </CartContext.Provider>
//             </AuthContext.Provider>
//             </BrowserRouter>
//             {/* <Suspense fallback={<div>Loading Header...</div>}>
//                 <Header />
//             </Suspense>
//             Hello world HOME-APP
//             <Hero />
//             <Categories />
//             <About />
//             <Footer /> */}
//         </>
//     );
// }
// last used code
// function Home() {
//         const {user, toggleUser} = useAuth();
//         const { 
//             cart, 
//             cartError, 
//             isProcessingCart, 
//             addItemToCart, 
//             removeItemFromCart, 
//             getCartInformation 
//         } = CartService();
//         return (
//             <>
//                 {/* <BrowserRouter> */}
//                 <AuthContext.Provider value={{user, toggleUser}}>
//                     <CartContext.Provider value={{ cart, cartError, isProcessingCart, addItemToCart, removeItemFromCart, getCartInformation }}>
//                         <Suspense fallback={<div>Loading Header...</div>}>
//                             <Header />
//                         </Suspense>
//                         {/* <Header /> */}
//                         <Hero/>
//                         <Categories/>
//                         {/* <About/> */}
//                         <Footer/>
//                     </CartContext.Provider>
//                 </AuthContext.Provider>
//                 {/* </BrowserRouter> */}
//                 {/* <Suspense fallback={<div>Loading Header...</div>}>
//                     <Header />
//                 </Suspense>
//                 Hello world HOME-APP
//                 <Hero />
//                 <Categories />
//                 <About />
//                 <Footer /> */}
//             </>
//         );
//     }

// export default Home;

import React, { useContext, lazy, Suspense } from 'react';
import { useAuth } from "containerApp/AuthContext"; // Only import the hook
import { useCart } from "containerApp/CartContext"; // Only import the hook
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import Hero from '../components/home_hero/hero';
import Categories from '../components/categories/categories';
import { AuthProvider } from 'containerApp/AuthContext';
import { CartProvider } from 'containerApp/CartContext';

const Header = React.lazy(() => import("containerApp/Header"));
const Footer = React.lazy(() => import("containerApp/Footer"));

function Home() {
    // console.log("Auth: ",AuthProvider);
    // console.log("Cart: ",CartProvider);
    // const { user } = useAuth();
    // const { cart, addItemToCart, removeItemFromCart, getCartInformation } = useCart();

    return (
        <>
        {/* <AuthProvider> */}
            {/* <CartProvider> */}
                {/* console.log("Home cart: ",CartProvider); */}
            <Suspense fallback={<div>Loading Header...</div>}>
                <Header />
            </Suspense>
            <Hero />
            <Categories />
            <Footer />
            {/* </CartProvider>
        </AuthProvider> */}
        </>
    );
}

export default Home;