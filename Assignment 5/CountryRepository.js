const fs = require('fs-extra');
const path = require('path');
const Country = require('./Country.js');

class CountryRepository {

    constructor() {
        this.countryFilePath = path.join(__dirname, "/data/country.json");
        // console.log(this.countryFilePath);
    }
    async saveData(path, data) {

        data = (await this.sort(data));
        await fs.writeFile(path, JSON.stringify(data));
    }
    async getAllCountries() {
        // const data = await fs.readFile('data/country.json');
        // let countries=await JSON.parse(data);
        try {
            let countries = await fs.readJSON(this.countryFilePath);
            countries.forEach(element => {
                element.toString = function () {
                    return `[${this.country}, ${this.code}, ${this.region}]`;
                }

            });
            return countries;
        } catch (error) {

            console.log(error)
        }


    }

    async getCountry(code) {
        try {
            let countries = await this.getAllCountries()
            return countries.find(s => code.localeCompare(s.code) == 0)
        } catch (error) {
            throw new Error('No record Found')
        }
    }
    async deleteCountry(code) {
        let countries = (await this.getAllCountries());
        const i = countries.findIndex(c => c.code == code);

        if (i >= 0) {
            countries.splice(i, 1);
            await this.saveData(this.countryFilePath, (countries))
        } else {
            throw new Error('No record Found')
        }
    }
    async addCountry(country) {
        let countries = await this.getAllCountries();
        countries.push(country);
        // countries.sort( (c, b) => c.country.localeCompare(b.country))
        countries.sort(function (a, b) {
            if (a.country != null && b.country != null) {

                return a.country.localeCompare(b.country) == 0;
            }
            else {
                return 0;
            }
        })
        try {
            await this.saveData(this.countryFilePath, (countries));
        } catch (error) {
            console.log(error)
        }

    }
    async updatePopulation(code, value) {
        let countries = await this.getAllCountries();
        try {
            countries.find(c => code.localeCompare(c.code) == 0).population = value;
            await this.saveData(this.countryFilePath, countries);
        } catch (error) {
            console.log(error);
        }


    }
    async getCountriesByRegion(region) {
        let countries = await this.getAllCountries();
        try {
            let regCountries = countries.filter(a => region.localeCompare(a.region) == 0)
            return regCountries;
        } catch (error) {
            console.log(error);
        }
    }
    async getSumOfPopulation(countries) {
        try {
            return countries.reduce((a, b) => a + (parseInt(b.population) || 0), 0);
        } catch (error) {
            console.log(error);
        }

    }
    async getSumAllPopulation() {
        return await this.getSumOfPopulation(await this.getAllCountries());
    }
    async getSumPopulationByRegion(region) {
        try {

            return await this.getSumOfPopulation(await this.getCountriesByRegion(region))
        } catch (error) {

        }

    }
    async getSumPopulationsAllRegions() {
        let countries = await (this.getAllCountries());
        let regionPop = new Map();

        for (const element of countries) {
            if (regionPop.get(element.region) == undefined && element.region != null) {
                regionPop.set(element.region, await (this.getSumPopulationByRegion(element.region)))
            }
        }

        return regionPop
    }
    async getCountriesSortedByPop() {
        let countries = await this.getAllCountries();
        try {
            let sortedCountries = countries.sort((a, b) => a.population - b.population)
            return sortedCountries;
        } catch (error) {
            console.log(error);
        }
    }
    async getHighestXPopulations(x) {
        try {


            let countries = await this.getCountriesSortedByPop();
            var rCountries = countries.reverse();
            return rCountries.slice(0, x);
        } catch (error) {
            console.log(error);
        }
    }
    async getHighestPopulation() {
        return await this.getHighestXPopulations(1);
    }
    async getHighestPopRegion(region) {
        try {
            var m = new Map()

            m.set(region, (await this.getCountriesByRegion(region)).reduce((max, n) => n.population > max ? n.population : max, 0))
            return m
        } catch (error) {
            console.log(error)

        }

    }

    async getHighestAllRegions() {
        let countries = await this.getAllCountries();
        var m = new Map();
        for (const element of countries) {

            if (m.get(element.region) == undefined && element.region != undefined) {
                m.set(element.region, (await this.getCountriesByRegion(element.region)).reduce((max, n) => n.population > max ? n.population : max, 0))
            }
        }
        return m;

    }
    async addCity(code, newCity) {
        try {
            let countries = await this.getAllCountries()
            let country = countries.find(s => code.localeCompare(s.code) == 0)

            country.cities.push(newCity);
            await this.saveData(this.countryFilePath, countries)
        } catch (error) {
            throw new Error(error)
        }


    }

    async removeCity(code, city) {
        try {
            let countries = await this.getAllCountries()
            let country = countries.find(s => code.localeCompare(s.code) == 0)

            country.cities = country.cities.filter((v) => city.localeCompare(v) != 0)
            await this.saveData(this.countryFilePath, countries);
            
        } catch (error) {
            throw new Error(error)
        }


    }

    async sort(data) {
        // let countries = await this.getAllCountries()
        data= data.sort(function (a, b) {
            if (a.country != null && b.country != null) {

                return a.country <b.country? 1:-1
                
            }
            else {
            }
        })
        return data.reverse()
    }
}

async function main() {
    try {

        let cRep = new CountryRepository();
        // cRep.sort();
    }
    catch (err) {
        console.log(err.stack);
    }
}
module.exports = CountryRepository
// main();