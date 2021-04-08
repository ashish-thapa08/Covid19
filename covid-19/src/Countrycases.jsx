import React from 'react';
let Countrycase = (props) => {
    return (
        <>

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Continent</th>
                        <th scope="col">Cases</th>
                        <th scope="col">Today Cases</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Today Deaths</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Today Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <>
                            <td>{props.countryData.country}</td>
                            <td>{props.countryData.continent}</td>
                            <td>{props.countryData.cases}</td>
                            <td>{props.countryData.todayCases}</td>
                            <td>{props.countryData.deaths}</td>
                            <td>{props.countryData.todayDeaths}</td>
                            <td>{props.countryData.recovered}</td>
                            <td>{props.countryData.todayRecovered}</td>
                        </>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Countrycase;