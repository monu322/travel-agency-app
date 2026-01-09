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

interface MyTripsScreenProps {
  onTripPress: (tripId: string) => void;
}

const upcomingTrips = [
  {
    id: '1',
    title: 'Highlands & Islands Explorer',
    dates: 'Oct 12 - Oct 19, 2024',
    daysUntil: 45,
    status: 'confirmed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRxU5U6nvUr8O2KVNwXLrCdaO3zLK7h31DDmUB3pcsd3rMGw5MW8q6IomCM6GQDpzCnyNzus04khpdyU51wd94geOyeWtktCNOnbtWRc_WNdEq1Eh5iYKMB-rnVgIpraNL9HN_xAJexVs2jus6O2o3_Z-NfKtmBT4Oe-DKPpO_gADfNhWO-gZEkGIxzISCpuO6Dabi2G88pXWekmwjLYDBIKT3T47UKNqLU7YUCAqFKmSn_Uki9sIIcXco8GQUrNGUcuUy_ieJkNVN',
  },
];

const pastTrips = [
  {
    id: '2',
    title: 'Edinburgh City Break',
    dates: 'May 5 - May 8, 2024',
    status: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCekYe22-b46d5cdvDcbn06oB8UdXk7Juhz83cHkIe05VttVLK770DC9NtXJzVsP3VlGkcFrj0ERtI_BFgAJPeljAcO9-N99omqLDTnZytqdG8SGlNkWtsSEdTNP4Un1B5dc8ufKUGdNXBudai0qQC3asYUCUJdJajovXID8AAfYLQ_gcCI1T4OKxo9Sr3kqnMMbnTIgAEdXO0Jgh58WR6VA7aqp-U0HoJlgKYTkydc7X0QWKZo4sMP4rTlWDkYihksgUyEOOE0QzkI',
  },
];

export const MyTripsScreen: React.FC<MyTripsScreenProps> = ({ onTripPress }) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing[2] }]}>
        <Text style={styles.headerTitle}>My Trips</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <Icon name="calendar-today" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.tabActive]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.tabActive]}
          onPress={() => setActiveTab('past')}
        >
          <Text style={[styles.tabText, activeTab === 'past' && styles.tabTextActive]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {activeTab === 'upcoming' ? (
          <>
            {upcomingTrips.length > 0 ? (
              upcomingTrips.map((trip) => (
                <TouchableOpacity
                  key={trip.id}
                  style={styles.tripCard}
                  onPress={() => onTripPress(trip.id)}
                >
                  <Image source={{ uri: trip.image }} style={styles.tripImage} />
                  <View style={styles.tripContent}>
                    <View style={styles.tripHeader}>
                      <View style={styles.statusBadge}>
                        <Icon name="check-circle" size={12} color={colors.green600} />
                        <Text style={styles.statusText}>Confirmed</Text>
                      </View>
                      <View style={styles.countdownBadge}>
                        <Text style={styles.countdownText}>{trip.daysUntil} days</Text>
                      </View>
                    </View>
                    <Text style={styles.tripTitle}>{trip.title}</Text>
                    <View style={styles.tripMeta}>
                      <Icon name="event" size={16} color={colors.slate500} />
                      <Text style={styles.tripMetaText}>{trip.dates}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewButton}>
                      <Text style={styles.viewButtonText}>View Trip Details</Text>
                      <Icon name="arrow-forward" size={16} color={colors.primary} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.emptyState}>
                <Icon name="luggage" size={64} color={colors.slate300} />
                <Text style={styles.emptyTitle}>No upcoming trips</Text>
                <Text style={styles.emptyText}>
                  Time to plan your next adventure! Explore our curated group trips.
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreButtonText}>Explore Trips</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <>
            {pastTrips.map((trip) => (
              <TouchableOpacity
                key={trip.id}
                style={[styles.tripCard, styles.pastTripCard]}
                onPress={() => onTripPress(trip.id)}
              >
                <Image source={{ uri: trip.image }} style={[styles.tripImage, styles.pastTripImage]} />
                <View style={styles.tripContent}>
                  <View style={styles.statusBadge}>
                    <Icon name="history" size={12} color={colors.slate500} />
                    <Text style={[styles.statusText, { color: colors.slate500 }]}>Completed</Text>
                  </View>
                  <Text style={styles.tripTitle}>{trip.title}</Text>
                  <View style={styles.tripMeta}>
                    <Icon name="event" size={16} color={colors.slate500} />
                    <Text style={styles.tripMetaText}>{trip.dates}</Text>
                  </View>
                  <TouchableOpacity style={styles.reviewButton}>
                    <Icon name="star" size={16} color={colors.amber500} />
                    <Text style={styles.reviewButtonText}>Leave a Review</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
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
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  calendarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.slate200,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
    gap: spacing[2],
  },
  tab: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.full,
    backgroundColor: colors.slate100,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.slate600,
  },
  tabTextActive: {
    color: colors.textWhite,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
  },
  tripCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    marginBottom: spacing[4],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.md,
  },
  pastTripCard: {
    opacity: 0.9,
  },
  tripImage: {
    width: '100%',
    height: 160,
  },
  pastTripImage: {
    opacity: 0.8,
  },
  tripContent: {
    padding: spacing[4],
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    backgroundColor: colors.green50,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.green600,
  },
  countdownBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  countdownText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[2],
  },
  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    marginBottom: spacing[4],
  },
  tripMetaText: {
    fontSize: 14,
    color: colors.slate500,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.primaryLight,
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.amber50,
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
  },
  reviewButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.amber700,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing[12],
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  emptyText: {
    fontSize: 14,
    color: colors.slate500,
    textAlign: 'center',
    paddingHorizontal: spacing[6],
    marginBottom: spacing[6],
    lineHeight: 22,
  },
  exploreButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default MyTripsScreen;
