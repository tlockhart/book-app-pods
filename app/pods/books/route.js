import Route from '@ember/routing/route';
import {books} from '../../utils/book-data';

export default class BooksRoute extends Route {
    
    model(params){
        return books;

        // return books.filterBy('id', parseInt(params.id));
    }
}