// import {  useState } from "react";
import { useLoaderData} from "react-router-dom";
// import {  useOutletContext } from "react-router-dom";
// import Stack from 'react-bootstrap/Stack';
// import TaskDisplay from "../components/TaskDisplay";
// import TaskForm from "../components/TaskForm";
// import NavBar from '../components/NavBar'
// import { logout } from "../utilities/authUtilities";

import { useState } from "react";

const HomePage = () => {
    // navigate = useNavigate()
    // location = useLocation()
    // const {user} = useOutletContext()
    const [items, setItems] = useState(useLoaderData())


    // useEffect(()=>{
    //     if (user && location.pathname === '/'){
    //     navigate('/home')}
    //     else if (!user && location.pathname !='/'){
    //     navigate('/')
    //     }
    // }, [user,location.pathname])

    // const addTask = (task) => {
    //     setTasks([...tasks, task])
    // }

    // const rmTask = (rmTask) => {
    //     setTasks(tasks.filter((task)=>(
    //         task.id !== rmTask.id
    //     )))
    // }

    // const updateTask = (editTask) => {
    //     setTasks(tasks.map((task)=>(
    //         task.id === editTask.id ? editTask : task
    //     )))
    // }

     

    return (
        <div>
            <h1>Welcome to Crochet Corner home page !</h1>
            {
                items? 
                items.map((item)=>(
                    <h1>{item.name}</h1>
                ))
                :
                null
            }
        </div>
    )
}

export default HomePage;