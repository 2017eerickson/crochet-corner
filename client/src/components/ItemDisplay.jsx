import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate , } from 'react-router-dom';

const ItemDisplay = ({items, addToCart ,item, setQuantity, cartItems}) => {  

    const navigate = useNavigate()

    const handleAddToCart = (itemId) => {
        addToCart(itemId)
        setQuantity(cartItems.length);      
    }

    return (
        <div className=' m-10 flex flex-row justify-center items-center gap-[1vmin] flex-wrap w-[75%] border-2 border-orange-300 p-[5vmin] rounded-xl bg-transparent shadow-xl'>
        {   
            item?
                <Card  className=' w-[40vmin] shadow-xl bg-orange-300 flex flex-col justify-between rounded-xl border-5 border-orange-800' >
                <Card.Img className="p-4 rounded-full" variant="top" src={`http://localhost/${item.photo}`}/>
                <Card.Body classsName=''>
                        <Card.Title>{item.name}</Card.Title>
                        { !item.sold? <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle> : <Card.Subtitle className="mb-2 text-muted">Sold</Card.Subtitle> }
                        <Card.Subtitle className="mb-2 text-muted">Description:{item.desc}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Color: {item.color}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Size: {item.size}</Card.Subtitle>
                        <Button onClick={()=> handleAddToCart(item.id)} variant="success">Add to Cart</Button>
                    </Card.Body>
                </Card>
            :
            items.length > 0 ?
                items.map((item)=>( 
                <Card className=' border-2 w-[50vmin] shadow-xl  bg-transparent flex flex-col justify-between rounded-xl ' > 
                    <Card.Img className="p-4 rounded-full w-[40vmin] h-[40vmin] object-cover " variant="top" src={`http://localhost/${item.photo}`}/>
                    <Card.Body className='flex flex-col justify-between '>
                        <Card.Title>{item.name}</Card.Title>
                        { !item.sold? <Card.Title className=" mb-2 text-muted">${item.price}</Card.Title> : <Card.Title className="mb-2 text-red ">Sold out</Card.Title> }
                        <div className='flex flex-row justify-between'>
                            <Button onClick={()=> navigate(`details/${item.id}/`)} variant="primary">View Details</Button>
                            {!item.sold? <Button onClick={()=> handleAddToCart(item.id)} variant="success">Add to Cart</Button>:<Button onClick={()=> handleAddToCart(item.id)} disabled='true' variant="success">Add to Cart</Button>}
                        </div>
                    </Card.Body>
                </Card>
                )
            )
            :
            null
            }          
        </div>
    )
}   

export default ItemDisplay