import React from 'react'
import {Button} from '../button'
import logo from '../../assets/logo-dio.png'
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio"/>
                {autenticado ? (
                <>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                ) : (
                <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
                </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}
export{Header}