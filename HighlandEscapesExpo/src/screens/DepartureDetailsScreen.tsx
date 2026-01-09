import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface DepartureDetailsScreenProps {
  onBack: () => void;
  onBookSeat: () => void;
}

const itinerary = [
  {
    day: 1,
    title: 'Arrival & Welcome Dinner',
    description: "Arrive in Edinburgh and meet your group. We'll start with a traditional Scottish dinner at a historic pub in the Old Town.",
    expanded: true,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkkriHHKQ6Dhphu5jDHS_gD2LKyar5N2ZkO1KbKxp3VlzutMTXDh4j9p4sqgscKW0Jyx5PLK6bInwlTOc_PahCaFY6wZNaHeTxgAq32lZj6C4Y2j-5nJ9B_ciLfvAs8qRaoh5G_HiG0cgfTtlggWOtdLHy9hdg9wEDwD0yfLs8VAJ3fWpnF8S-MhRbRhSNmkS_wcAdpOm-WkOxF720uIJ1kl9ODQzePahl2_8Pjl8Sx9WHpGVlMD3I-iil-PwSC3YjHZTovV9L2ORN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7i9cvYt2PQxWlBRJDrSACT-AJsn-qbReKoCfUNznonBa2K8H4LvuhceMHqVxKzAPQHzP_u1w-xmb-g8Ce8Q2nPsMdUImEJAONjrkEEJpWSTZLWQy8WvfdYb51INqTupHsJymivrMyhwW63mtw8MbcUwNKk6xTkuqbJcLnklHcezW3jpcUiKV4po2XMGP-QXtgtYVaW-SGWWb_654CooA9zdIucUZDDQ0OHdvyuI5A20OHRvIpYim-GiCJQ5GnrSmTC1zPI0x4Fgj1',
    ],
  },
  {
    day: 2,
    title: 'Loch Ness & Urquhart Castle',
    description: 'We head north into the Highlands, stopping at the famous Loch Ness. Keep your eyes peeled for Nessie!',
    expanded: true,
  },
  {
    day: 3,
    title: 'Isle of Skye',
    expanded: false,
  },
];

const inclusions = [
  { included: true, text: 'Breakfasts (6)' },
  { included: true, text: 'Local Guide' },
  { included: true, text: 'Transport' },
  { included: false, text: 'Flights' },
];

