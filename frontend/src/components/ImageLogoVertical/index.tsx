import logo from "../../../public/img/logoVertical.svg";
import Image from "next/image";

interface configImage {
  largura?: string;
}

export function ImageLogoVertical(props: configImage) {
  return (
    <div>
      <Image
        src={logo}
        style={{ width: props.largura }}
        height={80}
        alt="Logo password locker"
      />
    </div>
  );
}
