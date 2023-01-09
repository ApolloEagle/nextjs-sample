import NavBar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center p-6">
        {children}
      </div>
    </>
  );
};

export default Layout;
