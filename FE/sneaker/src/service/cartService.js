import axios from 'axios';

export const getAllCart = async (username) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/${username}`
        );

        return response.data;
    } catch (error) {
        console.log(error)
    }
};


export const updateAmount = async (amount, cartDetailId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/updateAmount/${amount}/${cartDetailId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const deleteCartDetail = async (cartId, productId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/cart/deleteCartDetail/${cartId}/${productId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const setCart = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/setCart/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const setAmount = async (amount, productId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/setAmount/${amount}/${productId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const findAllHistory = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/history/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const saveHistory = async (userId, total) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/save/${userId}/${total}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};
