
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive'

const Container= styled.div`
    height:60px;
    ${mobile({height:'50px'})}
`
const Wrapper= styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({padding:'10px 0'})}
`
const Left =styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language= styled.span`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:'none'})}

`
const SearchContainer= styled.div`
border:1px solid black;
display:flex;
padding:5px;
margin-left:25px;
align-items:center; 
outline: none;

`
const Input=styled.input`
border:none;
outline: none;
${mobile({width:'50px'})}

`
const Logo= styled.h1`
font-weight:bold;
${mobile({fontSize:'24px'})}
`
const Center=styled.div`
flex:1; 
text-align:center;
`
const Right  =styled.div`
flex:1; 
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2, justifyContent:'center'})}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:'12px'  , marginLeft:'10px'})}

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:'grey', fontSize:30}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Ama.</Logo>
                
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color='primary'  >
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
