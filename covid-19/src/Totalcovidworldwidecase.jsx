import React from 'react';
import { ImSvg } from "react-icons/im";
import Loadingg from './Loading';
let Totalcases = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="card cards mt-3">
                        <h4 className="text-center mt-2 font-weight-bold">Global Covid-19 Record <ImSvg /></h4>
                        <hr className="mx-auto w-25" />
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-info m-3" role="alert">
                                    <span>Total Cases:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.cases}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-success m-3" role="alert">
                                    <span>Total Recovered:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.recovered}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-danger m-3" role="alert">
                                    <span>Total Deaths:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.deaths}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-secondary m-3" role="alert">
                                    <span>Total Tests:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.tests}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-info m-3" role="alert">
                                    <span>Today Cases:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.todayCases}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-success m-3" role="alert">
                                    <span>Today Recovered:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.todayRecovered}</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="alert alert-danger m-3" role="alert">
                                    <span>Today Deaths:</span><h5 className="font-weight-bold fonttt">{props.load === true ? (<Loadingg />) : props.countryInfo.todayDeaths}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Totalcases;