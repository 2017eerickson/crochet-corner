import axios from "axios";

export const api = axios.create({
    baseURL: "/api/v1",
});

export const test_connection = async() =>{
		    let response = await api.get("test/")
		    console.log(response)
		  }

export const logout = async()=>{
    let token = localStorage.getItem("token")
    api.defaults.headers.common['Authorization'] = `Token ${token}`
    let response = await api.post("users/logout/")
    localStorage.removeItem("token");

    if (response.status == 200){
        console.log('token deleted successfully')
        return null
    }
    else{
        console.log('logout failed')
        return console.errors(response.errors)
    }
}

export const userConfirmation = async() => {
    let token = localStorage.getItem("token") 
    if (token){
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        let response = await api.get('users/')
        if (response.status === 200){
            let user = response.data.email
            return user
        }
        console.error(response.data)
        return null
    }
    return null
}

export const handleUserAuth = async (data, create) => {
  let response = await api.post(create ? "users/create/" : "users/login/",
    data
  );
  if (response.status === 201 || response.status === 200) {
    let token = response.data.token;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    return response.data.token;
  }
  alert(response.data)
  console.log("user already exists")
  ;
  return null;
};



