import React from 'react';
import './SizeSelect.scss';

export default function SizeSelect() {
  return (
    <select name="size" className="size-select">
      <option value="small">S - 30 MM</option>
      <option value="medium">M - 40 MM</option>
      <option value="large">L - 50 MM</option>
    </select>
  )
}
