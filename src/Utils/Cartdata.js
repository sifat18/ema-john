import { useEffect, useState } from "react"
import { getStoredCart } from "../fakedb";

const useCart = products => {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const store = getStoredCart()
            const storeCart = [];
            for (const key in store) {
                // gettin matched products in a object
                const productL = products.find(productt => productt.key === key);
                // saving the quantity
                if (productL) {
                    const quantity = store[key];
                    productL.quantity = quantity;
                    storeCart.push(productL);
                }
            }
            setcart(storeCart);
        }
    }, [products]);
    return [cart, setcart]
}
export default useCart;