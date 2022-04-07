import styles from './Title.module.css'

const variavelConstante = 'Title'

function Title (props) {
    return(
    <h1 className={styles.title}>
        {props.children}
    </h1>
    )
}

export default Title

