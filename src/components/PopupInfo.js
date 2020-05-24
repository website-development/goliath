import React, { useState } from "react";

const PopupInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="enrichment__icon"
        src="/icons/info-icon.svg"
        alt="info icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="popupinfo">
          <div className="popupinfo__header">
            <div style={{ display: "flex" }}>
              <img
                className="popupinfo__icon"
                src="/icons/info-icon.svg"
                alt="info icon"
              />
              <h2 className="popupinfo__title">lorem ipsum</h2>
            </div>
            <img
              src="/icons/cross-icon.svg"
              style={{ cursor: "pointer" }}
              alt="cross icon"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="popupinfo__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            facilisi enim amet, egestas mi mi, vulputate donec at. Facilisis
            lectus velit ut et libero. Felis volutpat venenatis ac senectus id
            pulvinar suscipit aenean interdum. Pretium arcu viverra ut nibh
            egestas. Interdum elit vitae egestas turo. Felis volutpat venenatis
            ac senectus id pulvinar suscipit aenean interdum. Pretium arcu
            viverra ut nibh egestas. Interdum elit vitae egestas turpis
            scelerisque ultricies molestie ultricies. Nec consectetur nunc
            egestas imperdiet phasellus. Eu, ipsum varius suspendisse sed lectus
            purus at. Elementum in nisl enim lectus congue quisque turpis eros.
            Consectetur tincidunt urna aenean augue.
          </div>
        </div>
      )}
    </>
  );
};

export default PopupInfo;
