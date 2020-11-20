import React, {useState, useEffect} from 'react';


export default function AddProduct(){
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [productImage, setProductImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const [price, setPrice] = useState(null);
const [releaseDate, setReleaseDate] = useState(null);
// const [sizes, setSizes] = useState(null);

const handleProfileImage = (e) => {
  setProductImage({
    raw: e.target.files[0],
  });
};

const previewHandler = (e) => {
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

  return(
    <div className="addProductWrapper">
      <form className="addProduct__form">
        <input className="addProduct__form-input" type='text' 
        onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
        <textarea className="addProduct__form-input" placeholder='Description'/>
        <input className="addProduct__form-input" type='number' placeholder='Price'/>
        <div className="addProduct__form-input">
          <span>Release Date:</span>
          <input type='date' placeholder='Release Date'/>
        </div>
        <div className="addProduct__form-input">
          <label htmlFor='fileUpload' className='addProduct__form-file'> 
            Choose File
            <input id='fileUpload' className="addProduct__form-input" 
            type="file" title=' ' onChange={previewHandler}/>
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