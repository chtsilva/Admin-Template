import Imagem from 'next/image'
import router from 'next/router'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForcarAutenticacao(props) {

  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
        {props.children}
      </>
    )
  }
  function renderizarCarregando() {
    return (
      <div className={`
        flex justify-center items-center h-screen 
      `}>

        <Imagem src={loading} />
      </div>
    )
  }
  console.log(carregando, usuario?.email)
  if (!carregando && usuario?.email) {
    return (
      renderizarConteudo()
    )
  } else if (carregando) {
    return (
      renderizarCarregando()
    )

  } else {
    router.push('/autenticacao')
    return null
  }
}