import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import * as S from './Index.Style';

interface props {
  title: string;
  url: string;
  subTitles: any[];
}

export default function MenuComponent({ title, url, subTitles }: props) {
  // const [isHovering, setIsHovering] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigator = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuItemHandler = (url: string) => {
    setAnchorEl(null);
    navigator(url);
  };

  return (
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
              'rgba(20, 20, 20, 0.12) 4px 12px 24px 0px, rgba(20, 20, 20, 0.08) 0px 1px 4px 0px',
            borderRadius: '10rem',
            margin: '0',
            padding: '6rem',
          },
        },
      }}
      PopperProps={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -4],
            },
          },
        ],
      }}
    >
      <S.GnbList onClick={handleClick} type="button">
        {title}
      </S.GnbList>
    </Tooltip>
  );
}
