//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least
var citiesList = [
    'nashville',
    'nashville',
    'los angeles',
    'nashville',
    'memphis',
    'barcelona',
    'los angeles',
    'sevilla',
    'madrid',
    'canary islands',
    'barcelona',
    'madrid',
    'nashville',
    'barcelona',
    'london',
    'berlin',
    'madrid',
    'nashville',
    'london',
    'madrid',
];
var logMostCities = function (list, numCities) {
    if (numCities === void 0) { numCities = 5; }
    var cities = list.reduce(function (acc, city) {
        var _a;
        acc[city] = ((_a = acc[city]) !== null && _a !== void 0 ? _a : 0) + 1;
        return acc;
    }, {});
    return Object.keys(cities)
        .map(function (city) { return ({
        name: city,
        count: cities[city]
    }); })
        .sort(function (a, b) { return b.count - a.count; })
        .slice(0, numCities)
        .map(function (city) { return city.name; });
    // const res = Object.entries(cities)
    //   .sort((a, b) => b[1] - a[1])
    //   .slice(0, numCities)
    //   .map(city => city[0])
    // return res
    // return cities
};
console.log(logMostCities(citiesList));
