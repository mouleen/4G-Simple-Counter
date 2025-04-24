function AlarmForm({fnAction}){
    return (
        <input type="text" onChange={fnAction} id="alarmInput" maxlength="6"/>
        )
    }
    export default AlarmForm;