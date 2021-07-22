import Link from 'next/link';

interface MenuitemProps {
  texto: string
  icone: any
  url?: string
  className?: string
  onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuitemProps) {
  function renderizarLink() {
    return (
      <a className={`
          flex flex-col justify-center items-center
          h-20 w-20 
          dark:text-gray-300
          ${props.className}
        `}>
        {props.icone}
        <span className={`
            text-xs font-light 
          `}>
          {props.texto}
        </span>
      </a>
    )
  }

  return (
    <li onClick={props.onClick} className={`
    hover:bg-gray-100 dark:hover:bg-gray-800
      cursor-pointer
    `}>
      {props.url ? (
        <Link href={props.url}>
          {renderizarLink()}
        </Link>
      ) : (
        renderizarLink()
      )}


    </li>
  )
}