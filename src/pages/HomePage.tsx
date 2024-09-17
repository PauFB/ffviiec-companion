import styles from './HomePage.module.css';

export function Home() {
  return (
    <>
      <div className={styles['background']} />
      <div className={styles['page']}>
        <div className={styles['container']}>
          <img className={styles['ffviiec-logo']} src={new URL('../assets/ffviiec-logo.png', import.meta.url).href} />
          <div className={styles['description']}>
            This site is not affiliated with or endorsed by SQUARE ENIX or Applibot, Inc.
            <br />
            All rights to the assets and content used belong to their respective owners.
            <br />
            © SQUARE ENIX Powered by Applibot, Inc.
          </div>
        </div>
      </div>
    </>
  );
}
