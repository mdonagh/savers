import AsyncStorage from '@react-native-community/async-storage';

export const getSession = async () => {
  try {
    const session = await AsyncStorage.getItem('session');
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    return { session, email, password };
  } catch (error) {
    // Error
  }
};

export const createSession = async (email, password) => {
  try {
    await AsyncStorage.setItem('session', '1');
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
  } catch (error) {
    // Error logging in
  }
};

export const deleteSession = async () => {
  try {
    await AsyncStorage.setItem('session', '0');
    await AsyncStorage.setItem('email', '');
    await AsyncStorage.setItem('password', '');
  } catch (error) {
    // Error logging out
  }
};
