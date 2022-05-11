import styles from '../../styles/components/Grid.module.scss';

export default function Grid(props) {
  return <div className={styles.grid}>{props.children}</div>;
}
