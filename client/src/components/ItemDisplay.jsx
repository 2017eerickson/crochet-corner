import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const ItemDisplay = ({items, addToCart}) => {
    
    const navigate = useNavigate()
    return (
        <div id="item-container">
        {
            items?
            items.map((item)=>( 
               <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={`http://localhost:8000/api/v1/items/${item.photo}`}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
                        <Button onClick={()=> navigate(`details/${item.id}/`)} variant="primary">View Details</Button>
                        <Button onClick={()=> addToCart(item.id)} variant="secondary">Add to Cart</Button>
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