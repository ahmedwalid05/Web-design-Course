class Country {


    constructor(country, region, code, pop, cities) {
        this.country = country;
        this.region = region;
        this.code = code;
        this.pop = pop;
        this.cities = cities;
    }

    get countryName() {
        return this.country;
    }
    get countryRegion() {
        return this.region;
    }
    get countryCode() {
        return this.code;
    }
    get countryPop() {
        return this.pop;
    }

    set countryName(value){
        this.country=value;
    }
    set countryRegion(value){
        this.region= value;
    }
    set countryCode(value){
        this.code=value;
    }
    set countryPop(value){
        this.pop=pop;
    }
    set countryCities(cities){
        this._cities=value;
    }
    updatePopulation(newPop){
        if(newPop>this._pop){
            this._pop=newPop;
        }
    }
    addCity(cityName){
        if(!this._cities.includes(cityName)){
            this._cities.push(cityName);
        }else{
            throw "City already exists!";
        }
    }
    removeCity(cityName){
        if(this._cities.include(cityName)){
            this._cities=this._cities.filter((x) => (x!=cityName));
        }else{
            throw "Not In Array";
        }
    }

}
module.exports= Country