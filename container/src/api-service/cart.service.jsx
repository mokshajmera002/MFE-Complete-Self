// import { useEffect, useState } from "react"
// import API_BASE_URL from "./apiConfig";
// import axios from 'axios';

// function CartService() {
//     const [cart, setCart] = useState({})
//     const [cartError, setError] = useState(false);
//     const [isProcessingCart, setProcessing] = useState(false);
//     const user = JSON.parse(localStorage.getItem("user"));

//     const authHeader = () => {
//         return { Authorization: `${user?.type}${user?.token}` };
//     }

//     const addItemToCart = async (productId, quantity) => {
//         setProcessing(true)
//         await axios.post(
//             `${API_BASE_URL}/cart-service/cart/add`,
//             { productId, quantity },
//             { headers: authHeader() }
//         )
//             .then((response) => {
//                 setError(false)
//             })
//             .catch((error) => {
//                 setError(true)
//             })
//         setProcessing(false)
//         getCartInformation()
//     }

//     const updateItemQuantity = async (productId, quantity) => {
//         setProcessing(true)
//         await axios.post(
//             `${API_BASE_URL}/cart-service/cart/add`,
//             { productId, quantity },
//             { headers: authHeader() }
//         )
//             .then((response) => {
//                 setError(false)
//             })
//             .catch((error) => {
//                 setError(true)
//             })
//         setProcessing(false)
//         getCartInformation()
//     }

//     const removeItemFromCart = async (productId) => {
//         setProcessing(true)
//         await axios.delete(`${API_BASE_URL}/cart-service/cart/remove`, {
//             headers: authHeader(),
//             params: {
//                 productId: productId
//             }
//         })
//             .then((response) => {
//                 setError(false)
//             })
//             .catch((error) => {
//                 setError(true)
//             })
//         getCartInformation()
//     }

//     const getCartInformation = async () => {
//         if (!user?.token) {
//             setCart({})
//             setError(false)
//             return
//         }
//         setProcessing(true)
//         await axios.get(`${API_BASE_URL}/cart-service/cart/get/byUser`, {
//             headers: authHeader()
//         })
//             .then((response) => {
//                 setError(false)
//                 setCart(response.data.response)
//             })
//             .catch((error) => {
//                 setCart({cartItems:[]})
//                 setError(true)
//             })
//         setProcessing(false)
//     }

//     useEffect(() => {
//         getCartInformation()
//     }, [])

//     return { cart, cartError, isProcessingCart, addItemToCart, updateItemQuantity, removeItemFromCart, getCartInformation };

// }

// export default CartService;

// monolithic code
import { useEffect, useState } from "react"
import API_BASE_URL from "./apiConfig";
import axios from 'axios';

function CartService() {
    const [cart, setCart] = useState({})
    const [cartError, setError] = useState(false);
    const [isProcessingCart, setProcessing] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

    const authHeader = () => {
        return { Authorization: `${user?.type}${user?.token}` };
    }

    const addItemToCart = async (productId, quantity) => {
        setProcessing(true)
        await axios.post(
            `${API_BASE_URL}/cart-service/cart/add`,
            { productId, quantity },
            { headers: authHeader() }
        )
            .then((response) => {
                setError(false)
            })
            .catch((error) => {
                setError(true)
            })
        setProcessing(false)
        console.log("addItem getCartInformation")
        getCartInformation()
    }

    const updateItemQuantity = async (productId, quantity) => {
        setProcessing(true)
        await axios.post(
            `${API_BASE_URL}/cart-service/cart/add`,
            { productId, quantity },
            { headers: authHeader() }
        )
            .then((response) => {
                setError(false)
            })
            .catch((error) => {
                setError(true)
            })
        setProcessing(false)
        console.log("updateItemQuality getCartInformation")
        getCartInformation()
    }

    const removeItemFromCart = async (productId) => {
        setProcessing(true)
        await axios.delete(`${API_BASE_URL}/cart-service/cart/remove`, {
            headers: authHeader(),
            params: {
                productId: productId
            }
        })
            .then((response) => {
                setError(false)
            })
            .catch((error) => {
                setError(true)
            })
        console.log("removeItemFromCart getCartInformation")
        getCartInformation()
        // console.log("removeItemFromCart getCartInformation")
    }

    const getCartInformation = async () => {
        console.log("inside getCartInformation")
        if (!user || !user.token) {  //if (!user.token)
            setCart({})
            setError(false)
            return
        }
        setProcessing(true)
        await axios.get(`${API_BASE_URL}/cart-service/cart/get/byUser`, {
            headers: authHeader()
        })
            .then((response) => {
                setError(false)
                setCart(response.data.response)
            })
            .catch((error) => {
                setCart({cartItems:[]})
                setError(true)
            })
        setProcessing(false)
    }

    useEffect(() => {
        console.log("useEffect getCartInformation")
        getCartInformation()
    }, [])

    return { cart, cartError, isProcessingCart, addItemToCart, updateItemQuantity, removeItemFromCart, getCartInformation };

}

