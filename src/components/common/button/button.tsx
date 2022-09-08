import * as S from './button.styled';

type Props = {
  children: string;
};

const Button = ({ children, ...props }: Props) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
