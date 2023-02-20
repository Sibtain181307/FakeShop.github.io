import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setproducts } from "../redux/actions/ProductsActions";

const ProductListing = () => {
    const products = useSelector((state) => state);
    // console.log(products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        });
        dispatch(setproducts(response.data));
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("products:", products);


    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>

    );
}




export default ProductListing;