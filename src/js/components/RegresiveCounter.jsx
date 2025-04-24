function RegresiveCounter({seconds}){
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let sec=zeroPad(seconds, 6);
    return (
        <div className="counter row bg-dark mt-5">
            <h2>Contador Regresivo</h2>
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
    export default RegresiveCounter;