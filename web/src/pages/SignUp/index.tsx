import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Index from '../../components/Input';
import * as S from './Index.Style';

interface FormData {
  userId: string;
  userPassword: string;
  userEmail: string;
  userName: string;
}

export default function SignUp() {
  const idRegExp = /^[a-zA-Z0-9_]{4,15}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
  const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    userPassword: '',
    userEmail: '',
    userName: '',
  });
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userId: '',
    userPassword: '',
    userEmail: '',
    userName: '',
  });

  const handleInputChange =
    (name: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });

      setErrors({
        ...errors,
        [name]: '',
      });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      userId: '',
      userPassword: '',
      userEmail: '',
      userName: '',
    };

    if (!formData.userId) {
      newErrors.userId = '아이디를 입력해주세요.';
    } else if (!idRegExp.test(formData.userId)) {
      newErrors.userId = "4~15자의 영문, 숫자와 특수문자 '_'만 사용해주세요.";
    }

    if (!formData.userPassword) {
      newErrors.userPassword = '비밀번호를 입력하세요.';
    } else if (!passwordRegExp.test(formData.userPassword)) {
      newErrors.userPassword =
        '8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.';
    }

    if (!formData.userName) {
      newErrors.userName = '이름을 입력하세요.';
    }

    if (!formData.userEmail) {
      newErrors.userEmail = '이메일을 입력하세요.';
    } else if (!emailRegExp.test(formData.userEmail)) {
      newErrors.userEmail =
        '잘못된 이메일 주소입니다. 이메일 주소를 정확하게 입력해주세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }

    // 회원가입 성공
    axios
      .post('http://localhost:4080/api/auth/signUp', formData)
      .then(response => {
        alert('회원가입 완료! 환영합니다.');
      })
      .catch(error => {
        console.log(error);
      });
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <S.Container>
        <S.ContainerInner>
          <S.Title>회원가입</S.Title>
          <Index
            label="아이디"
            type="id"
            name="userId"
            placeholder="4~8자리 / 영문, 숫자, 특수문자'_' 사용가능"
            error={!!errors.userId}
            helperText={errors.userId}
            onChange={handleInputChange('userId')}
          />
          <Index
            label="비밀번호"
            type="password"
            name="userPassword"
            placeholder="8~12자리 / 영문 대소문자, 숫자, 특수문자 조합"
            error={!!errors.userPassword}
            helperText={errors.userPassword}
            onChange={handleInputChange('userPassword')}
          />
          <Index
            label="이름"
            type="name"
            name="userName"
            placeholder="이름 입력"
            error={!!errors.userName}
            helperText={errors.userName}
            onChange={handleInputChange('userName')}
          />
          <Index
            label="이메일"
            type="email"
            name="userEmail"
            placeholder="email@example.com"
            error={!!errors.userEmail}
            helperText={errors.userEmail}
            onChange={handleInputChange('userEmail')}
          />
          {/* <Input */}
          {/*  label="주소" */}
          {/*  type="address" */}
          {/*  error={userAddress === ''} */}
          {/*  helperText={userAddress === '' ? '주소를 입력하세요.' : false} */}
          {/*  onChange={handleInputChange('userAddress')} */}
          {/* /> */}
          {/* <Input label="상세주소" type="address" onChange={handleInputChange} /> */}
          {/* <Input */}
          {/*  label="자녀 생년월일" */}
          {/*  type="kidBirth" */}
          {/*  onChange={handleInputChange('userBirth')} */}
          {/* /> */}
          <S.Button type="submit" onClick={handleSubmit}>
            회원가입
          </S.Button>
          <S.SignIn>
            <span>이미 회원이신가요?</span>
            <Link to="/signin">로그인</Link>
          </S.SignIn>
        </S.ContainerInner>
      </S.Container>
      {/* -------------- */}
    </>
  );
}
