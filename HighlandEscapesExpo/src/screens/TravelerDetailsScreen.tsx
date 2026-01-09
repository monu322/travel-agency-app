import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface TravelerDetailsScreenProps {
  onBack: () => void;
  onContinue: () => void;
  onCancel: () => void;
}

export const TravelerDetailsScreen: React.FC<TravelerDetailsScreenProps> = ({
  onBack,
  onContinue,
  onCancel,
}) => {
  const insets = useSafeAreaInsets();
  const [fullName, setFullName] = useState('Alex Johnson');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyRelation, setEmergencyRelation] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.headerButton} onPress={onBack}>
          <MaterialIcons name="arrow-back-ios" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Traveler Details</Text>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepLabel}>STEP 1 OF 3</Text>
          <Text style={styles.stepHint}>Payment next</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Trip Summary Card */}
          <View style={styles.tripCard}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRxU5U6nvUr8O2KVNwXLrCdaO3zLK7h31DDmUB3pcsd3rMGw5MW8q6IomCM6GQDpzCnyNzus04khpdyU51wd94geOyeWtktCNOnbtWRc_WNdEq1Eh5iYKMB-rnVgIpraNL9HN_xAJexVs2jus6O2o3_Z-NfKtmBT4Oe-DKPpO_gADfNhWO-gZEkGIxzISCpuO6Dabi2G88pXWekmwjLYDBIKT3T47UKNqLU7YUCAqFKmSn_Uki9sIIcXco8GQUrNGUcuUy_ieJkNVN' }}
              style={styles.tripImage}
            />
            <View style={styles.tripInfo}>
              <Text style={styles.tripLabel}>SELECTED TRIP</Text>
              <Text style={styles.tripTitle}>Highlands & Islands Explorer</Text>
              <View style={styles.tripDate}>
                <MaterialIcons name="event" size={16} color={colors.slate500} />
                <Text style={styles.tripDateText}>Oct 12 - Oct 19, 2024</Text>
              </View>
            </View>
          </View>

          {/* Section 1: Your Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Information</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color={colors.slate400} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Enter your full name"
                  placeholderTextColor={colors.slate400}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="mail" size={20} color={colors.slate400} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="name@example.com"
                  placeholderTextColor={colors.slate400}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="phone" size={20} color={colors.slate400} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="+1 (555) 000-0000"
                  placeholderTextColor={colors.slate400}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          {/* Section 2: Emergency Contact */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>Emergency Contact</Text>
              <MaterialIcons name="info" size={20} color={colors.primary} />
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, { flex: 2 }]}>
                <Text style={styles.inputLabel}>Contact Name</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, { paddingLeft: spacing[4] }]}
                    value={emergencyName}
                    onChangeText={setEmergencyName}
                    placeholder="Contact name"
                    placeholderTextColor={colors.slate400}
                  />
                </View>
              </View>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.inputLabel}>Relation</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, { paddingLeft: spacing[4] }]}
                    value={emergencyRelation}
                    onChangeText={setEmergencyRelation}
                    placeholder="e.g. Partner"
                    placeholderTextColor={colors.slate400}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Emergency Phone</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="phone" size={20} color={colors.slate400} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  value={emergencyPhone}
                  onChangeText={setEmergencyPhone}
                  placeholder="Emergency phone number"
                  placeholderTextColor={colors.slate400}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          {/* Section 3: Special Requests */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Special Requests <Text style={styles.optionalText}>(Optional)</Text>
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Medical or Dietary Notes</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  value={specialRequests}
                  onChangeText={setSpecialRequests}
                  placeholder="Please list any allergies, dietary restrictions (e.g. Vegetarian, Gluten-free), or medical conditions we should be aware of."
                  placeholderTextColor={colors.slate400}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>
            </View>
          </View>

          <View style={{ height: 200 }} />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Sticky Footer */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing[4] }]}>
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAgreedToTerms(!agreedToTerms)}
        >
          <View style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}>
            {agreedToTerms && <MaterialIcons name="check" size={16} color={colors.textWhite} />}
          </View>
          <Text style={styles.checkboxText}>
            I agree to the <Text style={styles.termsLink}>Terms & Cancellation Policy</Text> for this booking.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.continueButton, !agreedToTerms && styles.continueButtonDisabled]}
          onPress={onContinue}
          disabled={!agreedToTerms}
        >
          <Text style={styles.continueButtonText}>Continue to Payment</Text>
          <MaterialIcons name="arrow-forward" size={24} color={colors.textWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[2],
    backgroundColor: colors.backgroundLight,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  stepIndicator: {
    paddingHorizontal: spacing[6],
    paddingBottom: spacing[4],
    backgroundColor: colors.backgroundLight,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 1,
  },
  stepHint: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.slate400,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.slate200,
    borderRadius: borderRadius.full,
  },
  progressBarActive: {
    backgroundColor: colors.primary,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
  },
  tripCard: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceLight,
    padding: spacing[3],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.slate100,
    marginBottom: spacing[6],
    ...shadows.sm,
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
  },
  tripInfo: {
    flex: 1,
    marginLeft: spacing[4],
    justifyContent: 'center',
  },
  tripLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing[1],
  },
  tripDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  tripDateText: {
    fontSize: 14,
    color: colors.slate500,
  },
  section: {
    marginBottom: spacing[6],
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[4],
    paddingHorizontal: spacing[1],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[4],
    paddingHorizontal: spacing[1],
  },
  optionalText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.slate400,
  },
  inputGroup: {
    marginBottom: spacing[4],
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate700,
    marginBottom: spacing[1.5],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.slate50,
    borderWidth: 1,
    borderColor: colors.slate200,
    borderRadius: borderRadius.lg,
    height: 48,
    ...shadows.sm,
  },
  inputIcon: {
    marginLeft: spacing[4],
  },
  input: {
    flex: 1,
    height: '100%',
    paddingLeft: spacing[3],
    paddingRight: spacing[4],
    fontSize: 16,
    color: colors.textPrimary,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  textAreaContainer: {
    backgroundColor: colors.slate50,
    borderWidth: 1,
    borderColor: colors.slate200,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  textArea: {
    padding: spacing[4],
    minHeight: 100,
    fontSize: 16,
    color: colors.textPrimary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surfaceLight,
    borderTopWidth: 1,
    borderTopColor: colors.slate100,
    padding: spacing[4],
    ...shadows.lg,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.slate300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: colors.slate600,
    lineHeight: 20,
  },
  termsLink: {
    color: colors.primary,
    fontWeight: '700',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: borderRadius.xl,
    ...shadows.primary,
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default TravelerDetailsScreen;
