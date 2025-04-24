const ActionButtons = ( {fnaction, btnValue, bsClass} ) => {
      let btnClass=`btn ${bsClass} w-25`
      return (
        <button type="button" className={`${btnClass}`} onClick={fnaction}> {btnValue} </button>
      );
    }
    export default ActionButtons;