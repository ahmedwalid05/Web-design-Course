var assert = require('assert');
var CountryRepository = require('./CountryRepository');
const Country = require('./Country.js');

async function main() {
    try {

        let cRep = new CountryRepository();
        console.log(`getAllCountries: ${await cRep.getAllCountries()}`);
        let c = await cRep.getCountry('AL');
        c.toString = function () {
            return `getCountry:  ${this.country} ${this.code} ${this.region}`;
        }
        console.log(c.toString());

        
        
        try {
            await cRep.deleteCountry('AF');
            c = await cRep.getCountry('AF');    
        } catch (error) {
            console.log(error)    ;
        }
        
        
        let country = new Country('Afghanistan', 'Southern and Central Asia', 'PPP', 35530081, ["Zorkot", "Wulêswālī Bihsūd", "Kuhsān"]);
        await cRep.addCountry(country);

        c = await cRep.getCountry('PPP');

        console.log(c.toString());
        
        await cRep.updatePopulation('AL', 5000);
        let p =await cRep.getCountriesByRegion('Northern Africa');
      
        console.log(`getCountriesByRegion: ${p}`);
        
        console.log(`getSumAllPopulation: ${await cRep.getSumAllPopulation()}`);
        console.log(`getSumPopulationByRegion: ${await cRep.getSumPopulationByRegion('Northern Africa')}`);

        console.log(`getSumPopulationsAllRegions: ${await cRep.getSumPopulationsAllRegions()}`);

        console.log(`getCountriesSortedByPop:  ${await cRep.getCountriesSortedByPop()}`);

        console.log( `getHighestPopulation: ${await cRep.getHighestPopulation()}`);

        console.log(`getHighestXPopulations: ${await cRep.getHighestXPopulations(10)}`);
        console.log(`getHighestPopRegion: ${await cRep.getHighestPopRegion('Northern Africa')}`);
        let allR = (await cRep.getHighestAllRegions())
        console.log(`getHighestAllRegions: ${allR}`);
        await cRep.addCity('PPP', 'TestCity');
        await cRep.removeCity('PPP', 'Zorkot');
        

        
    }
    catch (err) {
        console.log(err.stack);
    }
}
main();