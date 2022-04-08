import styles from './Title.module.css'

const variavelConstante = 'Title'

function Title ({children}) {
    return(
    <h1 className={styles.title}>
        {children}
    </h1>
    )
}


export default Title

