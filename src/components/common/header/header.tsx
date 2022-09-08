import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setActiveURL } from '../../../store/quest-reducer';
import { getActiveURL } from '../../../store/selectors';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';
import { MainNavLinks } from '../../../const';

const Header = () => {
  const dispatch = useAppDispatch();
  const activeURL = useAppSelector(getActiveURL);

  const handlerMainNavLinkClick = (URL: string) => dispatch(setActiveURL(URL));

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>

        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            {MainNavLinks.map((item) => (
              <S.LinkItem key={item.name} onClick={() => handlerMainNavLinkClick(item.URL)}>
                {activeURL === item.URL
                  ?
                  <S.Link $isActiveLink to={item.URL}>
                    {item.name}
                  </S.Link>
                  :
                  <S.Link to={item.URL}>
                    {item.name}
                  </S.Link>}
              </S.LinkItem>
            ))}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
