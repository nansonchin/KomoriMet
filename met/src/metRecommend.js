import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './metRecommed.css'
import RecommendV1 from './components/picture/Recommend/itTakesTwo.jpg'
import RecommendV2 from './components/picture/Recommend/apex2.jpg'
import RecommendV3 from './components/picture/Recommend/apex3.png'
import RecommendV4 from './components/picture/Recommend/genshin.jpg'

const MetRecommend = () => {
    return (
        <section class="metRecommend-section">
            <div class="metRecommend-container">
                <div class="container d-flex">
                    <div class="col-12 col-lg-1 col-md-1 empty-bar color-bar-metRecomment"></div>
                    <h6 class="metRecommend-title">おすすめの動画</h6>
                    <div class="col-12 col-lg-1 col-md-1 empty-bar color-bar-metRecomment"></div>
                </div>
                <div class="recomend-video-contain">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-3 col-md-3">
                                <div class="video-container">
                                    <img src={RecommendV1} class="video-img" />
                                    <div class="video-info">
                                        <p class="video-text">【It Takes Two】ありぴゃかぴゃんと協力するやつ【小森めと / ブイアパ】</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 col-md-3">
                                <div class="video-container">
                                    <img src={RecommendV2} class="video-img" />
                                    <div class="video-info">
                                        <p class="video-text">【 APEX 】え...え？ w/ ヘンディー 山本彩さん【 ぶいすぽっ！ / 小森めと 】</p>
                                    </div>
                                </div>
                            </div><div class="col-12 col-lg-3 col-md-3">
                                <div class="video-container">
                                    <img src={RecommendV3} class="video-img" />
                                    <div class="video-info">
                                        <p class="video-text">【 APEX 】V最カスタム Day5【 ぶいすぽっ！ / 小森めと 】</p>
                                    </div>
                                </div>
                            </div><div class="col-12 col-lg-3 col-md-3">
                                <div class="video-container">
                                    <img src={RecommendV4} class="video-img" />
                                    <div class="video-info">
                                        <p class="video-text">【 原神 】#1 初原神いかしてもらいます。【 ぶいすぽっ！ / 小森めと 】</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container metRecommend-more">
                    <p class="metRec-toTwitch">Twitch へ</p>
                    <p class="metRec-toYoutube">Youtube へ</p>
                </div>

            </div>

        </section>
    )
}

export default MetRecommend