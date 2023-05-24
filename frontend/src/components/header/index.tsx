import { Arrow } from "@/components";
import style from "./style.module.scss";

interface HeaderProps {
  title: string;
  returnPage: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className={style.container}>
      <div className={style.secontainer}>
        <div className={style.centralized}>
          {" "}
          <Arrow returningPage={props.returnPage} />{" "}
        </div>
        <p className={style.title}> {props.title} </p>
      </div>
    </div>
  );
}
