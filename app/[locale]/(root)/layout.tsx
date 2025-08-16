import { ChildProps } from "@/types";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
