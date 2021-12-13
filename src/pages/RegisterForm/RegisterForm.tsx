import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { registration } from 'store/slices/auth';
import { CLIENT_PATHS } from 'constants/constants';
import { registrationFormValidationSchema } from 'utils/validations/registerValidation';
import { IField, registrationFormFields } from 'utils/interfaces/auth';
import { useStyle } from './styles';

interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: FunctionComponent = () => {
  const history = useHistory();
  const classes = useStyle();

  const dispatch = useDispatch();

  const onSubmit = async (
    values: IFormInputs,
    { setSubmitting }: FormikHelpers<IFormInputs>,
  ): Promise<void> => {
    await dispatch(registration(values));
    setSubmitting(false);
    history.push(`${CLIENT_PATHS.catalog}`);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationFormValidationSchema,
    onSubmit,
  });

  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {registrationFormFields.map((field: IField) => {
          return (
            <TextField
              key={field.name}
              fullWidth={field.fullWidth}
              id={field.name}
              name={field.name}
              label={field.name}
              type={field.type}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
              helperText={formik.touched[field.name] && formik.errors[field.name]}
            />
          );
        })}

        <Button
          className={classes.submit}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={formik.isSubmitting}
        >
          submit
        </Button>
      </form>
    </div>
  );
};
