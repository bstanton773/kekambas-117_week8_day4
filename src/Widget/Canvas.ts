import Component from "./Component";

export default class Canvas{
    private _widgets: Component[] = [];

    constructor(
        private parent:HTMLElement
    ){
        this.parent.innerHTML = '';
        this.parent.id = "canvas";
        const newStyle: Partial<CSSStyleDeclaration> = {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(12, 1fr)",
            height: "100vh",
            columnGap: "5px",
            rowGap: "5px",
            aspectRatio: "1 / 1"
        };
        Object.assign(this.parent.style, newStyle);
    }

    public get widgets():Component[]{
        return this._widgets
    }

    public addWidget(widget: Component){
        this.widgets.push(widget);
        widget.canvas = this;
        this.render()
    }

    private render():void{
        this.parent.innerHTML = '';
        for (const widget of this.widgets){
            this.buildWidget(widget);
        }
    }

    private buildWidget(widget:Component):void{
        const div = this.initializeDiv(widget);
        this.buildContainer(widget, div);
        this.placeContainer(widget, div);
        this.parent.append(div)
    }

    private initializeDiv(widget:Component):HTMLDivElement{
        const div = document.createElement('div');
        div.id = widget.id;
        const newStyle: Partial<CSSStyleDeclaration> = {
            margin: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: "3%",
            aspectRatio: "1 / 1"
        };
        Object.assign(div.style, newStyle);
        return div;
    }

    private buildContainer(widget: Component, div:HTMLDivElement):void{
        Object.assign(div.style, widget.shape.attributes)
    }

    private placeContainer(widget: Component, div: HTMLDivElement):void{
        const newStyle: Partial<CSSStyleDeclaration> = {
            gridColumnStart: widget.locationLeft.toString(),
            gridColumnEnd: "span " + widget.width,
            gridRowStart: widget.locationTop.toString(),
            gridRowEnd: "span " + widget.height
        }
        Object.assign(div.style, newStyle)
    }
}
