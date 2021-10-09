import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON').then(res => res.json()).then(data => setproducts(data))
    }, [])

    return [products]

}

export default useProducts;