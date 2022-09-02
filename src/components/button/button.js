import  './button.css'

function Button({label}){
    return <div data-testid='button' className="button-style">hakuna matata{label}</div>
}

export default Button;