import styles from './SubmitButton.module.css'

function Submit({text}){

    return(
        <div> 
            <buttoon className={styles.btn}>{text} </buttoon>
        </div>
    )
}

export default Submit