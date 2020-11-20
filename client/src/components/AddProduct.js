import React, {useState, useEffect} from 'react';


export default function AddProduct(){
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [productImage, setProductImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const [price, setPrice] = useState(null);
const [releaseDate, setReleaseDate] = useState(null);
// const [sizes, setSizes] = useState(null);

const handleImage = (e) => {
  setProductImage({
    raw: e.target.files[0]
  })

  const reader = new FileReader();
  reader.onload = () => {
    if(reader.readyState === 2){
      setPreviewImage(reader.result);
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}

const removePreview = () => {
  setPreviewImage(null);
}

const handleSubmit = () => {
  console.log(title)
  console.log(description)
  console.log(productImage)
  console.log(price)
  console.log(releaseDate)
}

  return(
    <div className="addProductWrapper">
      <form className="addProduct__form" onSubmit={handleSubmit}>
        <input className="addProduct__form-input" type='text' 
        onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
        <textarea className="addProduct__form-input" 
        onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
        <input className="addProduct__form-input" type='number'
        onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/>
        <div className="addProduct__form-input">
          <span>Release Date:</span>
          <input type='date' placeholder='Release Date'
          onChange={(e)=>setReleaseDate(e.target.value)}/>
        </div>
        <div className="addProduct__form-input">
          <label htmlFor='fileUpload' className='addProduct__form-file'> 
            Choose File
            <input id='fileUpload' className="addProduct__form-input" 
            type="file" title=' ' onChange={handleImage}/>
          </label>
        </div>
        <input type="submit" className="addProduct__form-file"/>
        <button className="addProduct__form-file" onClick={removePreview}>Remove</button>
      </form>
      <div className="addProduct__preview-div">
        {previewImage?(
          <img src={previewImage} alt='' className='addProduct__imagepreview'/>
        ):(
        <span>Image Preview</span>
        )}
      </div>
    </div>
  )
}