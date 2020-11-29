import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editProduct } from '../store/actions/productActions';
import { useHistory, useParams } from 'react-router-dom';

export default function EditProduct(){
const product = useSelector((state)=> state.product)
const { id } = useParams();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [productImage, setProductImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const [price, setPrice] = useState(null);
const [releaseDate, setReleaseDate] = useState(null);
const dispatch = useDispatch();
const history = useHistory();


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
  if(title && description && productImage && price && releaseDate){
    dispatch(editProduct(product.id, title, description, price, releaseDate, productImage))
    history.push('/admin')
  }
}

if(!product) return <div>no product</div>;

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