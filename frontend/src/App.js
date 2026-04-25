import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [fileURL, setFileURL] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    // create preview URL
    setFileURL(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://resume-analyzer-1-f005.onrender.com/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.text();

      setResult(data);
      setShowResult(true); // go to result page

    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  if (showResult) {
    return <ResultPage resultText={result} fileURL={fileURL} />;
  }

  return (
    <LandingPage
      handleFileChange={handleFileChange}
      handleUpload={handleUpload}
    />
  );
}

export default App;