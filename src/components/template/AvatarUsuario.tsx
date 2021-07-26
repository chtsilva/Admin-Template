import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
  className?: string;

}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil" >
      <img className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        src={usuario?.imagemUrl ?? '/images/avatar.svg'}
        alt="Avatar do usuário" />
    </Link>
  )
}