import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    margin: 0.438rem 0;
    padding: 0.625rem;

    border-radius: 0.313rem;

    font-weight: bold;
    
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.warning};

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;