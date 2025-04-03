
import axios from 'axios';

const API_KEY = "wx2bmd9bxbjjgzb8c"; // Make sure this is your correct API key
const BASE_URL = "https://techhk.aoscdn.com";

const enhancedImageApi = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded successfully, Task ID:", taskId);
        
        const enhancedImage = await pollForEnhancedImage(taskId); 
        console.log("Enhanced Image:", enhancedImage);

        return enhancedImage;
    } catch (error) {
        console.error("Error enhancing image", error.message);
        throw error;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    try {
        const response = await axios.post(
            `${BASE_URL}/api/tasks/visual/scale`, 
            formData, 
            {
                headers: {
                    "X-API-KEY": API_KEY,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        
        console.log("API Response:", response.data); // Log the full response for debugging
        
        // Check if the response has the expected structure
        if (!response.data || !response.data.data || !response.data.data.task_id) {
            throw new Error("Task ID not found in response: " + JSON.stringify(response.data));
        }
        
        return response.data.data.task_id;
    } catch (error) {
        console.error("Upload error:", error.response ? error.response.data : error.message);
        throw error;
    }
};

const fetchEnhancedImage = async (taskId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/tasks/visual/scale/${taskId}`, 
            {
                headers: {
                    "X-API-KEY": API_KEY,
                },
            }
        );
        
        console.log("Fetch response:", response.data);
        
        if (!response.data) {
            return null;
        }
        
        return response.data.data;
    } catch (error) {
        console.error("Fetch error:", error.response ? error.response.data : error.message);
        throw error;
    }
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
    if (retries >= 20) {
        throw new Error("Max retries reached");
    }
    
    const result = await fetchEnhancedImage(taskId);
    
    // If we have the image, return it
    if (result && result.image) {
        return result;
    }
    
    console.log("Processing... Attempt:", retries + 1);
    
    // Wait 5 seconds before trying again
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Recursive call with incremented retry count
    return pollForEnhancedImage(taskId, retries + 1);
};

export default enhancedImageApi;
