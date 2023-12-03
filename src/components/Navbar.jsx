
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    height:60px;
    
`
const Wrapper= styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;

`
const Left =styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language= styled.span`
 font-size:14px;
 cursor:pointer;

`
const SearchContainer= styled.div`
border:1px solid black;
display:flex;
padding:5px;
margin-left:25px;
align-items:center; 

`
const Input=styled.input`
border:none;

`
const Logo= styled.h1`
font-weight:bold;
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
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
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
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar