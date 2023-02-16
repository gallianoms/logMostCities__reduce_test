//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least

const citiesList: string[] = [
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
]

interface City {
  name: string
  count: number
}

const logMostCities = (list, numCities: number = 5) => {
  let cities: City = list.reduce((acc, city) => {
    acc[city] = (acc[city] ?? 0) + 1
    return acc
  }, {})

  return Object.keys(cities)
    .map(city => ({
      name: city,
      count: cities[city],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, numCities)
    .map(city => city.name)

  // const res = Object.entries(cities)
  //   .sort((a, b) => b[1] - a[1])
  //   .slice(0, numCities)
  //   .map(city => city[0])
  // return res

  // return cities
}

console.log(logMostCities(citiesList))
