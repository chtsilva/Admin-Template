import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";
import AvatarUsuario from "./AvatarUsuario";
import BotaoAlternarTema from "./BotaoAlternarTema";
// import MenuLateral from "./MenuLateral";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo: string
  subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useAppData()
  const {usuario} = useAuth()

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
        <AvatarUsuario className="ml-3" />
        {usuario.email}
      </div>
    </div>
  )
}