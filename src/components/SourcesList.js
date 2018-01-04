import store  from './../redux-simple';
import { fetchAll } from "./../ducks/news";
import { changeTitle } from "./../ducks/sources";

export default class SourcesList{
    /**
     * @param node {object} - DOM node to apply class
     */
    constructor(node){
        this.newsSourceControls = node;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        this.newsSourceControls.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            let source = target.getAttribute('data-source');

            store.dispatch( changeTitle(source) );
            store.dispatch( fetchAll(source) );
        }
    };
};
