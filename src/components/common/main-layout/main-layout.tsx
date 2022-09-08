import React, { ReactNode } from 'react';
import { Header, Footer } from '../../../components/common/common';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
