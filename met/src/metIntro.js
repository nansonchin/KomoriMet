import React from 'react'
import MetLeftIntroPic from './components/picture/metIntroRemovebg.png'
import 'bootstrap/dist/css/bootstrap.css';
import './metintro.css'

const metIntro = () => {
    return (
        <section class="metIntro-section">
            <div class="metIntro-container">
                <div class="row">
                    <div class="col-12 col-lg-5 col-md-5">
                        <img src={MetLeftIntroPic} class="metIntroLeft" />
                    </div>
                    <div class="col-12 col-lg-7 col-md-7">
                        <div class="metIntroDesc-container">
                            <div class="container">
                                <div class="bar-container">
                                    <h5 class="col-12 col-lg-4 col-md-4 intro-Title">紹介文</h5>
                                    <div class="col-12 col-lg-1 col-md-1 empty-bar"></div>
                                </div>

                                <p class="intro-sub">宇宙で快適に実家生活をしていた金属生命体。
                                    ドロドロと気ままな生活を続けていけると思っていたが
                                    ある日突然…地球に投げ捨てられてしまった…

                                    途方にくれていると目の前に小さな女の子がコンビニ袋をぶら下げて歩いている。
                                    その子の後をついていくと…快適そうなアパートが…*2</p>
                            </div>

                        </div>
                        <div class="metIntroQuote">
                            <h4>ブイアパの部屋はいただいた！
                                地球の底辺を守りに来ました、引きこもりニートの小森めとだよ～</h4>
                        </div>
                        <div class="metIntroDetail-container">
                           <table class="metIntrotable">
                            <tr class="table-row">
                                <th class="table-head">名前</th>
                                <td class="table-data">小森めと</td>
                            </tr>
                            <tr>
                                <th class="table-head">身長</th>
                                <td class="table-data">156cm</td>
                            </tr>
                            <tr>
                                <th class="table-head">誕生日	</th>
                                <td class="table-data"> 12月10日</td>
                            </tr>
                            <tr>
                                <th class="table-head">推しマーク	</th>
                                <td class="table-data">🪐（土星）</td>
                            </tr>
                            <tr>
                                <th class="table-head">ファンネーム		</th>
                                <td class="table-data">ドロメイト</td>
                            </tr>
                           </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default metIntro