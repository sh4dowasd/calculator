import React, {useState} from 'react';
import './app.scss';

function App() {
    const [data, setData] = useState('')
    const [result, setResult] = useState('')
    const numberBtns = [7,8,9,4,5,6,1,2,3,'00',0,'.']
    const createNums = arr => {
        return (arr.map(item =>
            <button onClick={(e) => {
                    setData(data + e.target.value)
                    if(result !== '') {
                        setData('' + e.target.value)
                        setResult('')
                    }
                }}
                        value={item}
                        key={item}>
                    {item}
                </button>
        ))
    }
    const createOperators = e => {
            return (
                <button onClick={e => setData(data + e.target.value)} value={e}>
                    {e}
                </button>
            )
    }

  return (
    <div className='container'>
      <div className='blur-background'>
          <div className='calculator'>
              <div className='input'>
                  <p>{data}</p>
              </div>
              <div className='result'>
                  <p>{result}</p>
              </div>
              <hr/>
              <div className='modifiers'>
                  <button onClick={() => {
                      setData('')
                      setResult('')
                  }}>C</button>
                  <button onClick={() => {
                      setResult(parseFloat(Math.sqrt(data).toFixed(5)))
                      setData('')
                  }}>√</button>
                  <button onClick={e => setData(data + e.target.value)} value='%'>
                      %
                  </button>
                  {createOperators('/')}
              </div>
              <div className='buttons-container'>
                  <div className='numbers'>
                      {createNums(numberBtns)}
                  </div>
                  <div className='operations'>
                      <button onClick={e => setData(data + e.target.value)} value='*'>
                          ×
                      </button>
                      {createOperators('-')}
                      {createOperators('+')}
                      <button
                          className='equal'
                          onClick={e => {
                              console.log(5 + 5)
                                String(data).indexOf('%') === 0 || String(data).indexOf('/') === 0 || String(data).indexOf('*') === 0
                                ? setResult(Number(String((data).split(data[0])[1])))
                                :
                                    setResult(
                                    String(eval(data)).length > 3 && String(eval(data)).includes('.')
                                        ? String(parseFloat(eval(data).toFixed(5)))
                                        : String(data).indexOf('%') >= 0
                                        ? parseFloat((Number(String(data).split('%')[1]) / 100 * Number(String(data).split('%')[0])).toFixed(5))
                                        : String(eval(data))
                                )
                          }}
                          value='='>
                          =
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
