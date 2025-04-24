function AlarmForm({fnAction}){
    return (<div className="alarm">
                <i className="fa-solid fa-bell"></i>
                <input type="text" onChange={fnAction} id="alarmInput" maxlength="6" placeholder="Segundos para Alarma" className="rounded-4"/>
            </div>
        )
    }
    export default AlarmForm;