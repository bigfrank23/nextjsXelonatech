import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%" />
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Solutions</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          {/* <Image src="/img/logo.png" alt="" width="160px" height="69px" /> */}
          <li className={styles.listItem}>Solutions</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Who we are</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Get in touch</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          {/* <Image src="/img/cart.png" alt="" width="30px" height="30px" /> */}
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;