 import React from 'react'
 
 export default function SellerHomepage() {
   return (
     <div>SellerHomepage</div>
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
