import './btn.css'

const Btn = (props) => {
    return (
        <button className="btn">
            {props.children}
        </button>
    )
}

export default Btn