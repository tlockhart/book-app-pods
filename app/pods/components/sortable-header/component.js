import Component from '@glimmer/component';

export default class SortableHeaderComponent extends Component {
    // columnName = "Title"
    get isSelected() {
        // console.log("SortBy:", this.args.sortBy, ", SortedBy:", this.args.sortedBy, ", ColumnName: ",this.args.columnName);

        return this.args.sortBy === this.args.sortedBy;
    }
}
