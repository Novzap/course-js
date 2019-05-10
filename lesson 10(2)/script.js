class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    create() {
        let div = document.createElement('div');
        div.textContent = 'Контейнер';
        div.style.cssText = `height:${this.height}px;width:${this.width}px;background: #${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign}`;
        document.body.appendChild(div);
    }
}
let div = new Options('500', '500', 'eee', '20', 'center');
div.create();