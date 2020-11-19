import React, {useState} from 'react';


export default function AddProduct(){
const [description, setDescription] = useState('');
const [productImage, setProductImage] = useState(null);
const [price, setPrice] = useState(null);
const [releaseDate, setReleaseDate] = useState(null);
// const [sizes, setSizes] = useState(null);

const handleProfileImage = (e) => {
  setProductImage({
    raw: e.target.files[0],
  });
};

  return(
    <div className="addProductWrapper">
      <form className="addProduct__form">
        <input className="addProduct__form-input" type='text' placeholder='Title'/>
        <textarea className="addProduct__form-input" placeholder='Description'/>
        <input className="addProduct__form-input" type='number' placeholder='Price'/>
        <div className="addProduct__form-input">
          <span>Release Date:</span>
          <input type='date' placeholder='Release Date'/>
        </div>
        <div className="addProduct__form-input">
          <input id="addProduct__form-input" type="file" onChange={handleProfileImage}/>
        </div>
      </form>
    </div>
  )
}