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
                            className="button" 
                            type="button"
                        >
                            <div class="button-top">Download Enhanced Image</div>
                            <div class="button-bottom"></div>
                            <div class="button-base"></div>
                        </button>
                    </div>
                )}
            </div> 
        </div>  
    );
};

export default ImagePreviewerer;