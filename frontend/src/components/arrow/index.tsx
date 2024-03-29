import Image from "next/image";
import Link from "next/link";
import style from "../arrow/style.module.scss";
import arrow from "../../../public/img/arrow.svg";

interface ArrowProps {
  returningPage?: string;
}

export function Arrow(props: ArrowProps) {
  return (
    <div className={style.arrow}>
      <Link href={props.returningPage ?? '/dashboard'}>
        <Image src={arrow} alt="Voltar" width={30} height={0} />
      </Link>
    </div>
  );
}
