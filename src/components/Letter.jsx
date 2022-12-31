import React from 'react';
import './Letter.css'

const Letter = ({setLetterClick}) => {
    return (
        <div className='letterContainer' onClick={() => setLetterClick(false)}>
        {/* <span onClick={() => setLetterClick(false)}>X</span> */}
            <div >
                <ul>
                    <li>안녕하세요 쵸키님! </li>
                    <li>새해 선물로 의미있는 것이 무엇이 있을까 고민끝에 페이지를 제작하게 되었네요.</li>
                    <li>새해전에 드리고 싶어서 몇일만에 급하게 만드느라 퀄리티가 많이 낮지만</li>
                    <li>귀엽게 봐주세요 ㅎㅎ 아! 홈페이지로 미연시 비슷한것도 제작 했는데 그건</li>
                    <li>과몰입같아서 진행 중지 했습니다! 눈치껏 하는 녹쵸 칭찬해줘잉.</li>
                    <li>이번에 작업하면서 작업 외적으로 힘든일이 많았는데 쵸키님을 위해</li>
                    <li>만든다고 생각하니 독감을 걸려도, 안좋은 일이 있어도 만드는 순간은 행복했네요</li>
                    <li>그동안 수많은 사람들에게 행복을 주신 쵸키님!</li>
                    <li>올해동안 사람들에게 준 행복만큼 내년엔 더욱더 잘될거라 믿고 있습니다.</li>
                    <li>적어도 저는 아주 많은 행복을 받았으니까, 분명 내년엔 더 잘될거에요.</li>
                    <li>힘내온 쵸키님께 이 홈페이지가 조금이나마 웃음을 맺게 해줬으면 좋겠네요.</li>
                    {/* <li>올해 힘내온 쵸키님께 제가 만든것이 조금이나마 힘이 되었으면 좋겠네요.</li> */}
                    <li>올해동안 정말 고생 많으셨습니다. 내년도 잘부탁드려요! </li>
                </ul>
            </div>
        </div>
    );
};

export default Letter;