import Nav from '../../components/Nav/Nav';

const Main = ({ children }) => {
   return (
      <>
         <Nav />
         <main>{children}</main>
      </>
   );
};

export default Main;
