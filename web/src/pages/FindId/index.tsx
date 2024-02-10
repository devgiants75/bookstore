import React, { useState } from 'react';
import axios from 'axios';
import { useUserStore } from '../../stores';
import * as S from './Index.Style';
import Index from '../../components/Input';
import AuthResult from '../../components/AuthResult';

interface FormData {
  userNickname: string;
  userEmail: string;
}

export default function FindId() {
  const { user, setUser } = useUserStore();
  const [isFindId, setIsFindId] = useState<boolean>(true);

  const [formData, setFormData] = useState<FormData>({
    userNickname: '',
    userEmail: '',
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userNickname: '',
    userEmail: '',
  });

  const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

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
      userEmail: '',
      userNickname: '',
    };

    if (!formData.userNickname) {
      newErrors.userNickname = '닉네임을 입력하세요.';
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
      .post('http://localhost:4080/api/auth/findId', formData)
      .then(response => {
        const responseData = response.data;
        if (!responseData.result) {
          setIsFindId(false);
          // alert('아이디를 찾을 수 없습니다.');
        } else {
          const moon = response.data.data;
          alert(`일치하는 아이디:${moon}`);
        }
      })
      .catch(error => {
        setIsFindId(false);
        // alert('아이디 찾기에 실패하였습니다.');
      });
  };

  return (
    <S.Container>
      <S.ContainerInner>
        <S.Title>아이디 찾기</S.Title>
        {user != null && <>{user.userNickname}</>}
        <Index
          label="닉네임"
          type="userName"
          error={!!errors.userNickname}
          helperText={errors.userNickname}
          onChange={handleInputChange('userNickname')}
        />
        <Index
          label="이메일"
          type="email"
          error={!!errors.userEmail}
          helperText={errors.userEmail}
          onChange={handleInputChange('userEmail')}
        />
        <S.Button onClick={handleSubmit}>아이디 찾기</S.Button>
        {isFindId ? (
          ''
        ) : (
          <AuthResult
            title="아이디 찾기 실패"
            desc="아이디를 찾을 수 없습니다."
          />
        )}
      </S.ContainerInner>
    </S.Container>
  );
}
