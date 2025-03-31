import { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./imagePreview";
import enhancedImageApi from "../utils/enhancedImageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async(file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        try {
            const enhancedResult = await enhancedImageApi(file);
            setEnhancedImage(enhancedResult);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert('Failed to enhance the image: ' + error.message);
        }
    };

    // Remove this line as it might cause errors if enhancedImage is null
    // console.log(enhancedImage.image);

    return (
        <>
            <ImageUpload UploadImageHandler={UploadImageHandler} />
            <ImagePreview 
                loading={loading}
                uploadImage={uploadImage}
                enhanced={enhancedImage} 
            />
        </>
    )
}

export default Home;