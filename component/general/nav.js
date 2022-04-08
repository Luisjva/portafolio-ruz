import Image from "next/image";
import { useState } from "react";

import { colors, contact } from "../../utils";

export default function Nav() {
  const [contactVisible, setContactVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const clickContact = () => {
    contactVisible ? setContactVisible(false) : setContactVisible(true);
  };

  const clickPerfil = () => {
    infoVisible ? setInfoVisible(false) : setInfoVisible(true);
  };

  return (
    <nav>
      <div>
        <div className="nav__left">
          <Image
            src="/firma.png"
            alt="Foto de perfil"
            width={65}
            height={(618 * 65) / 854}
            priority={true}
          />
        </div>
        <div className="nav__right">
          <div className="perfil">
            <div className="nav__right__img" onClick={() => clickPerfil()}>
              <Image
                src="/perfil.jpg"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority={true}
              />
            </div>
            <div
              className={
                infoVisible
                  ? "nav__right__img__info nav__right__img__info--open"
                  : "nav__right__img__info"
              }
            >
              <div className="img">
                <Image
                  src="/perfil.jpg"
                  alt="Foto de perfil"
                  width={150}
                  height={150}
                  priority={true}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu tempus velit. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Donec eleifend, elit
                in pharetra ultrices, eros metus rhoncus mauris, quis maximus
                nibh neque et urna.
              </p>
            </div>
          </div>
          <div className="nav__right__contact">
            <button
              className={
                contactVisible
                  ? "nav__right__contact__btn nav__right__contact__btn--open"
                  : "nav__right__contact__btn"
              }
              onClick={() => clickContact()}
            >
              <Image src="/contact.png" alt="Send" width="24" height="24" />{" "}
            </button>
            {contact.map((cont, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  style={{ transition: 0.3 * (index + 1) + "s" }}
                  className={
                    contactVisible
                      ? `nav__right__contact__link nav__right__contact__link__${
                          index + 1
                        }`
                      : "nav__right__contact__link"
                  }
                >
                  <Image src="/contact.png" alt="Send" width="20" height="20" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        nav {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        nav > div {
          background: ${colors.primary};
          color: #fff;
          display: grid;
          grid-template-columns: 1fr 2fr;
          padding: 0.25rem 1rem;
          width: 100%;
        }

        .nav__left {
          align-items: center;
          display: flex;
        }

        .nav__right {
          align-items: center;
          display: flex;
          justify-content: flex-end;
        }

        .nav__right > .perfil {
          transition: 0.3s;
          position: relative;
          z-index: 100;
        }

        .nav__right__img {
          border-radius: 50px;
          height: 50px;
          width: 50px;
          overflow: hidden;
        }

        .nav__right__img__info {
          background: ${colors.primary};
          border-radius: 0 0 15px 15px;
          position: absolute;
          right: 0;
          transition: 0.3s;
          height: 0;
          top: 54px;
          overflow: hidden;
        }

        .nav__right__img__info--open {
          height: 425px;
          overflow-y: auto;
          max-height: 75vh;
        }

        .nav__right__img__info .img {
          border-radius: 150px;
          height: 100px;
          overflow: hidden;
          width: 100px;
          margin: 1rem 3rem;
        }

        .nav__right__img__info > p {
          padding: 0 1rem;
          text-align: center;
        }

        .nav__right__contact {
          position: relative;
        }

        .nav__right__contact__btn {
          align-items: center;
          background-color: ${colors.yellow};
          border: none;
          border-radius: 100px;
          display: flex;
          height: 50px;
          outline: none;
          justify-content: center;
          margin-left: 0.75rem;
          transform: rotate(-25deg);
          transition: 0.3s;
          width: 50px;
        }

        .nav__right__contact__btn:hover {
          transform: rotate(-35deg);
        }

        .nav__right__contact__btn--open {
          transform: rotate(-45deg);
        }

        .nav__right__contact__btn--open:hover {
          transform: rotate(-35deg);
        }

        .nav__right__contact__link {
          align-items: center;
          background-color: ${colors.yellow};
          border-radius: 100px;
          display: flex;
          height: 35px;
          justify-content: center;
          position: absolute;
          right: 8px;
          top: -3.5rem;
          width: 35px;
          z-index: 50;
        }

        .nav__right__contact__link:hover {
          transform: scale(1.1);
        }

        .nav__right__contact__link__1 {
          top: 3.8rem;
        }

        .nav__right__contact__link__2 {
          top: 6.8rem;
        }

        .nav__right__contact__link__3 {
          top: 9.8rem;
        }

        @media screen and (min-width: 500px) {
          .nav__right__img__info--open {
            height: 375px;
          }

          .nav__right__img__info .img {
            border-radius: 150px;
            height: 150px;
            overflow: hidden;
            width: 150px;
            margin: 1rem 5rem;
          }
        }
      `}</style>
    </nav>
  );
}
