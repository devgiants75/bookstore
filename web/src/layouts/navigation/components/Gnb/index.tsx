import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import * as S from './Index.Style';

interface props {
  title: string;
  // eslint-disable-next-line react/no-unused-prop-types
  url: string;
  subTitles: any[];
}

export default function MenuComponent({ title, subTitles }: props) {
  // const [isHovering, setIsHovering] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigator = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemHandler = (url: string) => {
    setAnchorEl(null);
    navigator(url);
  };

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };
  //
  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };
  // };

  return (
    <>
      {/* <S.GnbList */}
      {/*  onMouseEnter={handleClick} */}
      {/*  onMouseLeave={handleClose} */}
      {/*  onMouseEnter={handleMouseEnter} */}
      {/*  onMouseLeave={handleMouseLeave} */}
      {/* > */}
      {/*  {title} */}
      {/* </S.GnbList> */}
      {/* <S.Lnb> */}
      {/*  {subTitles.map(sub => ( */}
      {/*    <S.LnbList onClick={() => menuItemHandler(sub.url)}> */}
      {/*      {sub.subtitle} */}
      {/*    </S.LnbList> */}
      {/*  ))} */}
      {/* </S.Lnb> */}

      <Tooltip
        title={subTitles.map(sub => (
          <S.LnbList onClick={() => menuItemHandler(sub.url)}>
            {sub.subTitle}
          </S.LnbList>
        ))}
        placement="bottom-start"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: '#fff',
              minWidth: '148rem',
              boxShadow:
                'rgba(20, 20, 20, 0.12) 4px 12px 24px 0px, rgba(20,20,20,0.08) 0px 1px 4px 0px',
              borderRadius: '10rem',
              margin: '0',
              padding: '6rem',
            },
          },
        }}
      >
        <S.GnbList onClick={handleClick} type="button">
          {title}
        </S.GnbList>
      </Tooltip>

      {/* -------------------------------- */}
      {/* <S.Typo variant="subtitle1" onClick={handleClick}> */}
      {/*  {title} */}
      {/* </S.Typo> */}

      {/* <Typography */}
      {/*  textAlign="center" */}
      {/*  variant="subtitle1" */}
      {/*  fontSize={20} */}
      {/*  onClick={handleClick} */}
      {/* > */}
      {/*  {title} */}
      {/* </Typography> */}

      {/* <Menu */}
      {/*  id="mouse-over-popover" */}
      {/*  anchorEl={anchorEl} */}
      {/*  open={open} */}
      {/*  onClose={handleClose} */}
      {/*  MenuListProps={{ */}
      {/*    'aria-labelledby': 'basic-button', */}
      {/*  }} */}
      {/*  sx={{ pt: 1.5, pb: 1.5, mt: 2 }} */}
      {/* > */}
      {/*  {subTitles.map(sub => ( */}
      {/*    <MenuItem */}
      {/*      sx={{ minwidth: '10vw', pt: 1.5, pb: 1.5 }} */}
      {/*      onClick={() => menuItemHandler(sub.url)} */}
      {/*      style={{ fontSize: '16rem' }} */}
      {/*    > */}
      {/*      {sub.subTitle} */}
      {/*    </MenuItem> */}
      {/*  ))} */}
      {/* </Menu> */}
    </>
  );
}
