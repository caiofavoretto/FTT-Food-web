import styled from 'styled-components';

import { shade } from 'polished';

import containerBackground from '../../assets/container-login.svg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 550px;

  background: url(${containerBackground}) center no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px;

  header {
    margin-bottom: 64px;

    img {
      width: 361px;
    }
  }

  form {
    width: 80%;

    label {
      font-size: 18px;
      color: #710502;
      display: block;
      font-weight: 500;
      width: 100%;
    }
  }
`;

export const Field = styled.fieldset`
  display: block;
  border: 0;
  font-weight: 500;
  width: 100%;

  & + fieldset {
    margin-top: 32px;
  }

  label {
    font-size: 20px;
    color: #710502;
    display: block;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 64px;
  display: flex;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #f4a927;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4a927')};
    }
  }

  div {
    margin: 0 8px;
    width: 1px;
    height: 20px;
    background: #d5d7de;
  }
`;
