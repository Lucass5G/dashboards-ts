import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.main`
  
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter{
      font-size: 18px;
      font-weight: bold;

      background: none;
      color: ${({ theme }) => theme.colors.white};

      margin: 0 10px;

      transition: opacity .3s;
      opacity: .5;

      :hover {
          opacity: .9;
      }  
  }

  .tag-filter-eventual::after {
          content: '';
          display: block;
          width: 70%;
          margin: 0 auto;
          border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
      }

  .tag-filter-recurrent::after {
          content: '';
          display: block;
          width: 70%;
          margin: 0 auto;
          border-bottom: 10px solid ${({ theme }) => theme.colors.success};
      }

   .tag-actived {
    opacity: 1;
   }   
`;