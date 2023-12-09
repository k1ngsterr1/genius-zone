import { useState } from "react";

export function useImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreviewUrl("");
  };

  return {
    image,
    previewUrl,
    handleImageChange,
    clearImage,
  };
}

export default useImageUpload;
