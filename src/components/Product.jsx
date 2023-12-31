import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info =styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5 ease-in-out;
cursor: pointer;
`
const Container= styled.div`
width: calc(25%-10px);
margin-bottom: 20px;
min-width: 300px;
height: 350px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;


&:hover ${Info}{
    opacity: 1;
}
`

const Circle =styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color: white;
position: absolute;
z-index: 0;

`
const Image =styled.img`
height: 75%;
z-index: 2;


`

const Icon =styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    transform: scale(1.1);
    background-color: #e9f5f5;
}
`
const Product = ({item}) => {
  return (
    <Container>
      <Circle />
        <Image src={item.img} />
        
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
     
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            </Info>
    </Container>
  )
}

export default Product
