import React from "react";
import { useState, useEffect } from "react";
// import Avatar from 'react-avatar-edit';

import './SetProfilePic.css'

function SetProfilePic() {
  //stste เก็บรูป
  const [images, setImages] = useState([]);
  //state เก็บ URL
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return; //ถ้าไม่ได้เลือกรูปให้หยุดทำงาน
    const newImageURLs = []; //ถ้ามีการเลือก
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image))); //ให้ลูปและ push รุปที่เปลี่ยนเป็น URL เข้า []
    setImageURLs(newImageURLs);
  }, [images]); //rerender ใหม่ทุกครั้งเมื่อมีการอัพรูปใหม่ -> อัพได้รูปเดียว

  //ให้ set ไฟล์เข้าไปใน setStage เมื่อ user upload
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const stylePicPreview = {
    height: '150px',
    width: '150px',
    borderRadius: '50%'
  }

//try 
  // const [ src, setSrc ] = useState(null)
  // const [ perview, setPerview ] = useState(null);

  // const onClose = () => {
  //   setPerview(null)
  // }

  // const onCrop = view => {
  //   setPerview(view)
  // }


  return (
    
    <div className="container-setpic">

      {/* <Avatar
        width={400}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
      /> */}
      <input type="file" onChange={onImageChange}/>
      {imageURLs.map((imgSrc) => (
        <img className="img-picprofile" src={imgSrc} style={stylePicPreview} alt/>
      ))}
    </div>
  );
}

export default SetProfilePic;
