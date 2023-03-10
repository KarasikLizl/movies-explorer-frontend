import { useCallback, useState, useEffect } from 'react';
import { emailRegExp, nameRegEx } from '../utils/constants';

export const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [targetValue, setTargetValue] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setTargetValue(target);
  };

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(emailRegExp);
  };
  const validateName = (n) => {
    return String(n).match(nameRegEx);
  };

  useEffect(() => {
    setIsValid(Boolean(values.email && validateEmail(values.email)));
    setIsValidName(
      Boolean(values.name) &&
        validateName(values.name) &&
        targetValue.checkValidity()
    );
    setIsValidPassword(Boolean(values.password));
  }, [values, targetValue]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    isValidName,
    isValidPassword,
  };
};
