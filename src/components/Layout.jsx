import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";
import ParticlesContainer from "./ParticlesContainer";

const Layout = ({children}) => {
  return (
    <div className="relative overflow-auto text-white bg-no-repeat bg-cover page bg-site font-sora">
      <ParticlesContainer />
      {/* <TopLeftImg /> */}
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;