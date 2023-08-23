import axios from 'axios';

export const getAllCart = async (username) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/${username}`
        ,{
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};


export const updateAmount = async (amount, cartDetailId) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/updateAmount/${amount}/${cartDetailId}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const deleteCartDetail = async (cartId, productId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/v2/cart/deleteCartDetail/${cartId}/${productId}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const setCart = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/set/${userId}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const setAmount = async (amount, productId) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/setAmount/${amount}/${productId}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const findAllHistory = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/history/${userId}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const saveHistory = async (userId, total) => {
    try {
        const response = await axios.get(`http://localhost:8080/v2/cart/save/${userId}/${total}`, {
            headers:
            {
                'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};
