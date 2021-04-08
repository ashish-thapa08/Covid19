import React from 'react';
import Loadingg from './Loading';
export let Coviddd = React.createContext();
let Pandemic = (props) => {
    let [covidd, setCovid] = React.useState([]);
    let [loading, Loading] = React.useState(true);
    let Covid19 = async () => {
        try {
            const data = await fetch(`https://disease.sh/v3/covid-19/countries`);
            const Data = await data.json();
            let covidcountry = Data.map((curval) => ({
                name: curval.country,
                value: curval.countryInfo.iso2,
                continent: curval.continent,
                cases: curval.cases,
                todayCases: curval.todayCases,
                deaths: curval.deaths,
                todayDeaths: curval.todayDeaths,
                recovered: curval.recovered,
                todayRecovered: curval.todayRecovered
            }));
            setCovid(covidcountry);
            Loading(false);
        }
        catch (err) {
            alert('Took long time!!! Refresh It:)')
            console.log(err);
        }
    }
    React.useEffect(() => { Covid19() }, [])
    if (loading) {
        return <Loadingg />
    }
    return (
        <>
            <Coviddd.Provider value={covidd}>
                {props.children}
            </Coviddd.Provider>
        </>
    )
}
export default Pandemic;