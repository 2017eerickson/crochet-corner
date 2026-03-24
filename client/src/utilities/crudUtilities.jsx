import axios from "axios";

export const api = axios.create({
    baseURL: "/api/v1",
});


export const deleteItem = async(id)=>{
    let response = await api.delete(`items/${id}/`)
        alert( response.data)
        return response.data
}

export const editItem = async(id, title) =>{
    let response = await api.put(`/items/${id}/`,{
        'title': title
    })
    if(response.status === 200){
        return response.data
    }else{
        return response.errors
    }
}

export const createItem = async(title)=>{
    let response = await api.post('/items/',
        {"title": title}
    )
    if(response.status == 201){
        return response.data
    }else{
        console.error(response.data)
            return null
    }

}

export const getAllItems = async() => {
 
    let response = await api.get("items/")
    if (response.status == 200){
        return response.data
    }else{
        console.error(response.data)
        return []
    }
}

export const GetAnItem = async(id) => {
    let response = await api.get(`items/${id}/`)
    if (response.status == 200){
        return response.data
    }else{
        console.error(response.data)
        return null
    }
}
