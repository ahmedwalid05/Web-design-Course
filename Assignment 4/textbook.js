class Textbook {
    constructor(name, authorName, price, pages, availableCopies, publisher, edition, ISBN) {
        this._name= name;
        this._authorName= authorName;
        this._price=(price);
        this._pages=(pages);
        this._availableCopies=(availableCopies);
        this._publisher=publisher;
        this._edition= (edition);
        this._ISBN= ISBN
    }
    set name(name) {
        this._name = name;
    }
    set  authorName(authorName) {
        this._authorName = authorName;
    }
    set price(price) {
        console.log(t)
        this._price = (price < 1) ? 0 : price;
    }
    set pages(pages) {
        this._pages = (pages < 0) ? 0 : pages;
    }
    set availableCopies(availableCopies) {
        this._availableCopies = (availableCopies < 0) ? 0 : availableCopies;
    }
    set publisher(publisher) {
        this._publisher = publisher;
    }
    set edition(edition) {
        
        this._edition = (edition < 1) ? 0 : edition;
    }
    set ISBN(ISBN) {
        this._ISBN = ISBN;
    }
    get name(){
        return this._name;
    }
    get authorName() {
        return this._authorName;
    }
    get price() {
        return this._price;
    }
    get pages() {
        return this._pages ;
    }
    get availableCopies() {
        return this._availableCopies ;
    }
    get publisher() {
        return this._publisher ;
    }
    get edition() {
        
        return this._edition ;
    }
    get ISBN() {
        return this._ISBN ;
    }
    
    isAvailable(){
        return (this._availableCopies>0)? true: false
    }
    isSameAuthor(other){

        return (this._authorName.localeCompare(other.authorName)==0)?true:false;
    }
    
    toString(){
        var edition;
        switch(this.edition){
            case 1:
                edition ="st"
            case 2:
                edition ="nd"
            case 3:
                edition ="rd"
            case 4:
                edition ="th"
        }
        return this.name+".\nBy "+this.authorName+", ISBN: "+this.ISBN+". "+this.edition+edition+"Edition\nPrice $"+this.price
    }



}
module.exports= Textbook