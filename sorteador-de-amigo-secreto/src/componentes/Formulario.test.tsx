import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

// jest

describe('o comportamento do Formulario.tsx', () => {
    test('quando input vazio, novos participantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        // encontrar no don o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        // encontrar o botão
        const botao = screen.getByRole('button')

        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()

        // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    });

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        // encontrar no don o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        // encontrar o botão
        const botao = screen.getByRole('button')

        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'roberto'
            }
        })

        // clicar no botão de submit
        fireEvent.click(botao)

        // garantir que o input esteja com focu ativo
        expect(input).toHaveFocus()

        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)

        const mensagemDeErro = screen.getByRole('alert')

        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(botao)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        });

        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})

