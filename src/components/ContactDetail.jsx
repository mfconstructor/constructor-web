import React from "react";

const ContactDetail = ({ icon, content, contentType }) => {
  return (
    <div>
      <div className={`flex flex-row p-6 sm:mb-10 mb-2 feedback`}>
        <img src={icon} alt="icon" className="w-[10%] h-[10%] object-contain" />
        <div className="flex-1 flex flex-col ml-3">
          <a href={`${contentType}:${content}`}>
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              {content}
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
