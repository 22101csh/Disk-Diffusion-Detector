import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import './upload.css';
import ReactGA from 'react-ga';
const trackingId = 'UA-148371899-1'
ReactGA.initialize(trackingId);
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '20px'
    },
    overlay : {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};
Modal.setAppElement('#root')
export default function AnimatedModal(props) {
    const [modalIsOpen,setIsOpen] = React.useState(true);
    function closeModal(){
      setIsOpen(false);
      ReactGA.event({category: 'infoModal', action: 'closeModal'});
    }
    return (
        <div className="initModal">
            <Modal
                closeTimeoutMS={500}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                >
                <div>
                    <div style={{textAlign:'center'}}><h1><span>디스크 확산법 억제 영역 판별기</span></h1></div>
                    <ul>
                        <li><div>본 서비스는 디스크 확산법 배지 사진을 분석하여 <strong>억제 영역을 검출</strong>하고 <strong>항생제 감수성을 평가</strong>하는 웹 페이지입니다.</div></li>
                        <li><div>업로드한 모든 사진은 <strong>딥러닝 모델을 학습</strong> 하는데 사용될 수 있습니다.</div></li>
                        <li><div>첨부파일의 최대 용량은 <strong>10MB</strong>로 제한되어 있습니다.</div></li>
                        <li><div>파일 확장자는 <strong>jpg, png, gif</strong>만 가능하며, <strong>gif</strong>파일은 첫번째 프레임을 분석에 사용합니다.</div></li>
                        <li><div>기타 문의사항은 <a href="mailto:gs22101@gs.hs.kr">gs22101@gs.hs.kr</a>으로 문의 바랍니다.</div></li>
                    </ul>
                </div>
                <Button style={{width:'100%'}} id="chaewon" variant="contained" onClick={e=>closeModal()}>시작하기</Button>
            </Modal>
        </div>
    );
}