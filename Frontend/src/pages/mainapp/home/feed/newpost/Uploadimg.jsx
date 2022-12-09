import React from 'react'
import { useState } from 'react'

function Uploadimg() {
    const [image , setImage] = useState("")
    const submitimg = ()=>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset" , "utk7tsdj");
        data.append("cloud_name","dbnqqpobe");
        // fetch("")
    }
  return (
    <>
        <div>
            <div>
                <input type="file" name="" id="" onChange={(e)=>setImage(e.target.files[0])}/>
                <button onClick={submitimg}>Upload</button>
            </div>
        </div>
    </>
  )
}

export default Uploadimg