import axios from "axios";

export const api = axios.create({
    baseURL: "/api/v1",
});


export const deleteItem = async(id)=>{
    let response = await api.delete(`items/${id}/`)
        alert( response.data)
        return response.data
}

export const editItem = async(id, updatedItem) =>{
    let response = await api.put(`/items/${id}/`,  {...updatedItem})
    if(response.status === 200){
        console.log(JSON.stringify(updatedItem))
        return response.data
    }else{
        return response.errors
    }
}

export const createItem = async(newItem)=>{
    console.log(newItem)
    let response = await api.post('/items/',
        {...newItem}
    )
    if(response.status == 201){
        console.log(response.data)
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

export const getAnItem = async(id) => {
    let response = await api.get(`items/${id}/`)
    if (response.status == 200){
        return response.data
    }else{
        console.error(response.data)
        return null
    }
}
