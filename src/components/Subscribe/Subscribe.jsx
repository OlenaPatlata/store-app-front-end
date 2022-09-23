import { memo, useCallback, useState } from 'react';
import * as yup from 'yup';
import update from 'immutability-helper';
import SubscribeForm from 'components/SubscribeForm';

const formSubscribeSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const Subscribe = memo(() => {
  const [values, setValues] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: false,
  });

  const onFieldChange = useCallback((fieldName, value) => {
    setValues(prevValues =>
      update(prevValues, {
        [fieldName]: {
          $set: value,
        },
      })
    );
  }, []);

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      const isFormValid = await formSubscribeSchema.isValid(values, {
        abortEarly: false,
      });
      if (isFormValid) {
        console.log('Form Subscribe is legit');
        console.log(values);
      } else {
        formSubscribeSchema
          .validate(values, { abortEarly: false })
          .catch(err => {
            const errors = err.inner.reduce((acc, error) => {
              return {
                ...acc,
                [error.path]: true,
              };
            }, {});

            setErrors(prevErrors =>
              update(prevErrors, {
                $set: errors,
              })
            );
          });
      }
    },
    [values]
  );

  return (
    <SubscribeForm
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
      placeholder="Your email address"
    />
  );
});

export default Subscribe;
