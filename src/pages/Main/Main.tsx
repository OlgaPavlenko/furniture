import { TOGGLE_BUTTONS_IMG } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'sharedComponents/Button';
import { Filter } from 'sharedComponents/Filter';
import { Routing } from 'sharedComponents/LanguageButtons/Layout/Routing';
import { isListVeiwSelector } from 'store/selectors/product';
import { setIsListVeiw } from 'store/slices/product';

import { useStyle } from './styles';

export const Main = () => { 
  const classes = useStyle();
  const dispatch = useDispatch();
  const isListVeiw = useSelector(isListVeiwSelector);

  const catalogViewToggle = () => {
    dispatch(setIsListVeiw());
  };
  return (
    <div className={classes.main}>
      <Filter />
      <Routing />
      <Button
        badgeSrc={isListVeiw ? TOGGLE_BUTTONS_IMG.menu : TOGGLE_BUTTONS_IMG.list}
        onClick={catalogViewToggle}
        className={classes.viewToggler}
      />
    </div>
  );
};
