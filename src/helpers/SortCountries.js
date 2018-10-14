
export function SortCountries(countries, sortType) {
    let sortedCountries = countries;
    switch (sortType) {
        case 'total':
            sortedCountries = countries
            .sort((a, b) => a.total - b.total);
            break;
        case 'gold':
            sortedCountries = countries
            .sort((a, b) => a.gold - b.gold);
            break;
        case 'silver':
            sortedCountries = countries
            .sort((a, b) => a.silver - b.silver);
            break;
        case 'bronze':
            sortedCountries = countries
            .sort((a, b) => a.bronze - b.bronze);
            break;
        default:
          console.log('Default');
    }

    return sortedCountries;
}