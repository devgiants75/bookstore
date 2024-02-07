import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LIST } from '../../constants/layout-footer';
import * as S from './Index.Style';

export default function index() {
  return (
    <S.Footer>
      <S.Ul>
        {FOOTER_LIST.map(item => (
          <S.List key={item.id}>
            <Link to="#">{item.name}</Link>
          </S.List>
        ))}
      </S.Ul>
      <S.Inner>
        <S.Logo>
          <Link to="/">몽몽책방</Link>
        </S.Logo>
        <div>
          <S.Address>
            <div>
              <span>(주)몽몽책방</span>
              <span>대표자명: 000</span>
              <span>사업자등록번호: 000-00-0000</span>
              <span>부산광역시 부산진구 서면로 00 (우: 00000)</span>
            </div>
            <div>
              <span>개인정보보호책임자: 경영지원실 000 실장</span>
              <span>통신판매업신고: 부산진구-000</span>
              <span>
                고객센터: 0000-0000 (월~금 09:00 ~ 18:00, 토/일 공휴일 휴무)
              </span>
            </div>
          </S.Address>
          <S.Copy>COPYRIGHT @ MONGMONG THINKBIG. ALL RIGHTS RESERVED.</S.Copy>
        </div>
      </S.Inner>
    </S.Footer>
  );
}
