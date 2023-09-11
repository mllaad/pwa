import Header from "../../components/Header"
import CheckPaymentType from "../../components/PaymentType"






const PaymentType = (routeState, setRouteState) => {


    const backHandle = () => null

    const selectHandle = () => setRouteState({state: ''})
    
    return (
        <>
             <Header onBack={backHandle} title={'پرداخت'} />
            <div className="paymenttype">
            <div className="payenttype__header">SHOW CASE</div>
            <CheckPaymentType onSelect={selectHandle} />
            </div>
        </>
    )
    


}

export default PaymentType