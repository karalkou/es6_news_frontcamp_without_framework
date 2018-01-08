import store  from './../redux-simple';
import { storeManager } from "./../redux-simple/command";

export default (Component) => class DispatchSubscribeDecorator extends Component{
    constructor(node){
        super(node);
        this.dispatch = store.dispatch;
    }


}