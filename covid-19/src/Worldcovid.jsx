import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Coviddd } from './Covid19';
function Worldcovid() {
    let covidd = React.useContext(Coviddd);
    const options = {
        responsiveClass: true,
        margin: 8,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: { items: 1 },
            700: {
                items: 2,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <>
            <h3 className="text-center">Country Data:</h3>
            <hr className="mx-auto w-25" />
            <OwlCarousel className='owl-theme'{...options}>
                {covidd.map((curval, index) => {
                    return (
                        <>
                            <div className="card countryy">
                                <div className="card-body">
                                    <h4 className="card-title ">{curval.name}</h4>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="alert alert-info m-3" role="alert">
                                                <span>Total Cases:</span><h5 className="font-weight-bold fontt">{curval.cases}</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="alert alert-success m-3" role="alert">
                                                <span>Total Recovered:</span><h5 className="font-weight-bold fontt">{curval.recovered}</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="alert alert-danger m-3" role="alert">
                                                <span>Total Deaths:</span><h5 className="font-weight-bold fontt">{curval.deaths}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </OwlCarousel>
        </>
    )
}
export default Worldcovid
