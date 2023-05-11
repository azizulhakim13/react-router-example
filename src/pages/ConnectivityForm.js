const ConnectivityForm = () => {
    return (  
        <div className="connectivity-form">
            <div class="banner">
                <div class="text-center text-white pt-4 pt-lg-85">
                <h2 class="fw-semibold display-4">Connectivity Form</h2>
                <p>PEEREX - A service brand of PEEREX.</p>
                </div>
            </div>
            <div class="container py-4 py-lg-60">
                <div class="section-title text-center pb-3">
                    <h2 class="fw-semibold position-relative pb-3 mb-0">Connectivity Form</h2>
                    <p class="pt-3">We appreciate you considering PEEREX as your new supplier of high-speed internet.</p>
                    <p class="pwidth mx-auto">Please complete the form below and click the save button to request PEEREX access at your location.
                    Your connection will be delivered in accordance with your anticipated timetable when our concern team contacts you
                    </p>
                </div>
                <div class="connectivity px-lg-120">
                    <iframe class="w-100" src="https://crm.icc.com.bd/lead-form"></iframe> 
                </div>
            </div>
        </div>
    );
}
 
export default ConnectivityForm;