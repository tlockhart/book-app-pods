import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class BooksController extends Controller {

    //Access the data from the router with this.model
    @tracked sortProperty = 'pages';
    @tracked isReversed = false;
    @tracked selectedBookIds = [2, 4];
    @tracked hiddenBookIds = [1, 3];

    @action hideBook(book){this.hiddenBookIds.addObject(book.id);}
    @action showBook(book){this.hiddenBookIds.removeObject(book.id);}
    @action selectAll(){this.selectedBookIds = this.books.mapBy('id');}
    @action unselectAll(){this.selectedBookIds =[];}
    @action hideBooks(){ this.hiddenBookIds.addObjects(this.selectedBookIds);}
    @action showBooks(){this.hiddenBookIds.removeObjects(this.selectedBookIds);}

    get books(){
        return this.model;
      }
      
      // sort books changes the property we are sorting on
    @action sortBooks(selectedHeader) {
        if(this.sortProperty === selectedHeader) {
            this.isReversed = !this.isReversed;
        }
        else
            this.isReversed = false;
        this.sortProperty = selectedHeader;
    }
    @action toggleBookSelection(book) {
        if(this.selectedBookIds.includes(book.id)){
            this.selectedBookIds.removeObject(book.id);
        }
        else
            this.selectedBookIds.addObject(book.id);
    }

    get noBooksSelected() {return this.selectedBookIds.length === 0;}
    get allBooksSelected(){return this.selectedBookIds.length === this.books.length}
    
    get hiddenBooks(){
        return this.sortedBooks.filter((book) => {
            return this.hiddenBookIds.includes(book.id);
        });
    }
    get shownBooks(){
        return this.sortedBooks.filter((book) => {
            return !this.hiddenBookIds.includes(book.id);
        });
    }
    // sortedBooks called in the template to get the list of books in sorted order
    get sortedBooks() {
        let books = this.books.sortBy(this.sortProperty);
        console.log("BOOKS", JSON.stringify(books));
        if(this.isReversed) {
            return books.reverse();
        }
        else
            return books;
    }

    headerInfo = [
        {name: 'Title', sortBy: 'title'},
        {name: 'Author', sortBy: 'author'},
        {name: 'Publication Year', sortBy: 'publicationYear'},
        {name: 'Pages', sortBy: 'pages'}
    ];
}