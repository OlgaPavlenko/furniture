import { FunctionComponent } from 'react';
import { Routes } from 'sharedComponents/Layout/Routes';
import { useStyle } from './styles';

export const Main: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.main}>
      <Routes />
    </div>
  );
};
