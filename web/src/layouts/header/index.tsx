import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import { useState, KeyboardEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../../stores';
import logo from './logo.png';
import * as S from './Index.Style';
import Navigation from '../navigation';

interface Prop {
  num: number;
  setNum: any; // void 타입은 함수로 인식
}

interface UserStore {
  user: any;
  setUser: (user: any) => void;
  removeUser: () => void;
}

export default function Header() {
  // const [login, setLogin] = useState<boolean>(true);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, right: open });
    };

  const { user, removeUser } = useUserStore();

  const [cookies, setCookies] = useCookies();

  const logOutHandler = () => {
    setCookies('token', '', { expires: new Date() });
    localStorage.removeUser();
  };

  // if(!cookies.token == null){
  const list = () => (
    <Box
      sx={{ width: 250 }}
      pt={4}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display="flex" justifyContent="center">
        <TagFacesIcon />
        <Typography variant="subtitle1" align="center" ml={1} mb={2}>
          안녕하세요.{' '}
          <Typography variant="subtitle1" component="span" fontWeight={800}>
            {user != null && <>{user.userName}</>}
          </Typography>{' '}
          님
        </Typography>
      </Box>
      <Divider />
      <Link to="/myPage">
        <Typography variant="subtitle1" m={2}>
          마이 페이지
        </Typography>
      </Link>
      <Link to="/orderInquiryPage">
        <Typography variant="subtitle1" m={2}>
          주문 내역 조회
        </Typography>
      </Link>
      <Link to="/cart">
        <Typography variant="subtitle1" m={2}>
          장바구니
        </Typography>
      </Link>
      <Typography variant="subtitle1" m={2}>
        리뷰 / 문의
      </Typography>
      <Link to="/userUpdate">
        <Typography variant="subtitle1" m={2}>
          회원정보수정
        </Typography>
      </Link>
      <Link to="/orderPayment">
        <Typography variant="subtitle1" m={2}>
          주문 결제 페이지
        </Typography>
      </Link>
      <Link to="/userAskList">
        <Typography variant="subtitle1" m={2}>
          회원 1 : 1 문의
        </Typography>
      </Link>
      <Link to="/userAskWrite">
        <Typography variant="subtitle1" m={2}>
          회원 1 : 1 문의 작성페이지
        </Typography>
      </Link>
      <Link to="/userAskUpdate/:askId">
        <Typography variant="subtitle1" m={2}>
          회원 1 : 1 문의 수정페이지
        </Typography>
      </Link>
      <Link to="/practice">
        <Typography variant="subtitle1" m={2}>
          주문내역 조회 최종본
        </Typography>
      </Link>
      <Link to="/withdraw">
        <Typography variant="subtitle1" m={2}>
          회원 탈퇴
        </Typography>
      </Link>
    </Box>
  );
  // }

  return (
    <S.Header>
      <S.HeaderTop>
        {cookies.token ? (
          <Link to="#">로그아웃</Link>
        ) : (
          <Link to="/signIn">로그인</Link>
        )}
        <hr />
        <Link to="/signup">회원가입</Link>
        {cookies.token && (
          <>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: '#000000' }}
            />
            <IconButton onClick={toggleDrawer(true)}>
              <PersonIcon
                sx={{
                  color: grey[900],
                  marginRight: 2,
                  marginLeft: 2,
                }}
              />
            </IconButton>
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </>
        )}
      </S.HeaderTop>
      <Navigation />
    </S.Header>
  );
}
