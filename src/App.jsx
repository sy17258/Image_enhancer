import Home from './components/Home';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">AI Image Enhancer</h1>
          <p className="text-lg text-gray-500 mt-2">Upload your image here Powered by HitechIndia</p>
        </div>

        <Home />
        
        <div className="text-sm text-gray-400 mt-8">
          © 2023 HitechIndia. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default App
