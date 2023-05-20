
interface ContentButton {
    fontSize?: string;
    fontColor: string;
    backgColor:string;
    size: string;
    onClick: () => void;
}

interface ButtonImage extends ContentButton {
    typeOfButton: 'imageButton'
    imagePath: string;
}

interface ButtonText extends ContentButton {
    typeOfButton: 'textButton'
    text: string;
}


type ButtonType = ButtonImage | ButtonText;