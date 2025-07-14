import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import CustomButton from '../components/CustomButton';
import OTPInput from '../components/OTPInput';

const {height} = Dimensions.get('window');

type EnterOTPNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EnterOTP'
>;

type EnterOTPRouteProp = RouteProp<RootStackParamList, 'EnterOTP'>;

interface Props {
  navigation: EnterOTPNavigationProp;
  route: EnterOTPRouteProp;
}

const EnterOTP: React.FC<Props> = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const {phoneNumber} = route.params;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue);
  };

  const handleVerify = () => {
    if (otp.length === 4) {
      // For testing, any 4-digit OTP is accepted
      navigation.navigate('Dashboard');
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      setOtp('');
      // In a real app, you would resend the OTP here
    }
  };

  const formatPhoneNumber = (number: string) => {
    return `+91 ${number.slice(0, 5)} ${number.slice(5)}`;
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
              <Text style={styles.title}>Enter OTP</Text>
              <Text style={styles.subtitle}>
                We've sent a 4-digit code to{'\n'}
                <Text style={styles.phoneNumber}>
                  {formatPhoneNumber(phoneNumber)}
                </Text>
              </Text>
            </View>

            <View style={styles.otpContainer}>
              <OTPInput
                length={4}
                onComplete={handleOTPComplete}
                value={otp}
                onChange={setOtp}
              />
            </View>

            <View style={styles.resendContainer}>
              {!canResend ? (
                <Text style={styles.timerText}>
                  Resend code in {timer}s
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendText}>Resend Code</Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Verify OTP"
                onPress={handleVerify}
                disabled={otp.length !== 4}
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
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  phoneNumber: {
    fontWeight: '600',
    color: '#74a4ee',
  },
  otpContainer: {
    marginBottom: 30,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 14,
    color: '#888888',
  },
  resendText: {
    fontSize: 16,
    color: '#74a4ee',
    fontWeight: '600',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default EnterOTP;