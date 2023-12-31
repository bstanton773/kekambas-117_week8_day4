import Click from "./Click";
import Component from "./Component";


class WidgetClick extends Click {
    constructor(
        widget: Component,
        private _callback: (e: Event, widget:Component)=>void
    ){
        super(widget)
    }

    public override setClick():void{
        const div = document.getElementById(this.widget.id);
        if (div !== null){
            console.log(div)
            div.addEventListener('click', (e:Event) => { 
                console.log('Hello')
                this._callback(e, this.widget) 
            })
        }
    }
}

export {
    WidgetClick
}
