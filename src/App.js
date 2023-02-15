import React , { useState } from 'react'
import { ChromePicker } from 'react-color'
import './App.css'

function App() {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? ' Close color picker' : 'pick a color'}
      </button>
      {showColorPicker && (<ChromePicker 
        color={color} 
        onChange={updetedColor => setColor(updetedColor.hex)}
        />
      )}
      
      <h2>pilih {color}</h2>
    </div>
  );
}

export default App;
