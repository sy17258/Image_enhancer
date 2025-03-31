import React from 'react';
import Loading from './Loading';

const ImagePreviewerer = (props) => {
    // Function to handle image download
    const handleDownload = () => {
        if (props.enhanced && (props.enhanced.image || props.enhanced)) {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = props.enhanced.image || props.enhanced;
            link.download = 'enhanced-image.jpg'; // Default filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className='flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto'>
            <div className="mt-4 backdrop-blur-sm bg-white/20 shadow-lg rounded-2xl p-4 w-full border border-pink-300/30">
                <h2 className="text-lg md:text-xl font-semibold text-center text-white mb-2">Original Image</h2>
                <div className="border-2 border-dashed border-pink-300/50 rounded-lg p-2 flex items-center justify-center h-48 md:h-64">
                    {props.uploadImage ? <img src={props.uploadImage} className="max-w-full max-h-full object-contain" alt="Original" />
                    :
                    <p className="text-blue-200">No image selected</p>
                    }
                </div>
            </div>
            <div className="mt-4 backdrop-blur-sm bg-white/20 shadow-lg rounded-2xl p-4 w-full border border-blue-300/30">
                <h2 className="text-lg md:text-xl font-semibold text-center text-white mb-2">Enhanced Image</h2>
                <div className="border-2 border-dashed border-blue-300/50 rounded-lg p-2 flex items-center justify-center h-48 md:h-64">
                    {props.enhanced && !props.loading && (
                        <img src={props.enhanced.image || props.enhanced} className="max-w-full max-h-full object-contain" alt="Enhanced" />
                    )}
                    
                    {props.loading ? (<Loading />) : (
                        !props.enhanced && <div>
                            <p className="text-blue-200 text-center">Image not enhanced</p> 
                        </div>
                    )}
                </div> 
                
                {/* Download button - only visible when enhanced image is available */}
                {props.enhanced && !props.loading && (
                    <div className="mt-3 flex justify-center">
                        <button 
                            onClick={handleDownload}
                            className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center text-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Enhanced Image
                        </button>
                    </div>
                )}
            </div> 
        </div>  
    );
};

export default ImagePreviewerer;