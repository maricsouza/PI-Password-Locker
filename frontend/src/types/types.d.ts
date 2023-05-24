interface ContentButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sizefont?: string;
    fontcolor?: string;
    backgcolor?:string;
    size: string;
}

interface ButtonImage extends ContentButton {
    typeofbutton: 'imageButton'
    imagepath: string;
}

interface ButtonText extends ContentButton {
    typeofbutton: 'textButton'
    text: string;
}


type ButtonType = ButtonImage | ButtonText;