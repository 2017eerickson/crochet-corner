import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../utilities/crudUtilities';
 
 export default function SellerHomepage() {
   const { items } = useOutletContext()
   const navigate = useNavigate()

   
   return (
     <div className='min-h-screen flex flex-col justify-center my-4 items-center'>
     
     <h1 className='text-3xl'>Welcome to your seller homepage</h1>
     <Button onClick={()=> navigate('createproduct/')} variant="success" className='my-4'>Create New Product</Button>
     {/* search bar  */}
     <div className='flex flex-row justify-center my-4'>
        <div className=' m-10 flex flex-row justify-center gap-[1vmin] flex-wrap w-[75%] border-2 border-orange-300 p-[5vmin] rounded-xl bg-transparent shadow-xl'>
        {
            items.length > 1 ?
            items.map((item)=>( 
               <Card style={{ width: '18rem' }}  className='shadow-xl bg-orange-50 flex flex-col justify-between rounded-xl'>
                <Card.Img variant="top" src={`http://localhost/${item.photo}`}/>
                    <Card.Body className='flex flex-col justify-between'>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                        <div className='flex flex-row justify-between'>
                            <Button onClick={()=> navigate(`sellerdetails/${item.id}/`)} variant="primary">View Details</Button>
                            <Button onClick={()=> deleteItem(item.id)} variant="danger">Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
               )
            )
            :
            null
            
            }
            </div>
        </div>
     </div>
   )
 }
 
 
 
 
 // navigate = useNavigate()
    // location = useLocation()
    // const {user} = useOutletContext()

    // {task, rmTask, updateTask}
    // const [edit, setEdit] = useState(false)
    // // const [editTitle, setEditTitle] = useState(task.title)

    // // const editTaskHandle = async() => {
    // //     let editedTask = await editTask(task.id,editTitle)
    // //     if (editedTask){
    // //         updateTask(editedTask)
    // //     }
    // //     setEdit(!edit)
    // // }

    // // const handleDelete = async()=>{
    // //     let deletedTask = await deleteTask(task.id)
    // //     if (deletedTask){
    // //         rmTask(task)
    // //     }
    // // }

 
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
