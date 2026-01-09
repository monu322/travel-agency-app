import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';
import { Chip } from '../components/common/Chip';
import { Badge } from '../components/common/Badge';
import { IconButton } from '../components/common/IconButton';

interface ExploreHomeScreenProps {
  onTripPress: (tripId: string) => void;
}

const filters = ['Month', 'Destination', 'Duration', 'Price'];

const upcomingTrips = [
  {
    id: '1',
    title: 'Edinburgh New Year',
    dates: 'Dec 29 - Jan 2',
    duration: '5 Days',
    price: '$1,200',
    rating: '4.9',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCekYe22-b46d5cdvDcbn06oB8UdXk7Juhz83cHkIe05VttVLK770DC9NtXJzVsP3VlGkcFrj0ERtI_BFgAJPeljAcO9-N99omqLDTnZytqdG8SGlNkWtsSEdTNP4Un1B5dc8ufKUGdNXBudai0qQC3asYUCUJdJajovXID8AAfYLQ_gcCI1T4OKxo9Sr3kqnMMbnTIgAEdXO0Jgh58WR6VA7aqp-U0HoJlgKYTkydc7X0QWKZo4sMP4rTlWDkYihksgUyEOOE0QzkI',
    status: '2 Seats Left',
    statusVariant: 'error' as const,
  },
  {
    id: '2',
    title: 'Italian Lakes Retreat',
    dates: 'Apr 10 - Apr 17',
    duration: '7 Days',
    price: '$2,450',
    rating: '4.8',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaucRdLt23XiGg11Cft-kycImrigS-sqjkDrwqtbn8aqWYNxHurbwXApccGvgm6-lXQruTFt-q94_TpLUPadixGJc6tnqvt7LMiuxrZ-KpGvxIIbMpccLml_jr-9-Cf4SBSQhO1CSr3sJ8a97H7e1hEAW24yutdRm-wtwA3e365J9cOr24bfj5rLfv9AnZvD5b4OXAX1XKvonuMrAoj0lVhL4-m1FB1N0BiDMnmLvpOh_ipnKbvcl0UnimhnVnWVbwYjq9oSACnyN1',
    status: '8 Seats Left',
    statusVariant: 'warning' as const,
  },
  {
    id: '3',
    title: 'Highlands Express',
    dates: 'May 05 - May 09',
    duration: '4 Days',
    price: '$890',
    rating: '4.7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCDL6YloEhGlTtD_Wk2fcWm8sJEVzQ7t8XKeOhSi4KoaS9WuzBgW_teZOi6fIcmrUUb0fNDUG83GIUI4LrCh2ePsMYJJZH7qxawo3ZWWkCR_G4508r0OacmFPUQY7gHe9WE3rcVhpk3r4aMA28J056tsVX1XXDRp1LDh-gWNWqj8NrWiFZadhMzseCES3-w6WCHnAm25NZ3TXT8sh4Vk2bCbEhM7wZrKAuNJVb5Qy9Ke3PsPPAQHheRKKZRAoo15N4yrIstaTiIFdJ',
    status: 'Available',
    statusVariant: 'success' as const,
  },
];

