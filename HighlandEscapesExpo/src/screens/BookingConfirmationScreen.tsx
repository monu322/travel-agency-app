import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface BookingConfirmationScreenProps {
  onViewTrip: () => void;
  onBackToHome: () => void;
}

export const BookingConfirmationScreen: React.FC<BookingConfirmationScreenProps> = ({
  onViewTrip,
  onBackToHome,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + spacing[8] }]}
      >
        {/* Success Icon */}
        <View style={styles.successContainer}>
          <View style={styles.successCircle}>
            <MaterialIcons name="check" size={48} color={colors.textWhite} />
          </View>
          <Text style={styles.successTitle}>Booking Confirmed!</Text>
          <Text style={styles.successSubtitle}>
            Your Scottish adventure awaits. Check your email for confirmation details.
          </Text>
        </View>

        {/* Booking Details Card */}
        <View style={styles.bookingCard}>
          <View style={styles.bookingHeader}>
            <Text style={styles.bookingNumber}>Booking #HT-2024-7841</Text>
            <View style={styles.confirmedBadge}>
              <MaterialIcons name="verified" size={14} color={colors.green600} />
              <Text style={styles.confirmedText}>Confirmed</Text>
            </View>
          </View>

          <View style={styles.tripPreview}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRxU5U6nvUr8O2KVNwXLrCdaO3zLK7h31DDmUB3pcsd3rMGw5MW8q6IomCM6GQDpzCnyNzus04khpdyU51wd94geOyeWtktCNOnbtWRc_WNdEq1Eh5iYKMB-rnVgIpraNL9HN_xAJexVs2jus6O2o3_Z-NfKtmBT4Oe-DKPpO_gADfNhWO-gZEkGIxzISCpuO6Dabi2G88pXWekmwjLYDBIKT3T47UKNqLU7YUCAqFKmSn_Uki9sIIcXco8GQUrNGUcuUy_ieJkNVN' }}
              style={styles.tripImage}
            />
            <View style={styles.tripInfo}>
              <Text style={styles.tripTitle}>Highlands & Islands Explorer</Text>
              <View style={styles.tripMeta}>
                <MaterialIcons name="event" size={16} color={colors.slate500} />
                <Text style={styles.tripMetaText}>Oct 12 - Oct 19, 2024</Text>
              </View>
              <View style={styles.tripMeta}>
                <MaterialIcons name="person" size={16} color={colors.slate500} />
                <Text style={styles.tripMetaText}>1 Guest</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.paymentSummary}>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Total Paid</Text>
              <Text style={styles.paymentAmount}>$1,580.00</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Payment Method</Text>
              <View style={styles.paymentMethod}>
                <MaterialIcons name="credit-card" size={16} color={colors.slate500} />
                <Text style={styles.paymentMethodText}>•••• 4242</Text>
              </View>
            </View>
          </View>
        </View>

        {/* What's Next Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What's Next?</Text>
          <View style={styles.nextSteps}>
            <View style={styles.stepItem}>
              <View style={styles.stepIcon}>
                <MaterialIcons name="mail" size={20} color={colors.primary} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Check Your Email</Text>
                <Text style={styles.stepDescription}>Confirmation and receipt sent to your email</Text>
              </View>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepIcon}>
                <MaterialIcons name="calendar-today" size={20} color={colors.primary} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Save the Date</Text>
                <Text style={styles.stepDescription}>Add to calendar and prepare for departure</Text>
              </View>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepIcon}>
                <MaterialIcons name="description" size={20} color={colors.primary} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Trip Documents</Text>
                <Text style={styles.stepDescription}>Detailed itinerary will be available 2 weeks before</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton} onPress={onViewTrip}>
            <Text style={styles.primaryButtonText}>View My Trip</Text>
            <MaterialIcons name="arrow-forward" size={20} color={colors.textWhite} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={onBackToHome}>
            <Text style={styles.secondaryButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: insets.bottom + spacing[4] }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollContent: {
    padding: spacing[4],
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.green500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
    ...shadows.lg,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing[2],
  },
  successSubtitle: {
    fontSize: 16,
    color: colors.slate500,
    textAlign: 'center',
    paddingHorizontal: spacing[4],
    lineHeight: 24,
  },
  bookingCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    padding: spacing[5],
    borderWidth: 1,
    borderColor: colors.slate100,
    marginBottom: spacing[6],
    ...shadows.md,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  bookingNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.slate500,
  },
  confirmedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    backgroundColor: colors.green50,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  confirmedText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.green600,
  },
  tripPreview: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
  },
  tripInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[2],
  },
  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    marginBottom: spacing[1],
  },
  tripMetaText: {
    fontSize: 14,
    color: colors.slate500,
  },
  divider: {
    height: 1,
    backgroundColor: colors.slate200,
    marginVertical: spacing[4],
  },
  paymentSummary: {
    gap: spacing[3],
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 14,
    color: colors.slate500,
  },
  paymentAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  paymentMethodText: {
    fontSize: 14,
    color: colors.slate600,
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
  nextSteps: {
    gap: spacing[4],
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[4],
  },
  stepIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing[0.5],
  },
  stepDescription: {
    fontSize: 14,
    color: colors.slate500,
    lineHeight: 20,
  },
  actions: {
    gap: spacing[3],
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: borderRadius.xl,
    ...shadows.primary,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textWhite,
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.slate200,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.slate600,
  },
});

export default BookingConfirmationScreen;
