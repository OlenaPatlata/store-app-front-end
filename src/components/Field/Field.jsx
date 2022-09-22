import { memo, useCallback } from 'react';
import s from './Field.module.scss';

const Field = memo(props => {
  const {
    fieldName,
    onFieldChange,
    labelText,
    fieldType,
    fieldValue,
    hasError,
    placeholder,
  } = props;
  const onFieldHandleChange = useCallback(
    event => {
      onFieldChange(fieldName, event.target.value);
    },
    [onFieldChange, fieldName]
  );

  return (
    <fieldset className={s[fieldName]}>
      <input
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onChange={onFieldHandleChange}
        value={fieldValue}
        className={s.field}
        placeholder={placeholder}
      />
      {hasError && (
        <p
          className={s.error}
        >{`Please fill in correct value for "${labelText}".`}</p>
      )}
    </fieldset>
  );
});

export default Field;
