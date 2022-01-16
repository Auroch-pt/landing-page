import "./Accordion.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="faqs__rectangle" onClick={() => setOpen(!isOpen)}>
      <div className="faqs__question">
        <h5 className={isOpen ? "faqs__question--bold" : "faqs__question--default"}>
          {props.question}
        </h5>
        {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
      </div>
      <p className={isOpen ? "faqs__answer--expanded" : "faqs__answer--collapsed"}>
        {props.answer}
      </p>
    </div>
  );
};

export default Accordion;
