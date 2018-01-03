import store  from './../redux-simple';
import { FETCH_ALL } from "./../ducks/news";
import { CHANGE_TITLE } from "./../ducks/sources";

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

            store.dispatch( {
                type: CHANGE_TITLE,
                payload: {
                    currentTitle: source
                }
            });

            store.dispatch( {
                type: FETCH_ALL,
                callAPI: true,
                payload: source
            });
        }
    };
};
