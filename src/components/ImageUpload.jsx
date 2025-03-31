import React from 'react';

const ImageUpload = (props) => {
    
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            props.UploadImageHandler(file);
        }
    };

    return (
        <>
            <div className="backdrop-blur-sm bg-white/20 shadow-lg rounded-2xl p-4 w-full max-w-md mx-auto border border-blue-300/30">
                <label 
                htmlFor="fileInput"
                className='block w-full cursor-pointer border-2 border-dashed border-blue-300/50 rounded-lg p-4 text-center hover:border-blue-400 hover:bg-blue-500/10 transition-all'>
                    <span className="text-white font-medium">Click to upload an image</span>
                    <p className="text-xs text-blue-200 mt-2">PNG, JPG, GIF up to 10MB</p>
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