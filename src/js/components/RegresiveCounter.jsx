function RegresiveCounter({seconds}){
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let sec=zeroPad(seconds, 6);
    return (
        <div className="container-fluid py-2 text-center">
            <h2>Contador Regresivo</h2>
            <div className="row bg-black justify-content-md-center py-2">
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3"><i className="fa-regular fa-clock"></i></div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[0]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[1]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[2]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[3]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[4]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[5]}</div>
            </div>
        </div>
        )
    }
    export default RegresiveCounter;