'use strict';
import './styles/initial-styles.less';
import store  from './redux-simple';
import { INCREMENT } from './ducks/counter';

import logicInit from './logicInit';

document.addEventListener('DOMContentLoaded', () => {

    // let button = document.querySelector('.show-news-container__btn');
    // let content = document.querySelector('.show-news-container__content');
    //
    // button.onclick = e => import(/* webpackChunkName: "logicInit" */ './logicInit')
    //     .then(module => {
    //         var logicInit = module.default;
    //
    //         logicInit();
    //         button.classList.add('show-news-container__btn_hidden');
    //         content.classList.add('show-news-container__content_visible');
    //     })
    //     .catch((e) => {
    //         console.error('error: ', e)
    //     });

    /*-------******************************--------*/
    logicInit();
    /*-------******************************--------*/

    /* area of 'babel-remove-console-log-expression' action */
    /*console.log('1');
     console.log('2');
     console.log('3');
     console.log('4');
     console.log('5');*/
    /* \area of 'babel-remove-console-log-expression' action */



    /*-------- redux counter ----------*/

    /*let counterContainer = document.querySelector('#counter-container');

    const render = () => {
        counterContainer.innerText = store.getState().counter;
    };

    store.subscribe(render);
    render();

    document.addEventListener('click', () => {
        store.dispatch({ type : INCREMENT })
    });*/

    /*-------- \redux counter ----------*/

});
