'use client';
import { ChangeEvent, ReactNode, useCallback, useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

type ImagePickerProps = {
  label: ReactNode;
  name: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = useCallback(() => {
    imageInputRef?.current?.click();
  }, []);

  const handleImageChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) {
        setSelectedImage(undefined);
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setSelectedImage(fileReader?.result as string);
      };
      fileReader.readAsDataURL(file);
    },
    []
  );

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image selected</p>}
          {selectedImage && (
            <Image
              src={selectedImage as string}
              alt="The meal image selected by user"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChanged}
          required
        />
        <button className={classes.button} onClick={handleSelectImage}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
