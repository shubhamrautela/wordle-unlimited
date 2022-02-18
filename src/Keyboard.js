import './App.css'

const Keyboard = (props) => {
    const keysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const keysRow3 = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back']

    const { index, setIndex, tries, setTries, dataArray, setDataArray } = props.state
    return (
        <div className="keyboard">
            <div className="keysRow1">
                {
                    keysRow1.map((key) => {
                        return (
                            <div className="key" onClick={() => {
                                console.log('hello')
                                let newArray = dataArray
                                newArray[tries][index] = key
                                console.log(newArray)
                                setDataArray(newArray)
                            }}>{key}</div>
                        )
                    })
                }
            </div>
            <div className="keysRow2">
                {
                    keysRow2.map((key) => {
                        return (
                            <div className="key">{key}</div>
                        )
                    })
                }
            </div>
            <div className="keysRow3">
                {
                    keysRow3.map((key) => {
                        return (
                            <div className="key" onClick={() => { }}>{key}</div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Keyboard;