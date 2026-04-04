import axios from "axios";

export const api = axios.create({
    baseURL: "/api/v1",
});

export const fetchClientSecret = async (cartItems) => {
        let response = await api.post('/checkout/',
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
export const fetchSessionDetails = async (session_id) => {
    const response = await api.get(`checkout/${session_id}/`,{
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.status == 200){
        return response.data
      }
      else{
        console.error(response.data)
        return response.errors 
      }
}