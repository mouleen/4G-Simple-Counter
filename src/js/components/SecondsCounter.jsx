function SecondsCounter({seconds}){
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let sec=zeroPad(seconds, 6);
    return (
        <div className="counter row bg-dark mt-5">
            <h2>Contador</h2>
            <div className="col-3"><i class="fa-regular fa-clock"></i></div>
            <div className="col-1 text-light">{sec[0]}</div>
            <div className="col-1 text-light">{sec[1]}</div>
            <div className="col-1 text-light">{sec[2]}</div>
            <div className="col-1 text-light">{sec[3]}</div>
            <div className="col-1 text-light">{sec[4]}</div>
            <div className="col-1 text-light">{sec[5]}</div>
        </div>
        )
    }
    export default SecondsCounter;
    // Solucion con Math y Modulo
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
    
    )*/