import React from 'react';
import Loading from './Loading';

const ImagePreview = (props) => {
    return (
        <div className='flex flex-nowrap'>
        <div className="mt-6 mr-2 bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 ">Original Image</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-64">
                {props.uploadImage ? <img src={props.uploadImage} className="max-w-full max-h-full object-cover" />
                :
                <p className="text-gray-400">No image selected</p>
                }
            </div>
        </div>
        <div className="mt-6 ml-2 bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Enhanced Image</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-64">
            {props.enhanced && !props.loading && (
                <img src={props.enhanced.image || props.enhanced} className="max-w-full max-h-full object-cover" />
            )}
            
            {props.loading ? (<Loading />) : (
                !props.enhanced && <div>
                    <p className="text-gray-400 text-center ">Image not enhanced</p> 
                </div>
            )}
        </div> 
    </div> 
    </div>  
    );
};

export default ImagePreview;