// Code Keypad Component Here

function Keypad (){

    function handleOnChange() {
        console.log('Entering password...')
    }

    return (
        <div>
            <input onChange={handleOnChange} type="password"/>
        </div>
    )
}

export default Keypad;