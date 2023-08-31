import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {/*para cada item devolve uma option*/}
                {props.itens.map((item) => {
                    // cada item da lista precisa de uma key
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa