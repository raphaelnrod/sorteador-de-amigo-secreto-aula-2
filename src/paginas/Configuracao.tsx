import Cabecalho from "../componentes/Cabecalho";
import Card from "../componentes/Card";
import Formulario from "../componentes/Formulario";
import ListaParticipantes from "../componentes/ListaParticipantes";
import { Rodape } from "../componentes/Rodape";

export const Configuracao = () => {
  return (
    <Card>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </Card>
  );
};
