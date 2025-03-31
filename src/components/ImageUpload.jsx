import React from 'react';

const ImageUpload = (props) => {
    
    const ShowImageHandler =(e)=>{
        const file = e.target.files[0];
        if(file){
            props.UploadImageHandler(file);
        }
    };





    return (
        <>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
                <label 
                htmlFor="fileInput"
                className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
                    <span className="text-gray-600">Click to upload an image</span>
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG, GIF up to 10MB</p>
                </label>
                <input 
                    id="fileInput" 
                    type="file" 
                    accept="image/*"
                    className='hidden' 
                    onChange={ShowImageHandler}
                />
            </div>
        </>
    )
}

export default ImageUpload;