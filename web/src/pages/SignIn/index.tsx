import React, { useState } from 'react';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import * as S from './Index.Style';

import { useUserStore } from '../../stores';
import Index from '../../components/Input';
import AuthResult from '../../components/AuthResult';

export default function SingIn() {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [cookies, setCookies] = useCookies();
  const { user, setUser } = useUserStore();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const signInHandler = () => {
    if (userId.length === 0 || userPassword.length === 0) {
      setIsLogin(false);
      return;
    }
    const data = {
      userId,
      userPassword,
    };

    axios
      .post('http://localhost:4080/api/auth/signIn', data)
      .then(response => {
        const responseData = response.data;
        if (!responseData.result) {
          setIsLogin(false);
          return;
        }
        const { token, exprTime, user } = responseData.data;
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + exprTime);
        setIsLogin(true);

        setCookies('token', token, { expires });
        setUser(user);
      })
      .catch(error => {
        setIsLogin(false);
      });
  };

  return (
    <S.Container>
      <S.ContainerInner>
        <S.Title>로그인</S.Title>
        <Index
          label="아이디"
          name="userId"
          type="text"
          onChange={e => setUserId(e.target.value)}
        />
        <Index
          label="비밀번호"
          name="userPassword"
          type="password"
          onChange={e => setUserPassword(e.target.value)}
        />
        <S.Button onClick={() => signInHandler()}>로그인</S.Button>
        <S.Forgotten>
          <Link to="/findId">아이디 찾기</Link>
          <hr />
          <Link to="/findId">비밀번호 찾기</Link>
        </S.Forgotten>
        <S.SignUp>
          <span>아직 회원이 아니신가요?</span>
          <Link to="/signup">회원가입</Link>
        </S.SignUp>
        {isLogin ? (
          ''
        ) : (
          <AuthResult
            title="로그인 실패"
            desc="아이디 또는 비밀번호가 틀렸습니다."
          />
        )}
      </S.ContainerInner>
    </S.Container>
  );
}
