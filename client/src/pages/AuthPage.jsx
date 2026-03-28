import { useOutletContext } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Card from "react-bootstrap/Card"

const AuthPage = () => {
    const {setUser, user } = useOutletContext()

    return (
        <div className='min-h-screen'>
        <Card style={{ width: '50vmin', height: '50vmin' }} className="mx-auto mt-5 p-3  border-2 rounded-2xl shadow-xl ">
            <h1>Seller Login and signup </h1>
            <AuthForm setUser={setUser} user={user} />
        </Card>
           
        </div>
    )
}

export default AuthPage;