export default CartService;


// code as a solution to rerenders
// import { useEffect, useState } from "react";
// import API_BASE_URL from "./apiConfig";
// import axios from "axios";

// function CartService() {
//   const [cart, setCart] = useState({});
//   const [cartError, setError] = useState(false);
//   const [isProcessingCart, setProcessing] = useState(false);
//   const user = JSON.parse(localStorage.getItem("user"));

//   const authHeader = () => {
//     return { Authorization: `${user?.type}${user?.token}` };
//   };

//   const addItemToCart = async (productId, quantity) => {
//     setProcessing(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/cart-service/cart/add`,
//         { productId, quantity },
//         { headers: authHeader() }
//       );
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] }); //Update cart on error.
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const updateItemQuantity = async (productId, quantity) => {
//     setProcessing(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/cart-service/cart/add`,
//         { productId, quantity },
//         { headers: authHeader() }
//       );
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] }); //Update cart on error.
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const removeItemFromCart = async (productId) => {
//     setProcessing(true);
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/cart-service/cart/remove`, {
//         headers: authHeader(),
//         params: { productId: productId },
//       });
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] }); //Update cart on error.
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const getCartInformation = async () => {
//     if (!user || !user.token) {
//     //   setCart({});
//     if (Object.keys(cart).length > 0) { // Check if cart is not already empty
//         setCart({});
//     }
//       setError(false);
//       return;
//     }
//     setProcessing(true);
//     try {
//       const response = await axios.get(`${API_BASE_URL}/cart-service/cart/get/byUser`, {
//         headers: authHeader(),
//       });
//       setError(false);
//       setCart(response.data.response);
//     } catch (error) {
//       setCart({ cartItems: [] });
//       setError(true);
//     } finally {
//       setProcessing(false);
//     }
//   };

// //   useEffect(() => {
// //     getCartInformation();
// //   }, []);
// // modified this function to cause the cart to reload, whenever the user logs in or logs out
//     useEffect(() => {
//         getCartInformation();
//       }, [user]);

//   return {
//     cart,
//     cartError,
//     isProcessingCart,
//     addItemToCart,
//     updateItemQuantity,
//     removeItemFromCart,
//     getCartInformation,
//   };
// }

// export default CartService;

// new solution to rerender
// import { useEffect, useState } from "react";
// import API_BASE_URL from "./apiConfig";
// import axios from "axios";
// import { useAuth } from "../context/auth.context";

// function CartService() {
//   const [cart, setCart] = useState({});
//   const [cartError, setError] = useState(false);
//   const [isProcessingCart, setProcessing] = useState(false);
//   const { user } = useAuth();
//   const [isFetching, setIsFetching] = useState(false);

//   const authHeader = () => {
//     return { Authorization: `${user?.type}${user?.token}` };
//   };

//   const addItemToCart = async (productId, quantity) => {
//     setProcessing(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/cart-service/cart/add`,
//         { productId, quantity },
//         { headers: authHeader() }
//       );
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] });
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const updateItemQuantity = async (productId, quantity) => {
//     setProcessing(true);
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/cart-service/cart/add`,
//         { productId, quantity },
//         { headers: authHeader() }
//       );
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] });
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const removeItemFromCart = async (productId) => {
//     setProcessing(true);
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/cart-service/cart/remove`, {
//         headers: authHeader(),
//         params: { productId: productId },
//       });
//       setError(false);
//       setCart(response.data.response); // Update cart directly
//     } catch (error) {
//       setError(true);
//       setCart({ cartItems: [] });
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const getCartInformation = async () => {
//     console.log("getCartInfomation called");
//     if (!user || !user.token || isFetching) {
//       if (Object.keys(cart).length > 0) {
//         setCart({});
//       }
//       setError(false);
//       return;
//     }
//     setIsFetching(true);
//     setProcessing(true);
//     try {
//       const response = await axios.get(`${API_BASE_URL}/cart-service/cart/get/byUser`, {
//         headers: authHeader(),
//       });
//       setError(false);
//       setCart(response.data.response);
//     } catch (error) {
//       setCart({ cartItems: [] });
//       setError(true);
//     } finally {
//       setProcessing(false);
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     getCartInformation();
//   }, []);

//   return {
//     cart,
//     cartError,
//     isProcessingCart,
//     addItemToCart,
//     updateItemQuantity,
//     removeItemFromCart,
//     getCartInformation,
//   };
// }

// export default CartService;