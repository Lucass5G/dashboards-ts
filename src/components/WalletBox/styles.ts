import styled from 'styled-components';

interface IContainerProps {
  color: string
}


export const Container = styled.div<IContainerProps>`
  width: 32%;
  height: 150px;

  margin: 10px 0;

  border-radius: 7px;

  padding: 10px 20px;

  background-color: ${props => props.color};
  color: ${({ theme }) => theme.colors.white};

  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    
    position: absolute;
    top: -10px;
    right: -30px;

    opacity: .3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 768px) {
    > span {
      font-size: 0.875rem;
    }
    > h1 {
      word-wrap: break-word;
      font-size: 1.375rem;

      strong {
        display: inline block;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 420px) {
    width: 100%;

    > h1 strong {
      display: inline;
      font-size: 1.375rem;
    }
  }
`;