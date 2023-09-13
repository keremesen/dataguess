import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string | number;
  setValue: (value: string ) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, setValue }) => {
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={type}
      className="text-gray-700 border font-semibold placeholder:text-gray-700 border-gray-700 outline-none p-2 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
