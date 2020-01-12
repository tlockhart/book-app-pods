import Route from '@ember/routing/route';

export default class BooksBookRoute extends Route {
    model(params){
        // debugger;
        return this.modelFor('books').findBy('id', parseInt(params.id));
    }
}
