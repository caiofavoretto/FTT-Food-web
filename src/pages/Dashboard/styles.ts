import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  nav {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 64px;

    button {
      background: none;
      border: 0;
    }
  }
`;

export const Content = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  background: #fff;
  border-radius: 32px 32px 0 0;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 56px 64px;

    strong {
      font-size: 28px;
    }

    span {
      color: #f4a927;
      font-weight: 500;
      margin-top: 8px;
      font-size: 18px;
    }
  }
`;

export const MenuContainer = styled.div`
  padding: 0 64px;
  display: flex;
  align-items: center;
`;

interface MealProps {
  selected?: boolean;
}

export const Meal = styled.div<MealProps>`
  border-radius: 32px;
  padding: 32px;

  background: #fff;
  ${(props) =>
    !props.selected &&
    css`
      -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
      );
    `}

  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  & + div {
    margin-left: 16px;
  }

  strong {
    font-size: 18px;
  }

  ul {
    margin-top: 16px;
    list-style: none;
    color: #555763;

    li {
      font-weight: 700;
      position: relative;
      padding-left: 22px;

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        left: 0;
        top: 3px;
        border: 3px solid #4d6219;
        border-radius: 50%;
      }

      & + li {
        margin-top: 16px;
      }

      span {
        font-weight: 400;
      }
    }
  }

  img {
    border-radius: 24px;
    margin-top: 32px;
    height: 120px;
  }
`;
