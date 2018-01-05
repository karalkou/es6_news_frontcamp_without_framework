import store  from './../redux-simple';
import { CHANGE_TITLE } from "./../ducks/sources";
import { storeManager } from "./../redux-simple/command"

export default class SourcesTitle{
    /**
     * @param node {object} - DOM node to apply class
     */
    constructor(node){
        this.newsSourceTitle = node;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        store.subscribe(this.render.bind(this));
        store.dispatch( storeManager.execute('CHANGE_TITLE_COMMAND') );
    }

    /**
     * Renders source title
     */
    render(){
        this.newsSourceTitle.innerHTML = store.getState().sources.currentTitle;
    }

    /**
     * This method is created only to implement the Prototype Design Pattern
     * @returns {SourcesTitle} - instance of class SourcesTitle
     */
    clone() {
        return new SourcesTitle(this.newsSourceTitle);
    }
};
