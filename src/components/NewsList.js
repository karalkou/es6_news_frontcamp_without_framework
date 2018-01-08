import {customImageUrl, dateOptions} from './../config';
import store  from './../redux-simple';
import { storeManager } from "./../redux-simple/command";
import dispatchSubscribeDecorator from "./../decorators/dispatchSubscribeDecorator";

/*-------------------------------------------------------------------------------------------------------------------*/
function mixin (behaviour, sharedBehaviour = {}) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    const sharedKeys = Reflect.ownKeys(sharedBehaviour);
    const typeTag = Symbol('isa');

    function _mixin (clazz) {
        for (let property of instanceKeys)
            Object.defineProperty(clazz.prototype, property, {
                value: behaviour[property],
                writable: true
            });
        Object.defineProperty(clazz.prototype, typeTag, { value: true });
        return clazz;
    }
    for (let property of sharedKeys)
        Object.defineProperty(_mixin, property, {
            value: sharedBehaviour[property],
            enumerable: sharedBehaviour.propertyIsEnumerable(property)
        });
    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: (i) => !!i[typeTag]
    });
    return _mixin;
}


function superhero(target) {
    target.isSuperhero = true;
    target.power = 'flight';
    console.log('target from decorator: ', target)
}
/*-------------------------------------------------------------------------------------------------------------------*/
@superhero
export default class NewsList{
    /**
     * @param node {object} - DOM node to apply class
     */
    constructor(node){
        this.newsContainer = node;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        store.subscribe(this.render.bind(this));

        //TODO: create 'connect' to make dispatching more comfortable
        store.dispatch( storeManager.execute('FETCH_ALL_COMMAND') );
    }

    /**
     * Renders result to DOM
     */
    render() {
        const data = store.getState().news;

        if (data && data.articles.length > 0) {
            this.newsContainer.innerHTML = this.parseData(data);
        }

    };

    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
    parseData(data) {
        return data.articles.reduce( (prevString, item) => {
            const { urlToImage, publishedAt, author, title, description, url } = item;
            const formattedPublishedAt = new Date(publishedAt).toLocaleString("en", dateOptions);

            return `${prevString}
                <div class="news-list-item">
                    <div class="news-list-item__img" style="background-image: url(${urlToImage || customImageUrl})"></div>
                    <div class="news-list-item__wrapper">
                        <div class="news-list-item__header">
                            <div class="news-list-item__date">
                                ${formattedPublishedAt}
                            </div>
                        </div>
                        <div class="news-list-item__data">
                            <div class="news-list-item__content">
                                <span class="news-list-item__author">${author}</span>
                                <h1 class="news-list-item__title"><a href="#">${title}</a></h1>
                                <p class="news-list-item__description">${description}</p>
                                <a href="${url}" class="news-list-item__button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
              `;
        }, '');
    }

    /**
     * This method is created only to implement the Prototype Design Pattern
     * @returns {NewsList} - instance of class NewsList
     */
    clone() {
        return new NewsList(this.newsContainer);
    }
}

// export default dispatchSubscribeDecorator(NewsList)