import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import required modules
// import { Pagination } from "swiper";

import Mv1 from "./components/picture/song/mv1.jpg"
import Mv2 from "./components/picture/song/mv2.jpg"
import Mv3 from "./components/picture/song/mv3.jpg"
import Mv4 from "./components/picture/song/mv4.jpg"
import Mv5 from "./components/picture/song/mv5.jpg"
import Mvuta1 from "./components/picture/song/mvuta1.jpg"

import ButtonPlay from "./components/picture/button-play.png"
import BackgroundImage from "./components/picture/bg_orange.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import './swiper.css'


const SwiperMetVideo = () => {

    const getRandomHeight = () => {
        return Math.floor(Math.random() * (300 - 200 + 1)) + 250;
    };
    return (
        <section className="swiper-section">
            <div className="swiper-container"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div class="bar-container mb-5">
                    <h5 class="col-12 col-lg-4 col-md-4 intro-Title">音楽</h5>
                    <div class="col-12 col-lg-1 col-md-1 empty-bar"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mv-met-container">
                            <ul class="mv-container">
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mv1})` }}>
                                    <div class="mv-name">
                                        <p>【歌ってみた】「君と私の歌」 / ＝LOVE covered by 小森めと</p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mv2})` }}>
                                    <div class="mv-name">
                                        <p>【歌ってみた】さようなら、花泥棒さん covered by 小森めと</p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mv3})` }}>
                                    <div class="mv-name">
                                        <p>【歌ってみた】夏夜のマジック / 小森めと cover</p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mv4})` }}>
                                    <div class="mv-name">
                                        <p>【歌ってみた】彼女は旅に出る / 小森めと cover</p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mv5})` }}>
                                    <div class="mv-name">
                                        <p>【歌ってみた】カプチーノ / 小森めと </p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>
                                <li className="card " style={{ height: `${getRandomHeight()}px`, backgroundImage: `url(${Mvuta1})` }}>
                                    <div class="mv-name">
                                        <p>【オリジナルソング】ニートイートミート【小森めと】</p>
                                        <img src={ButtonPlay} class="icon-Button-play" />
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SwiperMetVideo