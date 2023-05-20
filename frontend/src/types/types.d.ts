interface ContentButton {
    fontsize?: string;
    fontcolor: string;
    backgcolor:string;
    size: string;
    onclick: () => void;
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