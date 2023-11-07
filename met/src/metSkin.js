import React,{ useState } from 'react'
import './metSkin.css';
import 'bootstrap/dist/css/bootstrap.css';
import Met1 from './components/picture/skin/komoriMet1.png'
import Met2 from './components/picture/skin/komoriMet2.png'
import Met3 from './components/picture/skin/komoriMet3.png'
import Met4 from './components/picture/skin/komoriMet4.png'
import Met5 from './components/picture/skin/komoriMet5.png'

import MetHead1 from './components/picture/SkinHead/MetHead1.jpg'
import MetHead2 from './components/picture/SkinHead/MetHead2.jpg'
import MetHead3 from './components/picture/SkinHead/MetHead3.jpg'
import MetHead4 from './components/picture/SkinHead/MetHead4.jpg'
import MetHead5 from './components/picture/SkinHead/MetHead5.jpg'

const MetSkin = () => {
const [selectedMetHead,setSelectedMetHead]=useState(MetHead1);
const [selectedMet,setSelectedMet]=useState(Met1);

const metHeadToMetMap={
    [MetHead1]:Met1,
    [MetHead2]:Met2,
    [MetHead3]:Met3,
    [MetHead4]:Met4,
    [MetHead5]:Met5,
}

const handleMetHeadClick=(src)=>{
    setSelectedMetHead(src);
    setSelectedMet(metHeadToMetMap[src]);
}

    return (
        <section class="metSkin-section">
            <div class="metSkin-container">

                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="bar-container mt-5">
                            <h5 class="col-12 col-lg-4 col-md-4 intro-Title">衣装</h5>
                            <div class="col-12 col-lg-1 col-md-1 empty-bar"></div>
                        </div>
                        <div class="met-skin-selection-container">
                            <img src={MetHead1} class="metskin-Head" onClick={() => handleMetHeadClick(MetHead1)} />
                            <img src={MetHead2} class="metskin-Head" onClick={() => handleMetHeadClick(MetHead2)}/>
                            <img src={MetHead4} class="metskin-Head" onClick={() => handleMetHeadClick(MetHead3)}/>
                            <img src={MetHead3} class="metskin-Head" onClick={() => handleMetHeadClick(MetHead4)}/>
                            <img src={MetHead5} class="metskin-Head" onClick={() => handleMetHeadClick(MetHead5)}/>

                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="container">
                            <div class="metSkin-whole-container">
                                <img  src={selectedMet}  class="metSkin-whole" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default MetSkin