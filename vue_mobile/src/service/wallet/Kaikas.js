// import Caver from 'caver-js';

export default {
    isKaikas() {
        // undefined가 아니면 카이카스 확장 프로그램이 설치되어 있는 것.
        if(typeof window.klaytn !== "undefined"){
            return true
        }
    },
}