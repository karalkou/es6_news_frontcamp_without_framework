import './styles/initial-styles.less';
import { createStore } from './utils/simple-redux-store';

document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('.show-news-container__btn');
    let content = document.querySelector('.show-news-container__content');

    button.onclick = e => import(/* webpackChunkName: "logicInit" */ './logicInit')
        .then(module => {
            var logicInit = module.default;

            logicInit();
            button.classList.add('show-news-container__btn_hidden');
            content.classList.add('show-news-container__content_visible');
        })
        .catch((e) => {
            console.error('error: ', e)
        });

    /*-------- redux counter ----------*/

    let counterContainer = document.querySelector('#counter-container');

    const counter = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    const store = createStore(counter);

    const render = () => {
        counterContainer.innerText = store.getState();
    };

    store.subscribe(render);
    render();

    document.addEventListener('click', () => {
        store.dispatch({ type : 'INCREMENT' })
    });

    /*-------- \redux counter ----------*/


    /* area of 'babel-remove-console-log-expression' action */
    /*console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');*/
    /* \area of 'babel-remove-console-log-expression' action */

});
