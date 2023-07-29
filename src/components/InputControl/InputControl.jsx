import styles from "./InputControl.module.css"

const InputControl = (props) => {
    const {label} = props
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props}></input>
        </div>
    );
};

export default InputControl;