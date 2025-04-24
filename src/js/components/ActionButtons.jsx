const ActionButtons = ( {fnaction, btnvalue} ) => {

      return (
        <button onClick={fnaction}> {btnvalue} </button>
      );
    }
    export default ActionButtons;