export const ExploreHomeScreen: React.FC<ExploreHomeScreenProps> = ({ onTripPress }) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('Destination');

  const renderTripCard = ({ item }: { item: typeof upcomingTrips[0] }) => (
    <TouchableOpacity 
      style={styles.tripCard}
      onPress={() => onTripPress(item.id)}
      activeOpacity={0.9}
    >
      <View style={styles.tripImageContainer}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.tripImage}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={18} color={colors.textWhite} />
          </TouchableOpacity>
          <View style={styles.tripStatusBadge}>
            <Badge 
              text={item.status} 
              variant={item.statusVariant}
              icon={item.statusVariant === 'error' ? 'local-fire-department' : item.statusVariant === 'success' ? 'check-circle' : 'hourglass-bottom'}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.tripContent}>
        <View style={styles.tripHeader}>
          <Text style={styles.tripTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color={colors.yellow500} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <View style={styles.tripMeta}>
          <MaterialIcons name="calendar-today" size={16} color={colors.slate500} />
          <Text style={styles.tripMetaText}>{item.dates}</Text>
          <Text style={styles.tripMetaDot}>•</Text>
          <Text style={styles.tripMetaText}>{item.duration}</Text>
        </View>
        <View style={styles.tripFooter}>
          <View>
            <Text style={styles.priceLabel}>From</Text>
            <Text style={styles.priceValue}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing[4] }]}>
        <IconButton icon="search" onPress={() => {}} variant="default" />
        <View style={styles.headerTitle}>
          <MaterialIcons name="travel-explore" size={24} color={colors.primary} />
          <Text style={styles.headerTitleText}>Explore</Text>
        </View>
        <View style={styles.notificationButton}>
          <IconButton icon="notifications" onPress={() => {}} variant="default" />
          <View style={styles.notificationDot} />
        </View>
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, flexGrow: 1 }}
      >
        {/* Headline */}
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>
            Discover Scotland{'\n'}
            <Text style={styles.headlinePrimary}>& Beyond</Text>
          </Text>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {filters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              selected={activeFilter === filter}
              onPress={() => setActiveFilter(filter)}
              icon="expand-more"
            />
          ))}
        </ScrollView>

        {/* Featured Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Featured Trip{' '}
              <MaterialIcons name="star" size={18} color={colors.amber500} />
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.featuredCard}
            onPress={() => onTripPress('featured')}
            activeOpacity={0.9}
          >
            <ImageBackground
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXoZ-VYh0jTkltEmZzri3At9_zrgzTHGYNjzhSGV85QLbRfzxBKh5m1uR0GwqhPKhRMmhO5l7KahCTD0nqw24npCz-15T2bj67yggYKkx2tRTEGDP-LZVQ-TFqm5rO06Tbg6lfCXVUBTYvSpx26N3yzsdxiQMRdBkLe0b6lDj2mcVmw7I6uiDwTQ70v9iyhcFmU0x9V7l7kDvx9GAkf8-eMLtlLrzk5tqNvYUif4-tfJNVQFWN_0V1Wbh5Y9njVtWeMMSoYcIQxaqN' }}
              style={styles.featuredImage}
              resizeMode="cover"
            >
              <View style={styles.featuredOverlay} />
              <TouchableOpacity style={styles.featuredFavorite}>
                <MaterialIcons name="favorite-border" size={24} color={colors.textWhite} />
              </TouchableOpacity>
              <View style={styles.featuredContent}>
                <View style={styles.featuredBadges}>
                  <Badge text="Selling Fast" variant="warning" />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>5 Days</Text>
                  </View>
                </View>
                <Text style={styles.featuredTitle}>Ultimate Skye Adventure</Text>
                <View style={styles.featuredMeta}>
                  <MaterialIcons name="calendar-month" size={16} color={colors.slate200} />
                  <Text style={styles.featuredMetaText}>Oct 12 - Oct 17</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.featuredFooter}>
              <View>
                <Text style={styles.featuredPriceLabel}>Per Person</Text>
                <Text style={styles.featuredPrice}>$1,499</Text>
              </View>
              <TouchableOpacity style={styles.viewTripButton}>
                <Text style={styles.viewTripButtonText}>View Trip</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Upcoming Departures */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Departures</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {upcomingTrips.map((trip) => (
            <View key={trip.id}>
              {renderTripCard({ item: trip })}
            </View>
          ))}
        </View>
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
    backgroundColor: colors.backgroundLight,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.red500,
    borderWidth: 2,
    borderColor: colors.surfaceLight,
  },
  headlineContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  headline: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    lineHeight: 34,
  },
  headlinePrimary: {
    color: colors.primary,
  },
  filtersContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    gap: spacing[3],
  },
  section: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing[4],
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  featuredCard: {
    borderRadius: borderRadius['2xl'],
    backgroundColor: colors.surfaceLight,
    overflow: 'hidden',
    ...shadows.md,
  },
  featuredImage: {
    height: 256,
    justifyContent: 'flex-end',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blackOverlay40,
  },
  featuredFavorite: {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.whiteOverlay20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredContent: {
    padding: spacing[4],
  },
  featuredBadges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  durationBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.md,
    backgroundColor: colors.blackOverlay40,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textWhite,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textWhite,
    marginBottom: spacing[1],
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  featuredMetaText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate200,
  },
  featuredFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  featuredPriceLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.slate500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
  },
  viewTripButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[2.5],
    borderRadius: borderRadius.xl,
    ...shadows.primary,
  },
  viewTripButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textWhite,
  },
  tripCard: {
    borderRadius: borderRadius['2xl'],
    backgroundColor: colors.surfaceLight,
    overflow: 'hidden',
    marginBottom: spacing[5],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  tripImageContainer: {
    height: 192,
    width: '100%',
  },
  tripImage: {
    flex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.blackOverlay30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripStatusBadge: {
    position: 'absolute',
    bottom: spacing[3],
    left: spacing[3],
  },
  tripContent: {
    padding: spacing[4],
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[2],
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.slate500,
  },
  tripMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  tripMetaText: {
    fontSize: 14,
    color: colors.slate500,
  },
  tripMetaDot: {
    color: colors.slate500,
  },
  tripFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.slate100,
    paddingTop: spacing[3],
  },
  priceLabel: {
    fontSize: 12,
    color: colors.slate400,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  detailsButton: {
    backgroundColor: colors.slate100,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.lg,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});

export default ExploreHomeScreen;
