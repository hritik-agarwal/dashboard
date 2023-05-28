import styles from './Textinput.module.css'

function TextInput(props) {
  const { type, name, value, onChange, onBlur, placeholder = '' } = props
  return (
    <div className={styles.textInputContainer}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        className={styles.textInput}
      />
      {props.error && (
        <p className={styles.errorMessage}>{props.errorMessage}</p>
      )}
    </div>
  )
}
export default TextInput
