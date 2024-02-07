import { useState, KeyboardEvent, MouseEvent } from 'react';

import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom';
import { Popover } from '@mui/material';
import * as S from './Index.Style';

import Gnb from './components/Gnb';
import PoperMenuItem from './components/PoperMenuItem';
import { CATEGORY_LIST } from '../../constants/navigation';

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  const [productTitle, setProductTitle] = useState<string>('');

  // 리액트에서 URL을 옮길 때 사용되는
  const navigator = useNavigate();

  const SearchAdd = () => {
    // SearchAdd 동작 시 '/search/:productTitle'로 이동
    // productTitle에는 사용자가 검색창에 입력한 값이 담겨 있음
    navigator(`/search/${productTitle}`);
  };
  // enter key 동작
  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') SearchAdd();
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setMenuToggle(!menuToggle);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuToggle(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'active' : undefined;
  return (
    <>
      <S.Nav>
        <S.Logo>
          <Link to="/">몽몽책방</Link>
        </S.Logo>
        <S.Gnb>
          {CATEGORY_LIST.map(category => (
            <Gnb
              title={category.title}
              url={category.url}
              subTitles={category.subTitles}
            />
          ))}
        </S.Gnb>
        <S.GnbFullMenu>
          <S.SearchIcon
            onClick={() => {
              setSearchToggle(!searchToggle);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                stroke="#333333"
                strokeWidth="2"
              />
              <path
                d="M16.6108 16.6108L20.8534 20.8535"
                stroke="#333333"
                strokeWidth="2"
              />
            </svg>
          </S.SearchIcon>
          <S.GnbToggle
            onClick={handleClick}
            className={menuToggle ? 'active' : ''}
          >
            <span>메뉴열기/닫기</span>
          </S.GnbToggle>
        </S.GnbFullMenu>
      </S.Nav>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        sx={{
          zIndex: 999,
          marginTop: 3,
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ width: '100%' }}
      >
        <PoperMenuItem
          setAnchorEl={setAnchorEl}
          setMenuToggle={setMenuToggle}
        />
      </Popover>
      <S.Search className={searchToggle ? 'active' : ''}>
        <S.SearchInner>
          <S.SearchIcon
          // onClick={SearchAdd}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                stroke="#b4c0d3"
                strokeWidth="2"
              />
              <path
                d="M16.6108 16.6108L20.8534 20.8535"
                stroke="#b4c0d3"
                strokeWidth="2"
              />
            </svg>
          </S.SearchIcon>
          <InputBase
            placeholder="검색어를 입력해주세요."
            inputProps={{ 'aria-label': 'search' }}
            onChange={e => setProductTitle(e.target.value)}
            onKeyPress={event => handleKeyPress(event)}
          />
          <S.SearchCloseIcon onClick={() => setSearchToggle(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8L40 40" stroke="#5c667b" strokeWidth="4" />
              <path d="M8 40L40 8" stroke="#5c667b" strokeWidth="4" />
            </svg>
          </S.SearchCloseIcon>
        </S.SearchInner>
      </S.Search>
    </>
  );
}
