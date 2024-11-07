"use client";
import React, { useState, useEffect } from 'react';
import ImageSelection from './_components/ImageSelection';
import RoomType from './_components/RoomType';
import DesignType from './_components/DesignType';
import AdditionalReq from './_components/AdditionalReq';
import { Button } from '@/components/ui/button';
import { FaCheckCircle } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function CreateNew() {
  const [formData, setFormData] = useState({
    image: '',
    roomType: '',
    designType: '',
    additionalReq: '',
  });

  const [generatedImage, setGeneratedImage] = useState(null);
  const [formError, setFormError] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClientSide, setIsClientSide] = useState(false);

  const router = useRouter();  // Unconditionally call useRouter

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setFormError((prev) => ({
      ...prev,
      [fieldName]: !value && fieldName !== 'additionalReq' ? 'This field is required' : '',
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== 'additionalReq') {
        errors[field] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    setGeneratedImage(formData.image);
    setIsSuccess(true);
  };

  const isButtonDisabled = !formData.image || !formData.roomType || !formData.designType;

  const handleBackClick = () => {
    if (isClientSide) {
      router.back();
    }
  };

  const handleDownload = () => {
    if (!generatedImage) {
      console.error("No image available for download.");
      return;
    }
  
    const link = document.createElement('a');
  
    // If `generatedImage` is a string and starts with "data:image", use it directly; otherwise, fallback to a static image
    const imageUrl = typeof generatedImage === 'string' && generatedImage.startsWith('data:image')
      ? generatedImage
      : '/redesign.jpeg';
  
    link.href = imageUrl;
    link.download = `${formData.roomType}-${formData.designType || 'design'}-redesign.jpeg`; // Custom filename
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2 px-4 md:px-8 lg:px-12">
      <h3 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-4 text-center">
        Designed with AI...
      </h3>

      {isSuccess ? (
        <div className="flex flex-col items-center mt-5 w-full max-w-lg px-4">
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg md:text-xl text-gray-800">Room Type: {formData.roomType}</h3>
            <h4 className="font-semibold text-md md:text-lg text-gray-600">Design Type: {formData.designType}</h4>
          </div>

          <div className="mb-4 w-full flex justify-center">
            <div className="relative">
              <img
                src={'/redesign.jpeg'}
                 alt="Generated room design showcasing a modern style with a functional layout"
                className="w-full max-w-[400px] rounded-lg shadow-lg"
              />
              <button
                onClick={handleDownload}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full shadow-lg"
              >
                <FaDownload />
              </button>
            </div>
          </div>

          <h2 className="font-bold text-2xl md:text-3xl text-center text-green-600 mb-4">
            Successfully Redesigned!
          </h2>
          <p className="text-center text-gray-500 mb-6">Your room has been successfully remodeled by AI!</p>
          <FaCheckCircle className="text-green-500 text-4xl md:text-5xl mb-4" />
          <Button className="w-full max-w-xs mt-3 mb-5" onClick={handleBackClick}>
            Back to previous page
          </Button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <h2 className="font-bold text-2xl md:text-3xl text-center text-purple-600">
            Experience the Magic of AI Remodeling
          </h2>
          <p className="text-center text-gray-400 mt-2 mb-4">
            Transform any room with a click! Select a space, choose a style, and watch AI remake your environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />
              {formError.image && <p className="text-red-500 text-sm">{formError.image}</p>}
            </div>

            <div>
              <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
              {formError.roomType && <p className="text-red-500 text-sm">{formError.roomType}</p>}

              <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />
              {formError.designType && <p className="text-red-500 text-sm">{formError.designType}</p>}

              <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />

              <Button
                className="w-full mt-6 mb-4"
                onClick={handleGenerate}
                disabled={isButtonDisabled}
              >
                Generate
              </Button>

              <p className="text-sm text-gray-400 text-center">
                NOTE: 1 credit will be used to redesign your room
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateNew;
