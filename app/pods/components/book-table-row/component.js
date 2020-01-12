import Component from '@glimmer/component';

export default class BookTableRowComponent extends Component {
    get isSelected(){
        // console.log("book:", this.args.book , "selectedBook:",this.args.selectedBook);
        return this.args.selectedBookIds.includes(this.args.book.id);
    }

    get isStriped(){
        return this.args.index % 2 === 1;
    }
}
