import logo from "../../../public/img/Logo.svg"
import Image from 'next/image'

export default function ImageWithLogo() {
  return (
        <div>
            <Image
              src={logo}
              width={330}
              height={330}  
              alt="Logo do password locker"
            />
        </div>
  )
}

