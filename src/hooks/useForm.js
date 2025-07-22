import { useCallback, useState } from 'react';

const useForm = (fields = {}) => {
  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState({});

  const clearErrors = useCallback(() => setErrors({}), []);

  const alter = useCallback(
    val => setForm(prevState => ({ ...prevState, ...val })),
    [],
  );
  const setError = useCallback(
    val => setErrors(prevState => ({ ...prevState, ...val })),
    [],
  );

  return {
    alter,
    clearErrors,
    errors,
    form,
    original: fields,
    setError,
  };
};

export default useForm;
