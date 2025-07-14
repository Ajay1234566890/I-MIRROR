import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const {height} = Dimensions.get('window');

type LoginSignupNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginSignup'
>;

interface Props {
  navigation: LoginSignupNavigationProp;
}

const LoginSignup: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleContinue = () => {
    setError('');
    
    if (!phoneNumber.trim()) {
      setError('Please enter your mobile number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    // For testing, any 10-digit number is accepted
    navigation.navigate('EnterOTP', {phoneNumber});
  };

  const handlePhoneNumberChange = (text: string) => {
    // Only allow numeric input
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) {
      setPhoneNumber(numericText);
      if (error) setError('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.subtitle}>
                Enter your mobile number to continue
              </Text>
            </View>

            <View style={styles.form}>
              <CustomTextInput
                label="Mobile Number"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                placeholder="Enter 10-digit mobile number"
                keyboardType="numeric"
                maxLength={10}
                error={error}
              />

              <Text style={styles.infoText}>
                You will receive an SMS verification code
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Continue"
                onPress={handleContinue}
                disabled={phoneNumber.length !== 10}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: height * 0.8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  form: {
    alignItems: 'center',
    marginBottom: 40,
  },
  infoText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default LoginSignup;