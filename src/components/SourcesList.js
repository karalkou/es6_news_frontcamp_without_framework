import { storeManager } from "./../redux-simple/command";
import ProvideStoreDecorator from "../decorators/ProvideStoreDecorator";

@ProvideStoreDecorator()
export default class SourcesList{
    /**
     * @param instanceArgs {object} - args to create instance
     */
    constructor(instanceArgs){
        this.instanceArgs = instanceArgs;
        const { node, store } = instanceArgs;
        this.newsSourceControls = node;
        this.store = store;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        this.newsSourceControls.addEventListener('click', this.clickHandler);
    }

    /**
     * This method is created only to implement the Prototype Design Pattern
     * @returns {SourcesList} - instance of class SourceList
     */
    clone() {
        return new SourcesList(this.instanceArgs);
    }

    /**
     * Handles click
     * @param e {Object} - event object
     */
    clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            let source = target.getAttribute('data-source');

            this.store.dispatch( storeManager.execute('CHANGE_TITLE_COMMAND', source) );
            this.store.dispatch( storeManager.execute('FETCH_ALL_COMMAND', source) );
        }
    };
};
