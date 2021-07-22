import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Notificacoes" subtitulo="Página de notificações">
      <button onClick={alternarTema} >Alternar Tema</button>
    </Layout>
  )
}
