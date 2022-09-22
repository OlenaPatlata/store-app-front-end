import Button from 'components/Button';
import Field from 'components/Field';
import { memo } from 'react';
import s from './SubscribeForm.module.scss';

const SubscribeForm = memo(props => {
  return (
    <section className={s.wrapperSubscribe}>
      <div className={s.text}>
        New arrivals. Exclusive previews. First access to sales. Sign up to stay
        in the know.
      </div>
      <form className={s.formSubscribe} onSubmit={props.onSubmit}>
        <Field
          labelText="Email"
          fieldType="email"
          fieldName="email"
          fieldValue={props.values.email}
          hasError={props.errors.email}
          onFieldChange={props.onFieldChange}
          placeholder={props.placeholder}
        />
        <Button type="submit" name="registerBtn" text="Register" />
      </form>
    </section>
  );
});

export default SubscribeForm;
