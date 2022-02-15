import Image from "next/image";
import { useState } from "react";

import { colors, contact } from "../../utils";

export default function Nav() {
  const [contactVisible, setContactVisible] = useState(false);

  const clickContact = () => {
    contactVisible ? setContactVisible(false) : setContactVisible(true);
  };

  return (
    <nav>
      <div>
        <div>Logo</div>
        <div className="nav__right">
          <div className="nav__right__img">
            <Image
              src="/perfil.jpg"
              alt="Foto de perfil"
              width={45}
              height={45}
            />
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

        .nav__right {
          align-items: center;
          display: flex;
          justify-content: flex-end;
        }

        .nav__right__img {
          border-radius: 50px;
          height: 45px;
          overflow: hidden;
          transition: 0.3s;
          width: 45px;
        }

        .nav__right__img:hover {
          transform: scale(1.05);
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
          height: 40px;
          justify-content: center;
          margin-left: 0.75rem;
          transform: rotate(-25deg);
          transition: 0.3s;
          width: 40px;
        }

        .nav__right__contact__btn:hover {
          transform: scale(1.05) rotate(-30deg);
        }

        .nav__right__contact__btn--open {
          transform: scale(1.15) rotate(-40deg);
        }

        .nav__right__contact__btn--open:hover {
          transform: scale(1.05) rotate(-30deg);
        }

        .nav__right__contact__link {
          align-items: center;
          background-color: ${colors.yellow};
          border-radius: 100px;
          display: flex;
          height: 35px;
          justify-content: center;
          position: absolute;
          right: 5px;
          top: -3.5rem;
          width: 35px;
        }

        .nav__right__contact__link:hover {
          transform: scale(1.1);
        }

        .nav__right__contact__link__1 {
          top: 3.5rem;
        }

        .nav__right__contact__link__2 {
          top: 6.5rem;
        }

        .nav__right__contact__link__3 {
          top: 9.5rem;
        }
      `}</style>
    </nav>
  );
}
