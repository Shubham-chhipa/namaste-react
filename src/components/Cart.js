import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 m-4">
      <h1 className="text-center text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto ">
        <button
          className="m-2 px-2 text-white font-semibold bg-amber-600 border-1 border-solid-black rounded-xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-3xl text-center m-4 p-4">
            Your cart is empty! Please add some items to your cat!🍕
          </h1>
        ) : (
          cartItems.map((item) => <MenuItem key={item.id} menuInfo={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
