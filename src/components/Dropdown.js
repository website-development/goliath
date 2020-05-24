import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const options = [
    {
      label: "Total cobro",
      value: "totalCobro",
    },
    {
      label: "Another option",
      value: "anotherOption",
    },
  ];

  const onSelect = (value) => {
    setOpen(!isOpen);
    return value;
  };

  return (
    <div className="dropdown">
      <span className="dropdown__title" onClick={() => setOpen(!isOpen)}>
        Select other view
      </span>

      {isOpen ? (
        <div className="dropdown__menu">
          {options.map((opt) => (
            <span
              className="dropdown__option"
              onClick={() => onSelect(opt.value)}
            >
              {opt.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
