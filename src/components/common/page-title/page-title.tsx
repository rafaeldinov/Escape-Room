import * as S from './page-title.styled';

type Props = {
  children: string;
};

const PageTitle = ({ children, ...props }: Props) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
