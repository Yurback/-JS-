"use sctict";

class Option{
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign
    }

    addElement(text) {
        let newDiv = document.createElement("div");
        newDiv.style.cssText = 'width:' + this.width + 'px; height:' + this.height + 'px; background:' + this.bg + '; font-size:' + this.fontSize + 'px; text-align:' + this.textAlign ;
        newDiv.innerHTML = text;
        document.body.prepend(newDiv);
    }
}

let item1 = new Option(200,300,"rgba(0,255,255,0.5)",20,"center");
item1.addElement("Вот и я добавил свой первый блок в BODY,<br><br><br>УРА!!!");