import store  from './../redux-simple';
import { CHANGE_TITLE } from "./../ducks/sources";

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
        store.dispatch( {
            type: CHANGE_TITLE
        });
    }

    render(){
        this.newsSourceTitle.innerHTML = store.getState().sources.currentTitle;
    }
};
