import styled from 'styled-components';

interface ILegendProps {
  color: string
}

export const Container = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 7px;

`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 400px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 16px;

`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 7px;

  > div {
      background-color: ${props => props.color};

      width: 40px;
      height: 40px;

      font-size: 14px;
      line-height: 40px;
      text-align: center;

      border-radius: 4px;
  }

  > span {
      margin-left: 5px;
  }
`;