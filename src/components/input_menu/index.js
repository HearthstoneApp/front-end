import React from 'react';

export default function InputMenu({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="input-menu"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
