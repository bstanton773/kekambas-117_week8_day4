import { Clickable } from "./types";
import Component from "./Component";


export default abstract class Click implements Clickable {
    constructor(private _widget:Component){
        this._widget.click = this
    }

    public get widget():Component{
        return this._widget
    }

    public setClick(): void {
        throw new Error('Method not implemented')
    }
}
