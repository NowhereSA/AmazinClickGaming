import styles from "./Sidebar.module.css";
import { SlDiamond } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { GiAk47U, GiHamburgerMenu, GiLifeBar } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handleClick = (e, local) => {
    e.preventDefault();
    console.log(local);
    navigate(`/${local}`);
  };
  return (
    <>
      {/* Botão visível apenas no mobile via CSS */}
      <div className={styles.hamburguer} onClick={toggleMenu}>
        {isOpen ? <IoClose size={35} /> : <GiHamburgerMenu size={35} />}
      </div>

      {/* Container único da Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sideItens}>
          <div className={styles.sideIcon} onClick={(e) => handleClick(e, "")}>
            <p className={styles.icon}>Initial Page</p>
          </div>
          <div
            className={styles.sideIcon}
            onClick={(e) => handleClick(e, "store")}
          >
            <p className={styles.icon}>
              <SlDiamond color="white" size={28} /> Store
            </p>
          </div>
        </div>
      </div>

      {/* Overlay opcional para fechar o menu clicando fora */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default Sidebar;
