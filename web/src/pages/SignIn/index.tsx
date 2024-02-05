import React, { useState } from 'react';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './Index.Style';

import { useUserStore } from '../../stores';
import Input from '../../components/Input/Input';

export default function SingIn() {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [cookies, setCookies] = useCookies();
  const navigator = useNavigate();
  const { user, setUser } = useUserStore();

  const signInHandeler = () => {
    if (userId.length === 0 || userPassword.length === 0) {
      alert('아이디와 비밀번호를 입력하세요.');
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
        console.log(responseData);
        if (!responseData.result) {
          alert('로그인에 실패했습니다');
          return;
        }
        const { token, exprTime, user } = responseData.data;
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + exprTime);

        setCookies('token', token, { expires });
        setUser(user);
      })
      .catch(error => {
        alert('로그인에 실패했습니다');
      });
  };

  return (
    <S.Container>
      <S.ContainerInner>
        <S.Title>로그인</S.Title>
        <Input
          label="아이디"
          type="email"
          onChange={e => setUserId(e.target.value)}
        />
        <Input
          label="비밀번호"
          type="password"
          onChange={e => setUserPassword(e.target.value)}
        />
        <S.Button onClick={() => signInHandeler()}>로그인</S.Button>
        <S.Forgotten>
          <Link to="/findId">아이디 찾기</Link>
          <hr />
          <Link to="/findId">비밀번호 찾기</Link>
        </S.Forgotten>
        <S.SignUp>
          <span>아직 회원이 아니신가요?</span>
          <Link to="/signup">회원가입</Link>
        </S.SignUp>
      </S.ContainerInner>
    </S.Container>
  );
}
