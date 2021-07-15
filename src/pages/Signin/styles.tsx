import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.875rem;

  > h2 {
      color: ${({ theme }) => theme.colors.white};
      margin-left: 0.5rem;
  }

  > img {
      width: 2.5rem;
      height: 2.5rem;
  }
`;

export const Form = styled.form`
  width: 18.75rem;
  height: 18.75rem;

  padding: 1.875rem;

  border-radius: 0.625rem;

  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

  &:after {
    content: '';
          display: block;
          width: 20%;
          border-bottom: 0.625rem solid ${({ theme }) => theme.colors.warning};
  }
`;