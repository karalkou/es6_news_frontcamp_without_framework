import store  from './../redux-simple';
import { storeManager } from "./../redux-simple/command"

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

            store.dispatch( storeManager.execute('CHANGE_TITLE_COMMAND', source) );
            store.dispatch( storeManager.execute('FETCH_ALL_COMMAND', source) );
        }
    };
};
