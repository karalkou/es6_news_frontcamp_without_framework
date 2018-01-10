import store  from './../redux-simple';
import { storeManager } from "./../redux-simple/command";

export default () => {
    return (Component) => class ProvideStoreDecorator extends Component{
        constructor(node){
            super(node, store);
        }

    }
}
