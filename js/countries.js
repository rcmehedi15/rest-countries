// api data load

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}
// api data display
const displayCountries = countries => {
    // each data maping
    const CountriesHTML = countries.map(country => getCountryHTML(country))
    // html countries id catch 
    const container = document.getElementById('countries');
    // each country send to --> html id="countries" 
    container.innerHTML = CountriesHTML.join(' ');

}

// each country item get
// Op -3 const getCountryHTML = ({name,flags,area,region}) => {

const getCountryHTML = country => {
    // distrucaring
    // op -1
    const {name,flags} = country;
    //op - 2 name and flags peramenter pass country er vitor
        return `
    
    <div>
        <h2>${name.common}</h2>
        <img src="${flags.png}" alt="">

    </div>
    `
}
// original code
// const getCountryHTML = country => {
//     
//     return `
    
//     <div>
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}" alt="">

//     </div>
//     `
// }

// main function call
loadCountries();