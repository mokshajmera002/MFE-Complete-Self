// code used till last
// // import Logo from '../../components/logo/logo';
// import './checkout.css'
// import { useForm } from 'react-hook-form';
// // import CopyRight from '../../components/footer/copyright';
// // import OrderService from '../../api-service/order.service';
// import OrderService from 'containerApp/OrderService';
// import React, { useContext, useEffect, Suspense } from 'react';
// // import CartContext from '../../contexts/cart.contect';
// import CartContext from "containerApp/CartContext";
// import { useAuth } from "containerApp/AuthContext";
// import CartService from "containerApp/CartService";
// import { Link } from 'react-router-dom';

// // Lazy load Logo component
// const Logo = React.lazy(() => import("containerApp/Logo"));
// const CopyRight = React.lazy(() => import("containerApp/CopyRight"));

// const CheckoutForm = () => {

//     const { register, handleSubmit, formState } = useForm();
//     const { isLoading, error, placeOrder } = OrderService();
//     const {user, toggleUser} = useAuth();
//     // const { cart, cartError, isProcessingCart, getCartInformation } = useContext(CartContext);//CartServiceHook();//useContext(CartContext);
//     const { 
//                 cart, 
//                 cartError, 
//                 isProcessingCart, 
//                 addItemToCart, 
//                 removeItemFromCart, 
//                 getCartInformation 
//             } = CartService();

//     const onSubmit = async (data) => {
//         placeOrder(data, cart.cartId)
//     };

//     return (
//         <>
//         <AuthContext.Provider value={{ user, toggleUser }}>
//                     <CartContext.Provider value={{ cart, cartError, isProcessingCart, addItemToCart, removeItemFromCart, getCartInformation }}>
//             <header className='app-header'> <Suspense fallback={<div>Loading Logo...</div>}>
//                                         <Logo />
//                                     </Suspense></header>
//             <div className="checkout-container">
//                 <h1>Checkout</h1>
//                 <div className='checkout-wrapper'>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         {error && <small className="text-danger">{error}</small>}
//                         <div className="input-box">
//                             <label htmlFor="fname" className="form-label">
//                                 First Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. John"
//                                 {...register('fname', {
//                                     required: "First name is required!"
//                                 })}
//                             />
//                             {formState.errors.fname && <small className="text-danger">{formState.errors.fname.message}</small>}
//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="lname" className="form-label">
//                                 Last Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. Smith"
//                                 {...register('lname', {
//                                     required: "Last name is required!"
//                                 })}
//                             />
//                             {formState.errors.lname && <small className="text-danger">{formState.errors.lname.message}</small>}

//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="address1" className="form-label">
//                                 Address Line 1
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. House No, Street No, Area"
//                                 {...register('address1', {
//                                     required: "Address line 1 is required!"
//                                 })}
//                             />
//                             {formState.errors.address1 && <small className="text-danger">{formState.errors.address1.message}</small>}

//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="address2" className="form-label">
//                                 Address Line 2
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. Suite no / floor No"
//                                 {...register('address2')}
//                             />
//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="city" className="form-label">
//                                 City
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. Point Pedro"
//                                 {...register('city', {
//                                     required: "City is required!"
//                                 })}
//                             />
//                             {formState.errors.city && <small className="text-danger">{formState.errors.city.message}</small>}

//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="phone" className="form-label">
//                                 Phone Number
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Eg. 07xxxxxxxx"
//                                 {...register('phone', {
//                                     required: "Phone is required!"
//                                 })}
//                             />
//                             {formState.errors.phone && <small className="text-danger">{formState.errors.phone.message}</small>}
//                         </div>
//                         <button
//                             type="submit"
//                             className={isLoading ? "loading" : ""}
//                             name="proceed">
//                             {isLoading ? "Processing..." : "Place Order"}
//                         </button>
//                     </form>
//                     <summary>
//                         <h2>Order summary</h2>
//                         <hr />
//                         {cart?.cartItems?.map((cartItem) => (
//                             <div className="product" key={cartItem.productId}>
//                                 <img src={`${cartItem.imageUrl}`} alt={cartItem.productName} />
//                                 <div className="product-info">
//                                     <h4>
//                                         {cartItem.productName}
//                                     </h4>
//                                     <span className="product-price">
//                                         {cartItem.price} x {cartItem.quantity} = Rs.  {parseFloat(cartItem.amount).toFixed(2)}
//                                     </span>
//                                 </div>

