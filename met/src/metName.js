import React from 'react';
import './metName.css';
import 'bootstrap/dist/css/bootstrap.css';
import KomoriMetPic from './components/picture/komorimetPic.png';

const MetName = () => {
    return (
        <section class="metSection">
            <div class="metname">
                <div class="row">
                    {/* <h6>Vspo</h6> */}
                    <div class="col-12 col-md-6 col-lg-6 metNaming">
                        <div class="metNaming-container">
                            <div class="komoriFlex">
                                <h1 class="komoriJP">小森めと</h1>
                                <h4 class="komoriEn">KOMORI MET</h4>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 metPicture">
                        <img src={KomoriMetPic} class="komoriMetFigurePic" />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default MetName