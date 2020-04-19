class Instructor {

    constructor(name, ID, email) {
        this._name = name;
        this._ID = ID;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    get ID() {
        return this._ID;
    }
    get email(){
        return this._email;
    }
    set name(value){
        this._name = value;
    }
    set ID (value){
        this._ID = value;
    }
    set email(value){
        this._email = value;
    }
    toString(){
        return "Instructor: "+this._name+", "+this._email+". ID#"+this._ID;
    }


}

module.exports= Instructor