import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDisplay = ({items}) => {
    // let itemsList = items.map((item)=>(
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src={item.photo}/>
    //                 <Card.Body>
    //                     <Card.Title>{item.name}</Card.Title>
    //                     <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
    //                     <Button variant="primary">View Details</Button>
    //                 </Card.Body>
    //             </Card>
    //             ))
    return (
        <div id="item-container">
        {
            items?
            items.map((item)=>( 
               <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={item.photo}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
                        <Button variant="primary">View Details</Button>
                        <Button variant="secondary">Add to Cart</Button>
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