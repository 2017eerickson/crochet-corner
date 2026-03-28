import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleUserAuth } from '../utilities/authUtilities';
// import { useLoaderData } from 'react-router-dom';

const AuthForm = () => {
    const [user, setUser] = useState({email:"",password:""})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [create, setCreate] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        let userDict = {
            "email":email,
            "password": password
        }
        // let method = create ? 'CREATE ACCT' : 'LOGIN ACCT'
        let user = await handleUserAuth(userDict,create)
        if (user === null){
            console.log('user', user)
            return 
        }
        
        setUser(user) 
        setCreate(true)
        setEmail('')
        setPassword('')
        navigate('/sellerhomepage/')
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className= " flex flex-col jutify-between h-full">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label={create ? "CREATE ACCOUNT" : "LOG IN"} 
                        checked={create}
                        onChange={(e)=>setCreate(e.target.checked)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {create ? "CREATE ACCOUNT" : "LOG IN"} 
                </Button>
            </Form>
        </>
    )
}

export default AuthForm