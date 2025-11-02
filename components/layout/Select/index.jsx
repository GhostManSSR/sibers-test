import { useState, useRef, useEffect } from "react";
import styles from "@/assets/styles/components/layout/Select.module.css";

const Select = ({ ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const [defaultValue, setValue] = useState(props.defaultValue || "");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const onOptionClick = (option) => {
        props.setCurrentUserName && props.setCurrentUserName(option.title);
        setValue(option.title);
        setOpen(false);
        props.onChange && props.onChange(option);
    };

    return (
        <div className={styles.select__block} ref={dropdownRef}>
      <span
          className={styles.option}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={isOpen}
          tabIndex={0}
          role="button"
      >
        {defaultValue || "Выберите..."}
      </span>

            <div
                className={`${styles.select__scroll} ${
                    isOpen ? styles.open : styles.closed
                }`}
            >
                {isOpen &&
                    props.options?.map((option, key) => (
                        <span
                            key={key}
                            className={
                                option.title === defaultValue
                                    ? styles.option_selected
                                    : styles.option
                            }
                            onClick={() => onOptionClick(option)}
                        >
              {option.title}
            </span>
                    ))}
            </div>
        </div>
    );
};

export default Select;
