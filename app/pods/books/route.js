import Route from '@ember/routing/route';
import {books} from '../../utils/book-data';

export default class BooksRoute extends Route {
    
    model(params){
        // var books = books;
        
        // return books.filterBy('id', 2);
        return books.filterBy('id', parseInt(params.id));
    }
}