import React, { useState } from 'react'

export default function ColorPicker(props) {

  const [color, setColor] = useState("#CCCCCC");
  
  const handleColorChange = (event) => {

    const selectedColor = event.target.value;
    setColor(selectedColor);

    if(props.onChangeColor){

        props.onChangeColor(selectedColor);
    }    
  }

  return (
    <div className='d-flex justify-content-end my-2'>
        <form>
            <input type="color" className="form-control form-control-color" id="myColor" value="#CCCCCC" title="Theme color" onChange={handleColorChange}/>
        </form>
    </div>
  )
}
