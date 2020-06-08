import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Field, Footer } from './styles';

import logoImg from '../../assets/logo.svg';

interface LoginFormData {
  registry: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          registry: Yup.string().required('Registro obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          registry: data.registry,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        // TODO: integrar mensagens de erro.
        console.log(err.response.data.message);

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <header>
        <img src={logoImg} alt="TMFood" />
      </header>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="registry">Registro</label>
        <Input id="registry" name="registry" />

        <label htmlFor="password">Senha</label>
        <Input id="password" name="password" type="password" />

        <Button type="submit">LOGIN</Button>
      </Form>

      <Footer>
        <Link to="/forgot-password">Esqueci a senha</Link>
        <div />
        <Link to="/new-access">Solicitar acesso</Link>
      </Footer>
    </Container>
  );
};

export default Login;
