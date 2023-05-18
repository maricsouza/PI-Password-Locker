import logo from "../../../public/img/Logo.svg"
import Image from 'next/image'

interface configImage{
  largura?: string;
}


export default function ImageWithLogo(props: configImage) {
  return (
        <div>
            <Image
              src={logo}
              style={{width: props.largura}}
              height={330}  
              alt="Logo do password locker"
            />
        </div>
  )
}

