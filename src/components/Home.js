import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {useDispatch,useSelector} from 'react-redux'
import {listRestaurants} from '../actions/restaurantActions'



function Home() {
  const dispatch = useDispatch()
  const restaurantReducer=useSelector(state => state.restaurantReducer)
  const {restaurants} = restaurantReducer
  useEffect(()=>{
      dispatch(listRestaurants())
  },[])
  return (
    <Row>
      {restaurants.map(item=>(
        <Col sm={12} md={8} lg={4} xl={3}>
          <RestaurantCard data={item}/>
        </Col>
      ))}
    </Row>
  )
}

export default Home