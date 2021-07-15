import React from 'react'

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

import { Container, Header, Logo, Title, MenuContainer, MenuItemLink, MenuItemButton } from './styles'

import { useAuth } from '../../hooks/auth'

const Aside: React.FC = () => {
    const { signOut } = useAuth()

    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    )
}

export default Aside