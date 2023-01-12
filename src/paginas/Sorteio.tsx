import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

export const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form action="">
        <select name="participanteDaVez" id="participanteDaVez">
          {participantes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </form>
    </section>
  );
};
