import React, { ReactNode } from 'react';
import * as S from './container.styled';

type Props = {
  children: ReactNode;
}

const Container = ({ children, ...props }: Props) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