export const DepartureDetailsScreen: React.FC<DepartureDetailsScreenProps> = ({
  onBack,
  onBookSeat,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.headerButton} onPress={onBack}>
          <MaterialIcons name="arrow-back-ios" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Departure Details</Text>
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="share" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
        <View style={styles.content}>
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.region}>SCOTLAND</Text>
            <Text style={styles.title}>Highlands Explorer</Text>
            <View style={styles.ratingRow}>
              <MaterialIcons name="star" size={20} color={colors.yellow500} />
              <Text style={styles.ratingValue}>4.9</Text>
              <Text style={styles.ratingCount}>(128 reviews)</Text>
            </View>
          </View>

          {/* Summary Card */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <View>
                <Text style={styles.summaryDates}>Oct 12 - Oct 19</Text>
                <Text style={styles.summaryDuration}>7 Days • 6 Nights</Text>
              </View>
              <View style={styles.urgentBadge}>
                <MaterialIcons name="local-fire-department" size={14} color={colors.red500} />
                <Text style={styles.urgentBadgeText}>Only 3 left</Text>
              </View>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.priceRow}>
              <Text style={styles.priceValue}>$1,450</Text>
              <Text style={styles.priceUnit}>/ person</Text>
            </View>
          </View>

          {/* Meeting Point */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meeting Point</Text>
            <View style={styles.meetingCard}>
              <View style={styles.mapContainer}>
                <ImageBackground
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9v1zQ9hA-S7uxw-D92SZY_Yb4Gg_waVlIdU5YO5fv7F4-EQkoveiE96uz5oPzGeRAzdJJOPgrhyhSz0fbkitjfIgUQyM5iItcU7d0G_zuylvVsXVdvJ-yvdP-Xug6SHX5H7F-klWWHdBqRHHpY8tWi7RTrwWQ5_Zrroi6XmusDZGf8GitEV7dCo4cnHdbQlY30dPuW6iTN0BTMWedu_JQ9XyO7IxUM3y8SlT--6HamQYDuv-5dBC-NdeAv_gf8gGmU_CFLqaE17uZ' }}
                  style={styles.mapImage}
                  resizeMode="cover"
                >
                  <View style={styles.mapOverlay} />
                  <View style={styles.mapPinContainer}>
                    <View style={styles.mapPin}>
                      <MaterialIcons name="location-on" size={18} color={colors.textWhite} />
                    </View>
                    <View style={styles.mapLabel}>
                      <Text style={styles.mapLabelText}>View on map</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.addressContainer}>
                <MaterialIcons name="storefront" size={24} color={colors.slate400} />
                <View style={styles.addressText}>
                  <Text style={styles.addressTitle}>Edinburgh Waverley Station</Text>
                  <Text style={styles.addressDescription}>
                    Platform 2, near the main ticket office. Look for the guide holding a blue flag.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Itinerary */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Itinerary</Text>
              <TouchableOpacity>
                <Text style={styles.expandAllText}>Expand all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.timeline}>
              <View style={styles.timelineLine} />
              {itinerary.map((day, index) => (
                <View key={index} style={styles.timelineItem}>
                  <View style={[
                    styles.timelineDot,
                    day.day === 1 && styles.timelineDotActive
                  ]} />
                  <View style={styles.timelineContent}>
                    <Text style={[
                      styles.dayLabel,
                      day.day === 1 && styles.dayLabelActive
                    ]}>
                      Day {day.day}
                    </Text>
                    <Text style={styles.dayTitle}>{day.title}</Text>
                    {day.description && day.expanded && (
                      <Text style={styles.dayDescription}>{day.description}</Text>
                    )}
                    {day.images && day.expanded && (
                      <View style={styles.dayImages}>
                        {day.images.map((img, imgIndex) => (
                          <Image key={imgIndex} source={{ uri: img }} style={styles.dayImage} />
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Cancellation Policy */}
          <View style={styles.policyCard}>
            <MaterialIcons name="verified-user" size={24} color={colors.slate500} />
            <View style={styles.policyContent}>
              <Text style={styles.policyTitle}>Cancellation Policy</Text>
              <Text style={styles.policyText}>
                Free cancellation up to 30 days before departure. After that, a 50% fee applies.{' '}
                <Text style={styles.policyLink}>Read full policy</Text>
              </Text>
            </View>
          </View>

          {/* Inclusions Grid */}
          <View style={styles.inclusionsGrid}>
            {inclusions.map((item, index) => (
              <View key={index} style={[
                styles.inclusionItem,
                !item.included && styles.inclusionItemExcluded
              ]}>
                <MaterialIcons
                  name={item.included ? 'check-circle' : 'cancel'}
                  size={20}
                  color={item.included ? colors.green600 : colors.slate400}
                />
                <Text style={[
                  styles.inclusionText,
                  !item.included && styles.inclusionTextExcluded
                ]}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={[styles.bottomCta, { paddingBottom: insets.bottom + spacing[4] }]}>
        <TouchableOpacity style={styles.bookButton} onPress={onBookSeat}>
          <View style={styles.bookButtonLeft}>
            <Text style={styles.bookButtonLabel}>Total Price</Text>
            <Text style={styles.bookButtonPrice}>$1,450</Text>
          </View>
          <View style={styles.bookButtonRight}>
            <Text style={styles.bookButtonText}>Book Seat</Text>
            <MaterialIcons name="arrow-forward" size={24} color={colors.textWhite} />
          </View>
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
    paddingBottom: spacing[3],
    backgroundColor: colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.slate200,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  content: {
    padding: spacing[4],
    gap: spacing[6],
  },
  titleSection: {
    gap: spacing[2],
  },
  region: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    lineHeight: 34,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  ratingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  ratingCount: {
    fontSize: 14,
    color: colors.slate500,
  },
  summaryCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    padding: spacing[5],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  summaryDates: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  summaryDuration: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate500,
    marginTop: spacing[0.5],
  },
  urgentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    backgroundColor: colors.red50,
    borderWidth: 1,
    borderColor: colors.red100,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1.5],
    borderRadius: borderRadius.full,
  },
  urgentBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.red600,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: colors.slate100,
    marginVertical: spacing[4],
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[1],
  },
  priceValue: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  priceUnit: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate500,
  },
  section: {
    gap: spacing[4],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  expandAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  meetingCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  mapContainer: {
    height: 160,
  },
  mapImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
  },
  mapPinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    padding: spacing[3],
  },
  mapPin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
  },
  mapLabel: {
    backgroundColor: colors.blackOverlay60,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.md,
  },
  mapLabelText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textWhite,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    padding: spacing[4],
  },
  addressText: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  addressDescription: {
    fontSize: 14,
    color: colors.slate500,
    lineHeight: 20,
    marginTop: spacing[0.5],
  },
  timeline: {
    paddingLeft: spacing[2],
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    top: spacing[2],
    bottom: spacing[6],
    left: 19,
    width: 2,
    backgroundColor: colors.slate200,
  },
  timelineItem: {
    flexDirection: 'row',
    paddingLeft: spacing[8],
    paddingBottom: spacing[6],
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.slate300,
    borderWidth: 4,
    borderColor: colors.backgroundLight,
    marginLeft: 8,
    marginTop: 2,
  },
  timelineDotActive: {
    backgroundColor: colors.primary,
  },
  timelineContent: {
    flex: 1,
    gap: spacing[1],
  },
  dayLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.slate500,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dayLabelActive: {
    color: colors.primary,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  dayDescription: {
    fontSize: 14,
    color: colors.slate500,
    lineHeight: 20,
    marginTop: spacing[1],
  },
  dayImages: {
    flexDirection: 'row',
    gap: spacing[2],
    marginTop: spacing[2],
  },
  dayImage: {
    width: 96,
    height: 64,
    borderRadius: borderRadius.lg,
  },
  policyCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[4],
    backgroundColor: colors.slate100,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
  },
  policyContent: {
    flex: 1,
    gap: spacing[1],
  },
  policyTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  policyText: {
    fontSize: 12,
    color: colors.slate500,
    lineHeight: 18,
  },
  policyLink: {
    color: colors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  inclusionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  inclusionItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: colors.surfaceLight,
    padding: spacing[3],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.slate200,
  },
  inclusionItemExcluded: {
    opacity: 0.75,
  },
  inclusionText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.slate700,
  },
  inclusionTextExcluded: {
    color: colors.slate500,
  },
  bottomCta: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    paddingHorizontal: spacing[4],
  },
  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing[6],
    ...shadows.xl,
  },
  bookButtonLeft: {
    alignItems: 'flex-start',
  },
  bookButtonLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.whiteOverlay90,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  bookButtonPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textWhite,
  },
  bookButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default DepartureDetailsScreen;
