import React from 'react';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo-white.svg';
import userImg from '../../assets/user.svg';
import foodImg from '../../assets/food.jpg';

import { Container, Content, MenuContainer, Meal } from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <nav>
        <img width={160} src={logoImg} alt="TMFood" />
        <button type="button" onClick={signOut}>
          <img width={42} src={userImg} alt="Usuário" />
        </button>
      </nav>

      <Content>
        <header>
          <strong>Bem vindo, {user.name}</strong>
          <span>08 JUN 2020, Segunda-feira</span>
        </header>

        <MenuContainer>
          <Meal selected>
            <strong>Hoje</strong>
            <ul>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
            </ul>
            <img src={foodImg} alt="Refeição" />
          </Meal>
          <Meal>
            <strong>Amanhã</strong>
            <ul>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
            </ul>
            <img src={foodImg} alt="Refeição" />
          </Meal>
          <Meal>
            <strong>Quarta-feira</strong>
            <ul>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
            </ul>
            <img src={foodImg} alt="Refeição" />
          </Meal>
          <Meal>
            <strong>Quinta-feira</strong>
            <ul>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
              <li>
                Arroz <span>(1 colher: 30kcal)</span>
              </li>
            </ul>
            <img src={foodImg} alt="Refeição" />
          </Meal>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
