import React from 'react';
import {ApplicationContainer} from "../../application/components/ApplicationContainer";

function App() {
    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Urlaubsliste</span>
                </a>
            </header>

            <div className="row g-5">
                <ApplicationContainer/>
            </div>

            <footer className="pt-5 my-5 text-muted border-top">
                Created by Dschaeck  &middot; &copy; 2021
            </footer>

        </div>
    );
}

export default App;
