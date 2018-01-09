import store  from './../redux-simple';
import { storeManager } from "./../redux-simple/command";
import ProvideStoreDecorator from "../decorators/ProvideStoreDecorator";

@ProvideStoreDecorator()
export default class SourcesTitle{
    /**
     * @param instanceArgs {object} - args to create instance
     */
    constructor(instanceArgs){
        this.instanceArgs = instanceArgs;
        const { node, store } = instanceArgs;
        this.newsSourceTitle = node;
        this.store = store;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        this.store.subscribe(this.render.bind(this));
        this.store.dispatch( storeManager.execute('CHANGE_TITLE_COMMAND') );
    }

    /**
     * Renders source title
     */
    render(){
        this.newsSourceTitle.innerHTML = this.store.getState().sources.currentTitle;
    }

    /**
     * This method is created only to implement the Prototype Design Pattern
     * @returns {SourcesTitle} - instance of class SourcesTitle
     */
    clone() {
        return new SourcesTitle(this.instanceArgs);
    }
};
