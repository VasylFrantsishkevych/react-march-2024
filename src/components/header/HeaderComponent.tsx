import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
  return (
    <div className={styles.nav_menu}>
      <ul>
      <li><NavLink to={'/'}>Login</NavLink></li>
      <li><NavLink to={'/registration'}>Registration</NavLink></li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
