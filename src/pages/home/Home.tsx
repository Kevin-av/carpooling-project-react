import { useState } from 'react';
import { Link } from "react-router-dom";
import ROUTES from "../../consts/routes";
import styles from './Home.module.css';

const Home = () => {
  const [backgroundVisible, setBackgroundVisible] = useState(true);

  const handleButtonClick = () => {
    setBackgroundVisible(false);
  };
  
  return (
    <div className={`${styles.container} ${backgroundVisible ? '' : styles.hideBackground}`}>
      <Link to={ROUTES.AUTH.LOGIN} className={styles.link} onClick={handleButtonClick}>Iniciar Sesión</Link>
      <Link to={ROUTES.AUTH.SIGNUP} className={styles.link} onClick={handleButtonClick}>Registrarse</Link>
    </div>
  );
};

export default Home;