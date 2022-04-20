import React from 'react'
import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap'
import Rating from './Rating'
// import {useSelector} from 'react-redux'

function RestaurantDetails() {
  const [details,setDetails] = useState([])
  const {id}=useParams()
  // const restaurantReducer = useSelector(state = state.restaurantReducer)
  // const {reastaurants} =restaurantReducer

  useEffect(()=>{
    const fetchDetails=async()=>{
      await fetch ('/restaurants.json')
      .then((res)=>res.json())
      .then((data)=>setDetails(data.restaurants))
    }
    fetchDetails()
  },[])
  const restaurantData=details.find(item=>item.id==id)
  return (
    <>
    <Link className='btn btn-outline-dark rounded btn-sm' to={'/'}>Back</Link>
    {restaurantData ? (
      <Card>
      <Card.Img variant="top" src={restaurantData.photograph} />
      <Card.Body>
        <Card.Title>{restaurantData.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroupItem>{restaurantData.neighborhood}</ListGroupItem>
        <ListGroupItem>Cuisine : {restaurantData.cuisine_type}</ListGroupItem>
        <ListGroupItem>Address :{restaurantData.address}</ListGroupItem>
      </ListGroup>
      <Col>
          <ListGroup.Item>
            <h4>Operating Hours</h4>
            <p>Sunday : {restaurantData.operating_hours.Sunday}</p>
            <p>Monday : {restaurantData.operating_hours.Sunday}</p>
            <p>Tueday : {restaurantData.operating_hours.Sunday}</p>
            <p>Wednesday : {restaurantData.operating_hours.Sunday}</p>
            <p>Thursday : {restaurantData.operating_hours.Sunday}</p>
            <p>Friday : {restaurantData.operating_hours.Sunday}</p>
            <p>Satday : {restaurantData.operating_hours.Sunday}</p>
          </ListGroup.Item>
      </Col>
      
        <Card className='my-3 mx-3 p-3 rounded card '>
            <Rating data={restaurantData.reviews}/>
        </Card>
      
    </Card>
    
    ):null}
    </>
  )
}

export default RestaurantDetails