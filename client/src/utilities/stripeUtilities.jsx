import axios from "axios";

export const api = axios.create({
    baseURL: "/api/v1",
});

export const fetchClientSecret = async (cartItems) => {
        let response = await axios.post('/api/v1/checkout/',
            {'cart_items': cartItems}
        )
        if (response.status == 200){
            return response.data.client_secret
        }
        else{
            console.error(response.data)
            return response.errors 
        }
    }