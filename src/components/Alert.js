import React from "react";


export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
  return (
    props.alert && <div style={{backgroundColor:props.mode==='dark'?'white':'gray',color:props.mode==='light'?'white':'black'}}>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
