import styled from 'styled-components';

interface ILegendProps {
  color: string
}

export const Container = styled.div`
  width: 48%;
  height: 16.25rem;

  margin: 0.6rem 0 ;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 0.438rem;

  display: flex;
`;

export const SideLeft = styled.aside`
    padding: 1.875rem 1.25rem;

    > h2  {
        padding-left: 1rem;
        margin-bottom: 0.625rem;
    }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  height: 10.625rem;
  padding-right: 0.938rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0.625rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 0.438rem;
    padding-left: 1rem;

  > div {
      background-color: ${props => props.color};;

      width: 2.5rem;
      height: 2.5rem;

      font-size: 0.875rem;
      line-height: 2.5rem;
      text-align: center;

      border-radius: 0.25rem;
  }

  > span {
      margin-left: 0.313rem;
  }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 9.375rem;

    display: flex;
    justify-content: center;

    padding-top: 2.2rem;
`;

