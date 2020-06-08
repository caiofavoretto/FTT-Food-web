import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  height: 45px;
  border-radius: 16px;
  background: #710502;
  color: #fff;
  letter-spacing: 8px;
  font-size: 18px;
  border: 0;
  margin-top: 32px;
  font-weight: 900;
  padding: 8px 32px;
  transition: background-color 0.2s;

  -webkit-box-shadow: 0px 20px 36px -18px rgba(113, 5, 2, 0.68);
  -moz-box-shadow: 0px 20px 36px -18px rgba(113, 5, 2, 0.68);
  box-shadow: 0px 20px 36px -18px rgba(113, 5, 2, 0.68);

  &:hover {
    background: ${shade(0.2, '#710502')};
  }
`;
