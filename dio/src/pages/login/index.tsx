import {Input} from '../../components/input';

import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Form } from 'react-router-dom';


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { IFormLogin } from './types';

const Login = () => {

    const {
        control,
        formState: { errors, isValid },
      } = useForm<IFormLogin>({
        mode: "onBlur",
        reValidateMode: "onChange",
      });

    return (<>
    <Header></Header>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

                    <form>
                        <Input 
                            name="email"
                            placeholder="Email"
                            control={control}
                            leftIcon={<MdEmail />}
                            errorMessage={errors?.email?.message}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            control={control}
                            leftIcon={<MdLock />}
                            errorMessage={errors?.password?.message}
                        />
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export { Login }