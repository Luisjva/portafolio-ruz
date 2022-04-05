import { createContext, useState } from "react";
import ModalImg from "../component/general/modal-img";
import Nav from "../component/general/nav";
import "../styles/globals.css";

export const ModalImgContext = createContext();

function MyApp({ Component, pageProps }) {
  const [modalImgOpen, setModalImgOpen] = useState(false);
  const [modalImgDates, setModalImgDates] = useState({
    img: {},
    position: { width: 0, height: 0 },
  });

  return (
    <ModalImgContext.Provider
      value={{ modalImgOpen, setModalImgOpen, modalImgDates, setModalImgDates }}
    >
      <ModalImg />
      <Nav />
      <Component {...pageProps} />
    </ModalImgContext.Provider>
  );
}

export default MyApp;
