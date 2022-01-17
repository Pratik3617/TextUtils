import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    // text="new text"  // wrong way to change state
    // setText("new Text"); //correct way to change state

    const handleUpclick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoclick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

    }

    const handleSwapcaseClick=()=>{
        let newText="";
        for(let i=0 ; i<text.length ; ++i){
            let chr="";
            if(text[i].toLowerCase()===text[i].toUpperCase()){
                chr=text[i];
            }else if(text[i].toLowerCase()===text[i]){
                chr=text[i].toUpperCase();
            }else{
                chr=text[i].toLowerCase();
            }
            newText+=chr;
        }
        setText(newText);
        props.showAlert("Swapcase","success")

    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success")

    }

    const handleWhitespaceClick=()=>{
        let newText="";
        for(let i=0; i<text.length ; ++i){
            let chr="";
            if(text[i]===" " && text[i+1]===" "){
                chr="";
            }else{
                chr=text[i];
            }
            newText+=chr;
        }
        setText(newText);
        props.showAlert("Extra Space has been Removed","success")

    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success")
        
    }

    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }


    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <div className='container' >

                
                <h2 className='my-2 mb-4' >{props.heading}</h2>                
            
                <div className="mb-3" >
                    <textarea className="form-control" id='myBox' style={{backgroundColor:props.mode==='light'?'white':'#1e272e',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSwapcaseClick}>Swapcase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleWhitespaceClick}>Remove Unwanted Space</button>

            </div>

            <div className="container my-3">
                <h2>Your text Summary </h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                <h3 className='my-2'>Preview</h3>
                <p>{text.length>0?text:"NOthing to preview......"}</p>
            </div>
        </div>
        </>
    )
}

