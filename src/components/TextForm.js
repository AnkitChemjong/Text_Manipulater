import PropTypes from "prop-types"
import React,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick=()=>{
           //console.log("uploading hai")
           let a=text.toUpperCase();
           setText(a)
           props.showAlert("Converted to UpperCase","success")
    }
    const handleDownClick=()=>{
       // console.log("uploading haina")
        let a=text.toLowerCase();
        setText(a)

      props.showAlert("Converted to lowerCase","success")
 }
    const handleOnChange=(event)=>{
        setText(event.target.value)
 }
 const handleClearClick=(event)=>{
  setText("");
  props.showAlert("Cleared","success")
 }
 const handleClearSpaceClick=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("Cleared spaces","success")
 }
    const [text,setText]=useState('');
    //text="hello";//wrong way to change text
   // setText("new text");//correct way 
  return (
    <>
      <div class=" container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea 
        style={{backgroundColor:props.mode==='dark'?'white':'gray',color:props.mode==='light'?'white':'black'}}
          class="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}

        ></textarea>
      </div>
      <button className="byn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
      <button className="byn btn-primary mx-3" onClick={handleDownClick}>Convert to lower case</button>
      <button className="byn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
      <button className="byn btn-primary mx-3" onClick={handleClearSpaceClick}>Clear Space text</button>
       
        <div className="container my-4" style={{backgroundColor:props.mode=='dark'?'white':'gray',color:props.mode==='dark'?'black':'white'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Time took to read</p>
        </div>
        <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'gray',color:props.mode==='light'?'white':'black'}}>
          <h1 style={{color:props.mode==='light'?'black':'white'}}>Text preview</h1>
          {text.length > 0?text:"Enter something to preview in above field!"}
        </div>
    </>
  );
}
// TextForm.propTypes = 
// {
//     heading: PropTypes.string.isRequired
// }
// TextForm.defaultPropsTypes= 
// {
//     heading:"helo mam"
// }
