import axios from 'axios';

export const findUserName = async (username) => {
    try {
        const response = await fetch(`http://localhost:8080/api/user/${username}`);
        const user = await response.json();
        return user.userId;
    } catch (error) {
        console.log(error)
        return null;
    }
};

export const findAllUser = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/user`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }
    
};
