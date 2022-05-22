import { FC } from "react";
import { Header } from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='contentWrapper'>{children}</div>
    </div>
  );
};

export { Layout };
