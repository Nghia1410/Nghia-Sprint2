import axios from "axios";

export const findProductById = async (productId) => {
    try {
        const result = await axios.get(
            `http://localhost:8080/api/${productId}`,

        );
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api`);
        return result.data
    } catch (e) {
        console.log(e);
    }
};

export const searchProduct = async (productName) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/search/${productName}`);
        return result.data
    } catch (e) {
        console.log(e);
    }
};

export const findProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/type`,);
        return result.data;
    } catch (e) {
        console.log(e); 
    }
};

export const getAllProductByType = async (type) => {
    const res = await axios.get(`http://localhost:8080/api/productByType/${type}`)
    return res.data;
}
