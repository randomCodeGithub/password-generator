import { useEffect, useState } from "react";
import checkboxesData from "./data/checkboxesData";
import "./App.css";
import {
  getLowercase,
  getNumber,
  getSymbol,
  getUppercase,
} from "./utils/helper";
import InputController from "./components/InputController/InputController";
import PasswordOutput from "./components/PasswordOutput/PasswordOutput";
import Btns from "./components/Btns/Btns";
import PasswordSettings from "./components/PasswordSettings/PasswordSettings";

const PasswordGeneratorApp = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [checkboxes, setCheckboxes] = useState([...checkboxesData]);
  const [isAllUnchecked, setIsAllUnchecked] = useState(true);

  useEffect(() => {
    updateAllChecked();
  }, [checkboxes]);

  const updateCheckStatus = (id) => {
    const newArray = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });
    setCheckboxes([...newArray]);
  };

  const updateAllChecked = () => {
    const newAllUnchecked = checkboxes.every((checkbox) => !checkbox.checked);
    setIsAllUnchecked(newAllUnchecked);
  };

  const generatePassword = () => {
    let password = "";

    if (passwordLength > 0) {
      for (let i = password.length; i < passwordLength; i++) {
        const x = generateX();
        password += x;
      }
      setPassword(password);
    }
  };

  function generateX() {
    let xs = [];

    checkboxes.map(({ id, checked }) => {
      if (id === "uppercase" && checked === true) {
        xs = [...xs, getUppercase()];
      }
      if (id === "lowercase" && checked === true) {
        xs = [...xs, getLowercase()];
      }
      if (id === "number" && checked === true) {
        xs = [...xs, getNumber()];
      }
      if (id === "symbol" && checked === true) {
        xs = [...xs, getSymbol()];
      }
    });

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
  }

  const updateLength = (e) => {
    setPasswordLength(e.target.value);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="pw-container">
      <PasswordOutput pw={password} />
      <PasswordSettings
        checkboxes={checkboxes}
        passwordLength={passwordLength}
        handleChanges={{ updateLength, updateCheckStatus }}
      />
      <Btns
        isAllUnchecked={isAllUnchecked}
        isPasswordEmpty={password === ""}
        btnFuncs={{ generatePassword, copyPassword }}
      />
    </div>
  );
};

export default PasswordGeneratorApp;
