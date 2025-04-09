// import { useContext, useEffect, useState } from 'react';
// import React, { lazy, Suspense } from 'react';
// import Logo from "../logo/logo";
// import { Link, useAsyncError, useNavigate } from "react-router-dom";
// import "/src/index.css"       //"../../assets/styles/index.css" //make it to ./index.css
// import  "../header/header.css"  //./header/header.css"
// import Cart from "../cart/cart";
// import { AuthContext } from "/src/context/auth.context" //"../contexts/auth.context";
// import CartContext from "/src/context/cart.contect";


// function Header() {
//     const navigate = useNavigate();
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const [isCartOpen, setCart] = useState(false);
//     // console.log("header cart context: ",useContext(CartContext));
//     const { cart } = useContext(CartContext)
//     const { user, toggleUser } = useContext(AuthContext)
//     const [searchKey, setSearchKey] = useState("");

//     const toggleNav = () => {
//         setIsNavOpen(prev => !prev);
//     };

//     const toggleCart = () => {
//         setCart(prev => !prev)
//     }

//     const onSearch = () => {
//         searchKey !== "" && navigate(`/search/${searchKey}`)
//     }

//     const onSearchKeyChange = (newKey) => {
//         setSearchKey(newKey)
//     }

//     const logout = () => {
//         localStorage.removeItem("user")
//         toggleUser()
//         navigate("/")
//     };

//     return (
//         <>
//             <header className="app-header">
//                 <div className="logo-wrapper">
//                     <span>
//                         {isNavOpen ? (
//                             <i className="fa fa-times" aria-hidden="true" onClick={toggleNav}></i>
//                         ) : (
//                             <i className="fa fa-bars" aria-hidden="true" onClick={toggleNav}></i>
//                         )}
//                     </span>
//                     <span>
//                         <Link to="/"> <Logo /></Link>
//                     </span>
//                 </div>

//                 <div className="search">
//                     <input
//                         type="search"
//                         placeholder="Search entire wellness..."
//                         value={searchKey}
//                         onChange={(e) => onSearchKeyChange(e.target.value)}
//                     />
//                     <i
//                         className="fa fa-search"
//                         aria-hidden="true"
//                         onClick={onSearch}
//                     ></i>
//                 </div>

//                 <ul className={isNavOpen ? "nav-open" : "nav-close"}>
//                     <li>
//                         <Link to="/products" className="nav-link">Products</Link>
//                         {/* <Link to="/products/All" className="nav-link">Products</Link> */}
//                     </li>
//                     {!user && (
//                         <li>
//                             <Link to="/auth/login" className="nav-link">Login</Link>
//                         </li>
//                     )}
//                     {user && (
//                         <>
//                             <li>
//                                 <Link to='/my/account' className="nav-link">My Account</Link>
//                             </li>
//                             <li onClick={logout} className="nav-link">
//                                 <Link className="nav-link">Logout</Link>
//                             </li>
//                         </>
//                     )}
//                 </ul>

//                 <div>
//                     <Link onClick={toggleCart}>
//                         <i className="fa fa-shopping-cart" aria-hidden="true"></i>
//                         <span>({cart.noOfCartItems || 0})</span>
//                     </Link>
//                 </div>
//             </header>
//             <header className="app-header bottom">
//                 <div className="search">
//                     <input
//                         type="search"
//                         placeholder="Search entire wellness..."
//                         value={searchKey}
//                         onChange={(e) => onSearchKeyChange(e.target.value)}
//                     />
//                     <i
//                         className="fa fa-search"
//                         aria-hidden="true"
//                         onClick={onSearch}
//                     ></i>
//                 </div>
//             </header>
//             <Cart isCartOpen={isCartOpen} setIsCartOpen={setCart} onClose={() => setCart(false)} />
//         </>
//     )
// }


// export default Header;

// // import { useState } from "react";
// // import "./header.css";
// // import React, { Suspense, lazy } from 'react';

// // function Header() {
// //     return (
// //         <header className="app-header">
// //             <h1>HEADER</h1>
// //         </header>
// //     );
// // }

// // export default Header;

import { useContext, useState } from 'react';
import React from 'react';
import Logo from "../logo/logo";
import { Link, useNavigate } from "react-router-dom";
import "/src/index.css"
import "../header/header.css"
import Cart from "../cart/cart";
import { AuthContext } from "../../context/auth.context"
import CartContext from "../../context/cart.contect";
import { useAuth } from "../../context/auth.context"; // Import the hook
import { useCart } from "../../context/cart.contect"; // Import the hook
// import { useRouter } from '/src/context/routes.context';

function Header() {
    // const { navigate, location } = useRouter();
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCartOpen, setCart] = useState(false);
    const { cart } = useCart();//useContext(CartContext)
    const { user, toggleUser } = useAuth();//useContext(AuthContext)
    const [searchKey, setSearchKey] = useState("");
    const { getCartInformation } = useCart(); // Access getCartInformation

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    const toggleCart = () => {
        setCart(prev => !prev);
    };

    const onSearch = () => {
        if (searchKey !== "") {
            navigate(`/search/${searchKey}`);
        }
    };

    const onSearchKeyChange = (newKey) => {
        setSearchKey(newKey);
    };

    const logout = () => {
        localStorage.removeItem("user");
        toggleUser();
        console.log("inside logout getCartInformation");
        getCartInformation(); // Call getCartInformation on logout
        navigate("/");
    };

    return (
        <>
            <header className="app-header">
                <div className="logo-wrapper">
                    <span>
                        {isNavOpen ? (
                            <i className="fa fa-times" aria-hidden="true" onClick={toggleNav}></i>
                        ) : (
                            <i className="fa fa-bars" aria-hidden="true" onClick={toggleNav}></i>
                        )}
                    </span>
                    <span>
                        <Link to="/"> <Logo /></Link>
                    </span>
                </div>

                <div className="search">
                    <input
                        type="search"
                        placeholder="Search entire wellness..."
                        value={searchKey}
                        onChange={(e) => onSearchKeyChange(e.target.value)}
                    />
                    <i
                        className="fa fa-search"
                        aria-hidden="true"
                        onClick={onSearch}
                    ></i>
                </div>

                <ul className={isNavOpen ? "nav-open" : "nav-close"}>
                    <li>
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    {!user && (
                        <li>
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    )}
                    {user && (
                        <>
                            <li>
                                {/* <Link to='/my/account' className="nav-link">My Account</Link> */}
                                <Link to='/account' className="nav-link">My Account</Link>
                            </li>
                            <li onClick={logout} className="nav-link">
                                Logout
                            </li>
                        </>
                    )}
                </ul>

                <div>
                    <Link onClick={toggleCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>({cart.noOfCartItems || 0})</span>
                    </Link>
                </div>
            </header>
            <header className="app-header bottom">
                <div className="search">
                    <input
                        type="search"
                        placeholder="Search entire wellness..."
                        value={searchKey}
                        onChange={(e) => onSearchKeyChange(e.target.value)}
                    />
                    <i
                        className="fa fa-search"
                        aria-hidden="true"
                        onClick={onSearch}
                    ></i>
                </div>
            </header>
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setCart} onClose={() => setCart(false)} />
        </>
    );
}

export default Header;