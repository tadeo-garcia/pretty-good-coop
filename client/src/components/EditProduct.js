import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editProduct, loadProduct } from '../store/actions/productActions';
import { useHistory, useParams } from 'react-router-dom';

export default function EditProduct(){
const product = useSelector((state)=> state.products)
const { id } = useParams();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [productImage, setProductImage] = useState(null);
const [previewImage, setPreviewImage] = useState(null);
const [price, setPrice] = useState(null);
const [releaseDate, setReleaseDate] = useState(null);
const dispatch = useDispatch();
const history = useHistory();

useEffect(()=>{
  dispatch(loadProduct(id))
},[id])

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
    <div className="editProductWrapper">
      <form className="editProduct__form" onSubmit={handleSubmit}>
        <input className="editProduct__form-input" type='text' 
        onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
        <textarea className="editProduct__form-input" 
        onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
        <input className="editProduct__form-input" type='number'
        onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/>
        <div className="editProduct__form-input">
          <span>Release Date:</span>
          <input type='date' placeholder='Release Date'
          onChange={(e)=>setReleaseDate(e.target.value)}/>
        </div>
        <div className="editProduct__form-input">
          <label htmlFor='fileUpload' className='editProduct__form-file'> 
            Choose File
            <input id='fileUpload' className="editProduct__form-input" 
            type="file" title=' ' onChange={handleImage}/>
          </label>
        </div>
        <input type="submit" className="editProduct__form-file"/>
        <button className="editProduct__form-file" onClick={removePreview}>Remove</button>
      </form>
      <div className="editProduct__preview-div">
        {previewImage?(
          <img src={previewImage} alt='' className='editProduct__imagepreview'/>
        ):(
        <span>Image Preview</span>
        )}
      </div>
    </div>
  )
}