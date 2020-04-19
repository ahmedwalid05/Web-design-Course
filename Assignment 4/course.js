class Course {
    constructor(name, creditHours, CRN, instructor, textbook) {
        this._name = name;
        this._creditHours = creditHours;
        this._CRN = CRN;
        this._instructor = instructor;
        this._textbook = textbook;
    }
    set name(value) {
        this._name = value;
    }
    set creditHours(value) {
        this._creditHours = (value >=0 && value <=4)?value:0;
    }
    set CRN(value) {
        this._CRN = CRN;
    }
    set instructor(value) {
        this._instructor = value;
    }
    set textbook(value) {
        this._textbook = value;
    }

    get name() {
        return this._name;
    }
    get creditHours() {
        return this._creditHours;
    }
    get CRN() {
        return this._CRN;
    }
    get instructor() {
        return this._instructor;
    }
    get textbook() {
        return this._textbook;
    }
    toString(){
        return "Course Name: "+ this._name+" "+this._creditHours+" Credit Hours, CRN: "+this._CRN+
        "\nInstructor: "+this._instructor.name+" "+this._instructor.email+
        ".\nText Book: "+this._textbook.name+", ISBN: "+this._textbook.ISBN+"."
    }

}
module.exports= Course