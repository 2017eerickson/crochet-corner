import { useOutletContext } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Card from "react-bootstrap/Card"

const AuthPage = () => {
    const {setUser} = useOutletContext()

    return (
        <>
        <Card style={{ width: '18rem' }} className="mx-auto mt-5 p-3">
            <h1>Seller Login and signup </h1>
            <AuthForm setUser={setUser} />
        </Card>
           
        </>
    )
}

export default AuthPage;