import { useNavigate } from 'react-router-dom';
import { AGE_LIST, CATEGORY_LIST } from '../../../../constants/navigation';
import * as S from './Index.Style';

interface Props {
  setAnchorEl: (parameter: null | HTMLElement) => void;
  setMenuToggle: (parameter: boolean) => void;
}

export default function PoperMenuItem({ setAnchorEl, setMenuToggle }: Props) {
  const navigator = useNavigate();

  const menuItemHandler = (url: string) => {
    setAnchorEl(null);
    navigator(url);
    setMenuToggle(false);
  };

  return (
    <S.FullMenu>
      {CATEGORY_LIST.map(category => (
        <S.MenuContent>
          <S.Depth01>{category.title}</S.Depth01>
          {category.subTitles.map(sub => (
            <S.Depth02 onClick={() => menuItemHandler(category.url)}>
              {sub.subTitle}
            </S.Depth02>
          ))}
        </S.MenuContent>
      ))}
    </S.FullMenu>
  );
}
