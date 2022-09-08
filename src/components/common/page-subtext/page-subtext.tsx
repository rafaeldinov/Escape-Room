import * as S from './page-subtext.styled';

type Props = {
  children: string;
};

const PageSubtext = ({ children, ...props }: Props) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
