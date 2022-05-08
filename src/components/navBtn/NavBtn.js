import styles from '../../styles/components/NavBtn.module.scss'

const NavBtn = ({ handleClick, navActive }) => {
    
    /* 
     const [navActive, setNavActive] = useState(false);

     const handleClick = () => {
    setActive(!active);
    setNavActive(!active);
  };
    */

    return (
        
        <div className={` ${styles.navBtn} ${navActive ? styles.open : styles.navBtn} `} onClick={handleClick} >
                    <div className={styles.line}></div>
                </div>
           
     );
}
 
export default NavBtn;


/* 
<button className={`${styles.navBtn}`} onClick={handleClick} >
          <NavMobile  navActive={navActive} />
        </button>

*/