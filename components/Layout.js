import styles from '/styles/Home.module.css';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
);

export default Layout;
