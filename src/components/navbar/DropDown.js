
// styles
import styles from '../../styles/components/DropDown.module.scss';

function DropDown(props) {
  return (
    <>
      <ul className={styles.dropdown_menu}>{props.children}</ul>
    </>
  );
}

export default DropDown;
