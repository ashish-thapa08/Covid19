import React from 'react';
import Covidjson from './Covidjson';
let Covid = () => {
    return (
        <>
            <div className="container">
                <h3 className="text-center mt-3">Coronavirus (COVID-19) Tracker</h3>
                <hr className="w-25 mx-auto" />
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <Covidjson />
                    </div>
                </div>
            </div>
            <footer className="page-footer font-small">
                <div className="footer-copyright text-center py-3 text-white">© 2021 Developed by:
					<a href="#" className="text-warning"> Ashish Thapa</a>
                </div>
            </footer>
        </>
    )
}
export default Covid;