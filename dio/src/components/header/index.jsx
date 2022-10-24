import React from 'react'
import {Button} from '../button'
import logo from '../../assets/logo-dio.png'
import {
    Container,
    Row,
    Column,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio"></img>
                <BuscarInputContainer>
                    <Input placeholder="Buscar..."></Input>
                </BuscarInputContainer>
                <Menu>Live code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#"></MenuRight>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
            </Row>
        </Container>
    </Wrapper>
  )
}
export{Header}