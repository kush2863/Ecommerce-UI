import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: teal;
width: 100%;
height: 30px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
padding: 5px 20px;
font-size: 15px;
`


const Announcement = () => {
  return (
   <Container>Its a deal Shop for $100 and get free Shipping</Container>
  )
}

export default Announcement;
