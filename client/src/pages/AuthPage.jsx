import { useOutletContext } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Card from "react-bootstrap/Card"
import {  useEffect } from "react";

const AuthPage = () => {
    const {setUser, user } = useOutletContext()

    useEffect(()=>{
        if(user){
            window.location.pathname = '/sellerhomepage'
        }
    }, [user])

    return (
        <div className='min-h-screen'>
        <Card  className="w-[80vmin] h-[80vmin] mx-auto mt-5 p-3  border-2 rounded-2xl shadow-xl ">
            <h1>Seller Login and signup </h1>
            <AuthForm setUser={setUser} user={user} />
        </Card>
           
        </div>
    )
}

export default AuthPage;