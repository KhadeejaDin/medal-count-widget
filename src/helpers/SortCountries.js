
export function SortCountries(countries, sortType) {
    let sortedCountries = countries;
    switch (sortType) {
        case 'total':
            sortedCountries.sort((a, b) => compare(a, b, 'total', 'gold'));
            break;
        case 'gold':
            sortedCountries.sort((a, b) => compare(a, b, 'gold', 'silver'));
            break;
        case 'silver':
            sortedCountries.sort((a, b) => compare(a, b, 'silver', 'gold'));
            break;
        case 'bronze':
            sortedCountries.sort((a, b) => compare(a, b, 'bronze', 'gold'));
            break;
        default:
          console.log('Default');
    }
    return sortedCountries;
}

function compare(a, b, first, second) {
    if (a[`${first}`] === b[`${first}`])
    {       
        return a[`${second}`] > b[`${second}`] ? -1 : 1;
    }
    return b[`${first}`] - a[`${first}`];
}