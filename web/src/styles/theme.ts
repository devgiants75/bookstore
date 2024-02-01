import { DefaultTheme } from 'styled-components';
import { Button, createTheme } from '@mui/material';
import reset from 'styled-reset';
import { styled } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Apple SD Gothic Neo"',
      '"Pretendard Variable"',
      'Pretendard',
      'Roboto',
      '"Noto Sans KR"',
      '"Segoe UI"',
      '"Malgun Gothic"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          fontSize: '6.25%',
        },
        body: {
          fontSize: '16rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important',
          lineHeight: '1.5',
          wordBreak: 'keep-all',
          wordWrap: 'break-word',
          overflowX: 'hidden',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
          fontFamily: 'inherit',
          display: 'inline-block',
        },
        button: {
          background: 'inherit',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          padding: 0,
          overflow: 'visible',
          cursor: 'pointer',
          fontFamily: 'inherit',
        },
      },
    },
  },
});

export const color = {
  black: '#000',
  white: '#fff',
  blue10: '#f7fafe',
  blue20: '#eff5ff',
  blue30: '#deebff',
  blue40: '#bcd1fc',
  blue50: '#94b5fc',
  blue60: '#6d9cfa',
  blue70: '#5189fa',
  blue80: '#4876ef',
  blue90: '#2d65f2',
  blue100: '#3157dd',
  blue110: '#1632a6',
  blue120: '#15276f',
  gray10: '#f8fafc',
  gray20: '#f4f6fa',
  gray30: '#eaedf4',
  gray40: '#d7dce5',
  gray50: '#b4c0d3',
  gray60: '#96a0b5',
  gray70: '#8491a7',
  gray80: '#67738e',
  gray90: '#5c667b',
  gray100: '#475067',
  gray110: '#373f57',
  gray120: '#292e41',
  gray130: '#171926',
  green10: '#f3fffd',
  green20: '#ebfffc',
  green30: '#defaf6',
  green40: '#aff4e5',
  green50: '#7beed8',
  green60: '#4fe5c7',
  green70: '#00deb3',
  green80: '#00d3ab',
  green90: '#11be9a',
  green100: '#17a187',
  green110: '#2a7c6d',
  green120: '#286258',
  coral10: '#fffafa',
  coral20: '#fff5f7',
  coral30: '#fce6e6',
  coral40: '#fec5c5',
  coral50: '#fea4a3',
  coral60: '#ff837e',
  coral70: '#ff7a72',
  coral80: '#ff6d6a',
  coral90: '#ff5656',
  coral100: '#eb413f',
  coral110: '#d63131',
  coral120: '#b81d1d',
};

export const MuiButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});