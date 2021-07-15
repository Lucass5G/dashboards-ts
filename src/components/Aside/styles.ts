import styled from 'styled-components'


export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};

    padding-left: 1.063rem;
    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.header`
    height: 4.375rem;
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    height: 2.188rem;
    width: 2.188rem;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 0.625rem;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 3.125rem;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 0.438rem 0;
    display: flex;
    align-items: center;


    transition: opacity .3s ;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 1.125rem;
        margin-right: 0.188rem;
    }
`
export const MenuItemButton = styled.button`
    font-size: 1rem;
    
    color: ${props => props.theme.colors.info};
    background: none;

    border: none;
    margin: 0.438rem 0;
    display: flex;
    align-items: center;


    transition: opacity .3s ;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 1.125rem;
        margin-right: 0.188rem;
    }
`;