//                             </div>
//                         ))}
//                         <hr />
//                         <h3><span>Sub Total</span><span>Rs. {parseFloat(cart?.subtotal).toFixed(2)}</span></h3><br />
//                         <small>Delivary charges will be added to above total at you door step by our staffs when we deliver your order.</small>
//                         <br />
//                         <Link to="/"><button>Edit cart</button></Link>
//                     </summary>
//                 </div>
//             </div>
//              <Suspense fallback={<div>Loading Header...</div>}>
//                                         <CopyRight />
//                                     </Suspense>
//                                     </CartContext.Provider>
//                                     </AuthContext.Provider>
//         </>
//     );
// };

// export default CheckoutForm;

// import Logo from '../../components/logo/logo';
import './checkout.css'
import { useForm } from 'react-hook-form';
// import CopyRight from '../../components/footer/copyright';
// import OrderService from '../../api-service/order.service';
import OrderService from 'containerApp/OrderService';
import React,{Suspense, useContext, useEffect } from 'react';
// import CartContext from '../../contexts/cart.contect';
import { useCart } from "containerApp/CartContext"; // Import the hook
import { Link } from 'react-router-dom';

// Dynamically import Header from the container app (host)
const Logo = React.lazy(() => import("containerApp/Logo"));
const CopyRight = React.lazy(() => import("containerApp/CopyRight"));

const CheckoutForm = () => {
    console.log(useCart());
    const { register, handleSubmit, formState } = useForm();
    const { isLoading, error, placeOrder } = OrderService();
    const { cart, cartError, isProcessingCart, getCartInformation } = useCart();//useContext(CartContext);

    const onSubmit = async (data) => {
        placeOrder(data, cart.cartId)
    };

    return (
        <>
            <header className='app-header'>
            <Suspense fallback={<div>Loading Logo...</div>}>
                <Logo />
            </Suspense>
            </header>
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className='checkout-wrapper'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {error && <small className="text-danger">{error}</small>}
                        <div className="input-box">
                            <label htmlFor="fname" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. John"
                                {...register('fname', {
                                    required: "First name is required!"
                                })}
                            />
                            {formState.errors.fname && <small className="text-danger">{formState.errors.fname.message}</small>}
                        </div>
                        <div className="input-box">
                            <label htmlFor="lname" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. Smith"
                                {...register('lname', {
                                    required: "Last name is required!"
                                })}
                            />
                            {formState.errors.lname && <small className="text-danger">{formState.errors.lname.message}</small>}

                        </div>
                        <div className="input-box">
                            <label htmlFor="address1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. House No, Street No, Area"
                                {...register('address1', {
                                    required: "Address line 1 is required!"
                                })}
                            />
                            {formState.errors.address1 && <small className="text-danger">{formState.errors.address1.message}</small>}

                        </div>
                        <div className="input-box">
                            <label htmlFor="address2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. Suite no / floor No"
                                {...register('address2')}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. Point Pedro"
                                {...register('city', {
                                    required: "City is required!"
                                })}
                            />
                            {formState.errors.city && <small className="text-danger">{formState.errors.city.message}</small>}

                        </div>
                        <div className="input-box">
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Eg. 07xxxxxxxx"
                                {...register('phone', {
                                    required: "Phone is required!"
                                })}
                            />
                            {formState.errors.phone && <small className="text-danger">{formState.errors.phone.message}</small>}
                        </div>
                        <button
                            type="submit"
                            className={isLoading ? "loading" : ""}
                            name="proceed">
                            {isLoading ? "Processing..." : "Place Order"}
                        </button>
                    </form>
                    <summary>
                        <h2>Order summary</h2>
                        <hr />
                        {cart?.cartItems && cart?.cartItems.map((cartItem) => (
                            <div className="product" key={cartItem.productId}>
                                <img src={`${cartItem.imageUrl}`} alt={cartItem.productName} />
                                <div className="product-info">
                                    <h4>
                                        {cartItem.productName}
                                    </h4>
                                    <span className="product-price">
                                        {cartItem.price} x {cartItem.quantity} = Rs.  {parseFloat(cartItem.amount).toFixed(2)}
                                    </span>
                                </div>

                            </div>
                        ))}
                        <hr />
                        <h3><span>Sub Total</span><span>Rs. {parseFloat(cart?.subtotal).toFixed(2)}</span></h3><br />
                        <small>Delivary charges will be added to above total at you door step by our staffs when we deliver your order.</small>
                        <br />
                        <Link to="/"><button>Edit cart</button></Link>
                    </summary>
                </div>
            </div>
            <Suspense fallback={<div>Loading Copyright...</div>}>
                <CopyRight />
            </Suspense>
        </>
    );
};

export default CheckoutForm;

