function SecondsCounter({seconds}){
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let sec=zeroPad(seconds, 6);
    return (
        <div className="container-fluid py-4 text-center">
            <h2>Contador Simple</h2>
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
    export default SecondsCounter;
    // Solucion basica con Math y Modulo sin maqueta
    /*
    function SecondsCounter({seconds}){
    return (
        <div className="row bg-dark mt-5">
            <div className="col-3 bg-light">&#9200;</div>
            <div className="col-1 text-light">{Math.floor(seconds / 100000 ) % 10  }</div>
            <div className="col-1 text-light">{Math.floor(seconds / 10000 ) % 10  }</div>
            <div className="col-1 text-light">{Math.floor(seconds / 1000 ) % 10  }</div>
            <div className="col-1 text-light">{Math.floor(seconds / 100 ) % 10  }</div>
            <div className="col-1 text-light">{Math.floor(seconds / 10 ) % 10  }</div>
            <div className="col-1 text-light">{Math.floor(seconds / 1 ) % 10  }</div>
            <div className="col-3 bg-light">{seconds}</div>
        </div>
        )
    }
    export default SecondsCounter;






                    <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[0]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[1]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[2]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[3]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[4]}</div>
                <div className="col-1 bg-dark text-light py-4 w-80 h-100 display-3 text-center mx-2 rounded-3">{sec[5]}</div>
    
    )*/