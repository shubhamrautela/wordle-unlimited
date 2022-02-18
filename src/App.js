import logo from './logo.svg';
import {useState} from 'react'
import Game from './Game'
import Keyboard from './Keyboard';
import { MdHelpOutline, MdBarChart, MdSettings} from 'react-icons/md'
import './App.css';

function App() {
  // array to store the 6 tries
  const [index, setIndex] = useState(0)
  const [tries, setTries] = useState(0)

  

  const [dataArray, setDataArray] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]);

  const keysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keysRow3 = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back']

  const handleKeyPress = (key) => {
    if(index <= 4){
    let newArray = dataArray
    newArray[tries][index] = key
    setDataArray(newArray)
    setIndex(index + 1)
  }
  }
  const handleBackKeyPress = () => {
    if(index > 0){
      console.log('ran')
    let newArray = dataArray
    newArray[tries][index-1] = ''
    setDataArray(newArray)
    setIndex(index - 1)
  }
  }

  const handleEnterKeyPress = () => {

  }

  return (
    <div className="App">
      <div className='inner'>
        <div className='header'>
          <div className='icon1'><MdHelpOutline /></div>
          <div className='text'>
            WORDLE
          </div>
          <div className='icon2'>
            <MdBarChart/>
            <MdSettings/>
          </div>
          

        </div>
        <div className="game">
          <div>
            {
              dataArray.map(box => {
                let tempBox = []
                for (let j = 0; j < 5; j++) {
                  tempBox.push(<div className="box">{box[j]}</div>)
                }
                return (
                  <div className="boxes">{tempBox}
                  </div>
                )
              })
            }
          </div>
          {/* {<Game state={{tries, setTries, dataArray, setDataArray}}
            />} */}
        </div>

          <div className="keyboard">
            <div className="keysRow1">
              {
                keysRow1.map((key) => {
                  return (
                    <div className="key" onClick={() => handleKeyPress(key)}>{key}</div>
                  )
                })
              }
            </div>
            <div className="keysRow2">
              {
                keysRow2.map((key) => {
                  return (
                    <div className="key" onClick={() => handleKeyPress(key)}>{key}</div>
                  )
                })
              }
            </div>
            <div className="keysRow3">
              {
                keysRow3.map((key) => {
                  return (
                    <div className="key" onClick={() => {
                      if(key === 'Enter')
                      handleEnterKeyPress()
                      else if(key === 'Back')
                      handleBackKeyPress()
                      else
                      handleKeyPress(key)
                    }}>{key}</div>
                  )
                })
              }
            </div>

          </div>

          {/* {<Keyboard state={{index, setIndex, tries, setTries, dataArray, setDataArray}}/>} */}
        </div>
      </div>
    
  );
}

export default App;
