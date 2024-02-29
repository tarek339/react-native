import axios from 'axios';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Navigate} from '../../types/types';
import useDispatches from '../../hooks/useDispatches';
import {Text, View} from 'react-native';

const VerifyAccount = () => {
  const {dispatchUser} = useDispatches();
  const navigation: Navigate = useNavigation();
  // const token = AsyncStorage.getItem("token");

  const verify = async () => {
    try {
      const res = await axios.post('/users/verify-account', {
        // token: token
      });
      dispatchUser(res.data);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verify();
  }, [navigation]);

  return (
    <View>
      <Text>VERIFY YOUR EMAIL</Text>
    </View>
  );
};

export default VerifyAccount;
