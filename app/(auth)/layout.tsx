import Footer from "./_components/Footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full pt-[120px]">
      <div className="h-[670px] "> {children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
