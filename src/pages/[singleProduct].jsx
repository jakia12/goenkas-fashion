import { useRouter } from "next/router"
import { useEffect, useState } from "react";


const singleProduct = () => {

    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { singleProduct } = router.query;

    const id = parseInt(singleProduct);
    console.log(typeof id)


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                console.log(typeof data[0].id)
                const findProduct = data?.find((dt) => dt.id == id);
                console.log(findProduct)
                // console.log(data)
                setProduct(findProduct);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(product)
    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div>Product id is {product?.title} </div>
    )
}

export default singleProduct