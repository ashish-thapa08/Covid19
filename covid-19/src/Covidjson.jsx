import React from 'react';
import Totalworldwidecase from './Totalcovidworldwidecase';
import Worldwidecovid from './Worldcovid';
import Countrycase from './Countrycases';
import { Coviddd } from './Covid19';
let Covidjson = () => {
    let covidd = React.useContext(Coviddd);
    let [countryinfo, setCountryinfo] = React.useState({});
    let [countrydata, setCountrydata] = React.useState({});
    let [loading, Loading] = React.useState(true);
    let Worldwide = async () => {
        try {
            let data = await fetch(`https://disease.sh/v3/covid-19/all`);
            let dataa = await data.json();
            setCountryinfo(dataa);
            Loading(false);
        }
        catch (err) {
            console.log(err);
        }
    }
    React.useEffect(() => {
        Worldwide()
    }, []);
    let Countrychoose = async (e) => {
        const countrycode = e.target.value;
        console.log(countrycode);
        if (countrycode === "worldwide") {

        }
        else {
            try {
                let url = `https://disease.sh/v3/covid-19/countries/${countrycode}`
                let data = await fetch(url);
                let dataa = await data.json();
                setCountrydata(dataa);
                Loading(false);
            }
            catch (e) {
                alert('Took long time: Refresh page:)')
            }
        }
    }
    return (
        <>
            <Totalworldwidecase load={loading} countryInfo={countryinfo} />
            <div>
            </div>
            <select className="form-select mt-4" aria-label="Default select example" onChange={Countrychoose}>
                <option selected value="worldwide">Select Country</option>
                {covidd.map((curvalue, indexx) => {
                    return (<> <option value={curvalue.value} key={indexx}>{curvalue.name}</option></>);
                })}
            </select>
            <Countrycase countryData={countrydata} />
            <Worldwidecovid />
        </>
    )
}
export default Covidjson;