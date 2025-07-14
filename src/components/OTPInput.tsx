import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

const {width} = Dimensions.get('window');

interface OTPInputProps {
  length: number;
  onComplete: (otp: string) => void;
  value: string;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length,
  onComplete,
  value,
  onChange,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    const otpArray = value.split('').concat(new Array(length).fill('')).slice(0, length);
    setOtp(otpArray);
  }, [value, length]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    const otpString = newOtp.join('');
    onChange(otpString);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (otpString.length === length) {
      onComplete(otpString);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter 4-digit OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              if (ref) inputs.current[index] = ref;
            }}
            style={[
              styles.otpInput,
              digit ? styles.otpInputFilled : null,
            ]}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key, index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
            autoFocus={index === 0}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.7,
    maxWidth: 280,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#e1e1e1',
    borderRadius: 12,
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  otpInputFilled: {
    borderColor: '#74a4ee',
    backgroundColor: '#ffffff',
  },
});

export default OTPInput;