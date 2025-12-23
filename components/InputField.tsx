import { colors } from '@/constants';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  variant?: 'filled' | 'standard' | 'outlined';
}

function InputField({ label, variant = 'filled', ...props }: InputFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.Container, styles[variant]]}>
        <TextInput placeholderTextColor={colors.GRAY_500} style={styles.input} {...props} />
      </View>
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  Container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.GRAY_700,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: {
    flex: 1,
    padding: 0,
    fontSize: 16,
  },
});
