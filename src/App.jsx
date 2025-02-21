import BodyContent from "./components/BodyContent/BodyContent";
import FooterContent from "./components/FooterContent/FooterContent";
import MenuLink from "./components/MenuLink/MenuLink";

function App() {
  return (
    <>
      <div>
        <MenuLink />
        <BodyContent />
        <FooterContent />
      </div>
    </>
  );
}

export default App;
