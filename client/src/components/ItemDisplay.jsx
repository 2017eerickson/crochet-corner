import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const ItemDisplay = ({items,addToCart}) => {
    
    const navigate = useNavigate()
    return (
        <div className='p-5 flex flex-row flex-wrap gap-4 justify-center mt-4rounded-xl'>
        {
            items.length > 1 ?
            items.map((item)=>( 
               <Card style={{ width: '18rem' }}  className='shadow-xl bg-orange-50 flex flex-col justify-between rounded-xl'>
                <Card.Img variant="top" src={`http://localhost/${item.photo}`}/>
                    <Card.Body className='flex flex-col justify-between'>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                        <div className='flex flex-row justify-between'>
                            <Button onClick={()=> navigate(`details/${item.id}/`)} variant="primary">View Details</Button>
                            <Button onClick={()=> addToCart(item.id)} variant="secondary">Add to Cart</Button>
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