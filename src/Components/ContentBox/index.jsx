import  styles from './styles.module.css'

function ContentBox({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default ContentBox