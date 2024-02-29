import {SafeAreaView, StatusBar} from 'react-native';
import {style} from '../assets/theme/styles';
import useDarkMode from '../hooks/useDarkMode';
import {SafeAreaProps} from '../types/interfaces/screens/interfaces';
import useDispatches from '../hooks/useDispatches';
import useSelectors from '../hooks/useSelector';
import {useEffect} from 'react';
import axios from 'axios';

const SafeArea = ({children}: SafeAreaProps) => {
  const {colors, statusBar} = useDarkMode();
  const {dispatchUser} = useDispatches();
  const {user, emailVerified} = useSelectors();

  const getUser = async () => {
    try {
      const res = await axios.get('/users/profile');
      dispatchUser(res.data);
    } catch (error) {
      dispatchUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, [dispatchUser, user, emailVerified]);

  return (
    <SafeAreaView
      style={[style.container, {backgroundColor: colors.background}]}>
      <StatusBar
        barStyle={statusBar}
        translucent={true}
        backgroundColor="transparent"
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
