import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface ReviewPayScreenProps {
  onBack: () => void;
  onConfirmPayment: () => void;
}

export const ReviewPayScreen: React.FC<ReviewPayScreenProps> = ({
  onBack,
  onConfirmPayment,
}) => {
  const insets = useSafeAreaInsets();
  const [selectedPayment, setSelectedPayment] = useState('card');

  const priceBreakdown = [
    { label: 'Trip Cost (1 x $1,450)', amount: '$1,450.00' },
    { label: 'Service Fee', amount: '$45.00' },
    { label: 'Travel Protection', amount: '$85.00', optional: true },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.headerButton} onPress={onBack}>
          <Icon name="arrow-back-ios" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review & Pay</Text>
        <View style={styles.headerButton} />
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepLabel}>STEP 3 OF 3</Text>
          <Text style={styles.stepHint}>Final step</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={[styles.progressBar, styles.progressBarActive]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Trip Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip Summary</Text>
          <View style={styles.tripCard}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRxU5U6nvUr8O2KVNwXLrCdaO3zLK7h31DDmUB3pcsd3rMGw5MW8q6IomCM6GQDpzCnyNzus04khpdyU51wd94geOyeWtktCNOnbtWRc_WNdEq1Eh5iYKMB-rnVgIpraNL9HN_xAJexVs2jus6O2o3_Z-NfKtmBT4Oe-DKPpO_gADfNhWO-gZEkGIxzISCpuO6Dabi2G88pXWekmwjLYDBIKT3T47UKNqLU7YUCAqFKmSn_Uki9sIIcXco8GQUrNGUcuUy_ieJkNVN' }}
              style={styles.tripImage}
            />
            <View style={styles.tripDetails}>
              <Text style={styles.tripTitle}>Highlands & Islands Explorer</Text>
              <Text style={styles.tripDate}>Oct 12 - Oct 19, 2024</Text>
              <Text style={styles.tripGuests}>1 Guest</Text>
            </View>
          </View>
        </View>

        {/* Price Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Breakdown</Text>
          <View style={styles.priceCard}>
            {priceBreakdown.map((item, index) => (
              <View key={index} style={styles.priceRow}>
                <View style={styles.priceLabelRow}>
                  <Text style={styles.priceLabel}>{item.label}</Text>
                  {item.optional && (
                    <TouchableOpacity>
                      <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <Text style={styles.priceAmount}>{item.amount}</Text>
              </View>
            ))}
            <View style={styles.divider} />
            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>$1,580.00</Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentOptions}>
            <TouchableOpacity
              style={[styles.paymentOption, selectedPayment === 'card' && styles.paymentOptionSelected]}
              onPress={() => setSelectedPayment('card')}
            >
              <View style={styles.paymentOptionContent}>
                <Icon name="credit-card" size={24} color={selectedPayment === 'card' ? colors.primary : colors.slate500} />
                <View style={styles.paymentOptionText}>
                  <Text style={styles.paymentOptionTitle}>Credit/Debit Card</Text>
                  <Text style={styles.paymentOptionHint}>Visa, Mastercard, Amex</Text>
                </View>
              </View>
              <View style={[styles.radioButton, selectedPayment === 'card' && styles.radioButtonSelected]}>
                {selectedPayment === 'card' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.paymentOption, selectedPayment === 'apple' && styles.paymentOptionSelected]}
              onPress={() => setSelectedPayment('apple')}
            >
              <View style={styles.paymentOptionContent}>
                <Icon name="apple" size={24} color={selectedPayment === 'apple' ? colors.primary : colors.slate500} />
                <View style={styles.paymentOptionText}>
                  <Text style={styles.paymentOptionTitle}>Apple Pay</Text>
                  <Text style={styles.paymentOptionHint}>Fast & secure</Text>
                </View>
              </View>
              <View style={[styles.radioButton, selectedPayment === 'apple' && styles.radioButtonSelected]}>
                {selectedPayment === 'apple' && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Security Notice */}
        <View style={styles.securityNotice}>
          <Icon name="lock" size={20} color={colors.green600} />
          <Text style={styles.securityText}>
            Your payment information is encrypted and secure. We never store your full card details.
          </Text>
        </View>

        <View style={{ height: 200 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing[4] }]}>
        <View style={styles.footerTotal}>
          <Text style={styles.footerTotalLabel}>Total Due</Text>
          <Text style={styles.footerTotalAmount}>$1,580.00</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={onConfirmPayment}>
          <Icon name="lock" size={20} color={colors.textWhite} />
          <Text style={styles.payButtonText}>Confirm & Pay</Text>
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
  stepIndicator: {
    paddingHorizontal: spacing[6],
    paddingBottom: spacing[4],
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
    color: colors.green600,
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
    padding: spacing[4],
  },
  section: {
    marginBottom: spacing[6],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[4],
  },
  tripCard: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceLight,
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
  },
  tripDetails: {
    flex: 1,
    marginLeft: spacing[4],
    justifyContent: 'center',
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  tripDate: {
    fontSize: 14,
    color: colors.slate500,
    marginTop: spacing[1],
  },
  tripGuests: {
    fontSize: 14,
    color: colors.slate500,
  },
  priceCard: {
    backgroundColor: colors.surfaceLight,
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  priceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  priceLabel: {
    fontSize: 14,
    color: colors.slate600,
  },
  removeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.red500,
  },
  priceAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.slate200,
    marginVertical: spacing[3],
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
  },
  paymentOptions: {
    gap: spacing[3],
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceLight,
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: colors.slate200,
  },
  paymentOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  paymentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  paymentOptionText: {},
  paymentOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  paymentOptionHint: {
    fontSize: 12,
    color: colors.slate500,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.slate300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: colors.primary,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  securityNotice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    backgroundColor: colors.green50,
    padding: spacing[4],
    borderRadius: borderRadius.lg,
  },
  securityText: {
    flex: 1,
    fontSize: 14,
    color: colors.green700,
    lineHeight: 20,
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
  footerTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  footerTotalLabel: {
    fontSize: 14,
    color: colors.slate500,
  },
  footerTotalAmount: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  payButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: borderRadius.xl,
    ...shadows.primary,
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default ReviewPayScreen;
