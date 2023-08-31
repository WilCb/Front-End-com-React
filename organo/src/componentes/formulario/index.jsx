import './formulario.css'
import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Btn from '../btn'

const Formulario = () => {
    const time = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('oi')
    }
    return (
        <section className='formulario'>
            {/* onSubmit previne o recarregamento da página*/}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder='Digite o seu nome' />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder='Digite o seu cargo' />
                <CampoTexto label="Imagem" placeholder='Digite o endereço da imagem' />
                <ListaSuspensa label='Times' itens={time} />
                <Btn>
                    Criar Card
                </Btn>
            </form>
            
        </section>
    )
}

export default Formulario