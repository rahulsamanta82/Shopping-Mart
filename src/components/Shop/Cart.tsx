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

interface CartProps {
  product?: IProduct;
  showCart?: boolean;
  className?: string;
}

const Cart = ({ product, showCart, className }: CartProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state?.cart.items);

  return (
    <div className={`overflow-y-auto-auto ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          {showCart ? (
            <Button>Cart</Button>
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
                          {" "}
                          -{" "}
                        </span>
                        {product.count}{" "}
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
          <SheetFooter>
            <SheetClose asChild>
              <Button disabled={cartItems.length <= 0 ? true : false}>
                Checkout
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
