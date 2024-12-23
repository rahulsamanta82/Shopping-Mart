import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import {
  CartProductT,
  addToCart,
  decrementProduct,
} from "../../store/features/cart";
import { RootState } from "../../store";
import { useState } from "react";

interface CartProps {
  product?: IProduct;
  showCart?: boolean;
  className?: string;
}

const Cart = ({ product, showCart, className }: CartProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state?.cart.items);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  const handleCheckout = () => {
    const randomId = `TXN${Math.floor(100000 + Math.random() * 900000)}`;
    setTransactionId(randomId);
    setShowSummary(true);
    setIsCartOpen(false); // Close the cart on checkout
  };

  return (
    <div className={`overflow-y-auto-auto ${className}`}>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          {showCart ? (
            <Button onClick={() => setIsCartOpen(true)}>Cart</Button>
          ) : (
            <Button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </Button>
          )}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {cartItems.length <= 0 ? (
              <div>Your cart is currently empty.</div>
            ) : (
              cartItems.map((product: CartProductT) => {
                return (
                  <div
                    key={product.id}
                    className="flex gap-4 border-b-2 border-dashed pb-2 border-gray-200"
                  >
                    <img
                      src={product?.image}
                      alt={product.title}
                      className="w-32 h-28"
                    />
                    <div>
                      <h5>{product.title}</h5>
                      <p>Price : {product.price}</p>
                      <p>
                        <span
                          onClick={() => dispatch(decrementProduct(product))}
                          className="cursor-pointer hover:text-slate-900 text-xl mx-2 font-semibold"
                        >
                          -
                        </span>
                        {product.count}
                        <span
                          onClick={() => dispatch(addToCart(product))}
                          className="cursor-pointer hover:text-slate-900 text-xl  mx-2 font-semibold"
                        >
                          +
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {showSummary && transactionId && (
            <div className="mt-4 p-4 border-t">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <p>Transaction ID: {transactionId}</p>
              <p>Total Amount: INR {calculateTotal().toFixed(2)}</p>
            </div>
          )}
          <SheetFooter>
            <Button
              disabled={cartItems.length <= 0}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
