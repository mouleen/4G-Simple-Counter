const ActionButton = ( {fnaction, btnvalue} ) => {

      return (
        <button onClick={fnaction}> {btnvalue} </button>
      );
    }
    export default ActionButton;