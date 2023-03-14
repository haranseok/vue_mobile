
export default {
    isEthereum() {
        if(typeof window.ethereum !== "undefined"){
            return true
        }
    }
}