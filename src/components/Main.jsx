import React, { useState } from 'react';
import './Main.css'
import TypingText from '../api/TypingText';
import Letter from './Letter';

const Main = ({scrollIndex}) => {
    const [mouseToggle , setMouseToggle] = useState()
    const [mouseClickToggle , setMouseClickToggle] = useState(false)

    const moveClick1 = (e) => {
        if(e){
            alert("바보")
        }
    }
    const moveClick2 = (e) => {
        if(e){
            alert("천재...라고 할뻔")
        }
    }

    const [letterClick , setLetterClick] = useState(false)


    return (
        <section 
            className={mouseClickToggle === false ? (mouseToggle === true ? "ContainerNone" : "Container") : ""} 
            onMouseEnter={() => setMouseToggle(true)}
            onMouseLeave={() => setMouseToggle(false)}
            onClick={() => setMouseClickToggle(true)}
        >
            {
                mouseToggle === true && mouseClickToggle === false &&
                <p className='mouseHoverText'>
                    클릭!
                </p>
            }
            {
                mouseClickToggle === true &&
                <>
                    {scrollIndex !== 1 &&
                        <div className='moveImg' onClick={(e) => moveClick1(e)}>
                            <p>허졉 허졉</p>
                            <img src='../img/미니쵸키.gif'></img>
                        </div>
                    }
                    <header className='chokiUp'>
                        <p>왘!!</p>
                        <img src="../img/쵸키/등장.png" alt="" />
                    </header>
                    <div className="divider"></div>
                    <section className='spring'>
                        <div>
                            <div>
                                <span>
                                    {
                                        scrollIndex === 2 && 
                                        <TypingText background="black" text="우주 최강 버튜버 김쵸키" speed={100} fontSize="5rem" color="white"></TypingText>
                                    }
                                </span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://twitter.com/intent/tweet?screen_name=vrecord_choki&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-lang="ko" data-show-count="false">트위터</a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@vrecord_choki" target="_blank">
                                            유튜브
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitch.tv/vrecord_choki" target="_blank">
                                            트위치
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="divider"></div>
                    <section className='summer'>
                        <h1>우주 최강 버튜버 김쵸키의 세계관</h1> 
                        <div>
                            {
                                scrollIndex === 3 && 
                                <TypingText background="white" text="마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는 강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을 뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 VRECORD에 입학했다. " speed={10} fontSize="1.5rem" color="black"></TypingText>
                            }
                            <div className='summerImg'>
                                <img src='../img/쵸키.png' onClick={(e) => moveClick2(e)}></img>
                            </div>
                        </div>
                    </section>
                    <div className="divider"></div>
                    <section className='fall'>
                        <p>쵸키 입덕 동영상 추천</p>  
                        <iframe width="40%" height="315" src="https://www.youtube.com/embed/7YcH8T7zT9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="40%" height="315" src="https://www.youtube.com/embed/GwZAfPFbrcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
                    <div className="divider"></div>
                    <section className='winter'>
                            <a href="https://www.flaticon.com/kr/free-icons/" title="새해 아이콘">새해 아이콘  제작자: Flowicon - Flaticon</a>
                        <div onClick={() => setLetterClick(true)}>
                            <p>쵸키꺼!</p>
                            <img src="../img/new.png" alt="" />
                        </div>
                    </section>
                </>
            }
            {
                letterClick === true && 
                <Letter setLetterClick={setLetterClick}></Letter>
            }
        </section>
    );
};

export default Main;