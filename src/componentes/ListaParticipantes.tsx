import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const ListaParticipantes = () => {
    const participantes: string[] = useListaDeParticipantes();

    return (
        <ul style={{textAlign: 'center'}}>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaParticipantes