import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';
import { Badge } from '../components/common/Badge';

interface PackageDetailsScreenProps {
  onBack: () => void;
  onSelectDate: () => void;
}

const highlights = [
  { icon: 'castle', title: 'Castle Stays', subtitle: '1 Night Included' },
  { icon: 'local-bar', title: 'Whisky Tour', subtitle: 'Tasting Included' },
  { icon: 'directions-bus', title: 'Transport', subtitle: 'Luxury Coach' },
  { icon: 'groups', title: 'Small Group', subtitle: 'Max 16 People' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Edinburgh',
    description: 'Meet your guide and fellow travelers at 6 PM for a welcome drink. Overnight in Edinburgh city center.',
  },
  {
    day: 2,
    title: 'Stirling & The Trossachs',
    description: 'Depart for the Highlands, stopping at Stirling Castle and passing through the scenic Trossachs National Park.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-X58u9kFL9dK5czLnGhJ6tGzdo468YygceJBV0Zc9d2d6eunvzeonJX1GROaxqFZHrjM_JlBPaEuhkzRad-Z6Xi8mATcWHiJp_HbC0RWUSW7fOQc0vVVsuftbx7kioAhDgrkeoJodFgMJ6sIjW-vYiuiOJznydJxSYcXK9XNUw_xRiPlbZPoVX2G_t2FJw5PQgJ9VmuSBQMZlr_MkHdgZgffMzj-balBwc4oQYoQCZKlMH2Izsw3s1UzVnpV2qWbzgjZO7M09biAH',
  },
  {
    day: 3,
    title: 'Isle of Skye Adventure',
    description: 'A full day exploring the magical Isle of Skye, including the Old Man of Storr and Kilt Rock.',
  },
];

const inclusions = [
  { included: true, text: '6 nights boutique hotel accommodation' },
  { included: true, text: 'Daily breakfast & 3 dinners' },
  { included: true, text: 'Local expert guide & driver' },
  { included: true, text: 'All entrance fees to castles' },
  { included: false, text: 'International flights' },
  { included: false, text: 'Travel insurance' },
];

const upcomingDates = [
  { month: 'August 2024', dates: 'Aug 12 - Aug 19', spots: '4 spots left', price: '$1,400', urgent: true },
  { month: 'September 2024', dates: 'Sep 05 - Sep 12', spots: 'Available', price: '$1,350', urgent: false },
  { month: 'October 2024', dates: 'Oct 10 - Oct 17', spots: 'Filling Fast', price: '$1,200', urgent: false },
];

const faqs = [
  { question: 'Do I need a visa for Scotland?', answer: 'It depends on your citizenship. US, Canadian, and Australian citizens typically do not need a visa for tourism stays up to 6 months. Please check with your local embassy.' },
  { question: 'What is the group size?', answer: 'We keep our groups small to ensure a personal experience. The maximum group size for this tour is 16 people.' },
  { question: 'Is airfare included?', answer: 'No, international airfare is not included. You will need to arrange your own flights to and from Edinburgh Airport (EDI).' },
];

export const PackageDetailsScreen: React.FC<PackageDetailsScreenProps> = ({
  onBack,
  onSelectDate,
}) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.headerButton} onPress={onBack}>
          <Icon name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Highlands Explorer</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="share" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOcw1rmE_knB9zC5m43YWUYrybhTmmVvwKxg5oLYzSmvTGI-UkZ_4uWPvk1KaT5_rfZwzZm0yW4pPXksUGsSO2E523ZXJI8sFKgsCEZKDunxAzp9cqckWWDKEY7Tz_N-klmyii1ThaJoXhTRl7aKmT8Jn_7tiqQVniokEHjLEThD2_S8eqHxO5gkYRobyspMWEmhAJ1Mi71Y81_V4ZJMqYfDHaQ0tRIhrtLEHKaUjmpFIPElZzFlS9uNsWJHXDf2fdtegT15KHAxj6' }}
            style={styles.heroImage}
            resizeMode="cover"
          >
            <View style={styles.heroOverlay} />
            <View style={styles.heroContent}>
              <View style={styles.heroBadges}>
                <View style={styles.groupBadge}>
                  <Text style={styles.groupBadgeText}>GROUP TOUR</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color={colors.yellow400} />
                  <Text style={styles.ratingText}>4.8 (124)</Text>
                </View>
              </View>
              <Text style={styles.heroTitle}>Highlands Explorer</Text>
              <Text style={styles.heroSubtitle}>7 Days • Edinburgh & Highlands • Physical: Moderate</Text>
            </View>
            <TouchableOpacity style={styles.galleryButton}>
              <Icon name="photo-library" size={24} color={colors.textWhite} />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['overview', 'itinerary', 'included', 'faq'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.content}>
          {/* Overview Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience the Magic</Text>
            <Text style={styles.sectionText}>
              Discover the untamed beauty of Scotland on this 7-day guided adventure. From the cobbled streets of Edinburgh to the mysterious waters of Loch Ness, you'll immerse yourself in ancient history, breathtaking landscapes, and local culture. Perfect for solo travelers and couples alike.
            </Text>

            {/* Highlights Grid */}
            <View style={styles.highlightsGrid}>
              {highlights.map((item, index) => (
                <View key={index} style={styles.highlightCard}>
                  <View style={styles.highlightIcon}>
                    <Icon name={item.icon} size={20} color={colors.primary} />
                  </View>
                  <View>
                    <Text style={styles.highlightTitle}>{item.title}</Text>
                    <Text style={styles.highlightSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          {/* Itinerary Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Itinerary Preview</Text>
              <TouchableOpacity>
                <Text style={styles.expandAllText}>Expand All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.itineraryList}>
              {itinerary.map((day, index) => (
                <View key={index} style={styles.itineraryItem}>
                  <View style={styles.itineraryDayBadge}>
                    <Text style={styles.itineraryDayText}>{day.day}</Text>
                  </View>
                  <View style={styles.itineraryContent}>
                    <Text style={styles.itineraryTitle}>{day.title}</Text>
                    <Text style={styles.itineraryDescription}>{day.description}</Text>
                    {day.image && (
                      <Image source={{ uri: day.image }} style={styles.itineraryImage} />
                    )}
                  </View>
                </View>
              ))}
              <View style={styles.itineraryItem}>
                <View style={[styles.itineraryDayBadge, styles.itineraryMoreBadge]}>
                  <Icon name="more-horiz" size={16} color={colors.slate500} />
                </View>
                <Text style={styles.itineraryMoreText}>4 more days...</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.viewFullButton}>
              <Text style={styles.viewFullButtonText}>View Full Itinerary</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Inclusions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What's Included</Text>
            <View style={styles.inclusionsList}>
              {inclusions.map((item, index) => (
                <View key={index} style={styles.inclusionItem}>
                  <Icon
                    name={item.included ? 'check-circle' : 'cancel'}
                    size={20}
                    color={item.included ? colors.green600 : colors.gray400}
                  />
                  <Text style={[styles.inclusionText, !item.included && styles.inclusionTextExcluded]}>
                    {item.text}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          {/* Upcoming Dates */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Upcoming Dates</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datesScroll}>
              {upcomingDates.map((date, index) => (
                <View key={index} style={styles.dateCard}>
                  {date.urgent && <View style={styles.dateUrgentBar} />}
                  <Text style={styles.dateMonth}>{date.month}</Text>
                  <Text style={styles.dateDates}>{date.dates}</Text>
                  <View style={styles.dateFooter}>
                    <View>
                      <View style={[styles.dateSpotsContainer, date.urgent && styles.dateSpotsUrgent]}>
                        <Text style={[styles.dateSpotsText, date.urgent && styles.dateSpotsTextUrgent]}>
                          {date.spots}
                        </Text>
                      </View>
                      <Text style={styles.datePrice}>{date.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.dateArrowButton}>
                      <Icon name="arrow-forward" size={18} color={colors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.divider} />

          {/* FAQ Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
            {faqs.map((faq, index) => (
              <TouchableOpacity
                key={index}
                style={styles.faqItem}
                onPress={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <View style={styles.faqHeader}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Icon
                    name={expandedFaq === index ? 'expand-less' : 'expand-more'}
                    size={24}
                    color={colors.slate500}
                  />
                </View>
                {expandedFaq === index && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Spacer for bottom bar */}
          <View style={{ height: 120 }} />
        </View>
      </ScrollView>

      {/* Bottom Booking Bar */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + spacing[4] }]}>
        <View style={styles.bottomBarContent}>
          <View>
            <Text style={styles.priceLabel}>Total Price</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceFrom}>From</Text>
              <Text style={styles.priceValue}>$1,200</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.selectDateButton} onPress={onSelectDate}>
            <Text style={styles.selectDateButtonText}>Select Date</Text>
          </TouchableOpacity>
        </View>
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
    borderBottomWidth: 1,
    borderBottomColor: colors.slate200,
  },
  headerButton: {
    padding: spacing[2],
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  heroContainer: {
    height: 300,
  },
  heroImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  heroContent: {
    padding: spacing[5],
  },
  heroBadges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  groupBadge: {
    backgroundColor: colors.whiteOverlay20,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[0.5],
    borderRadius: borderRadius.sm,
  },
  groupBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textWhite,
    letterSpacing: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textWhite,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.textWhite,
    marginBottom: spacing[2],
  },
  heroSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate200,
  },
  galleryButton: {
    position: 'absolute',
    bottom: spacing[5],
    right: spacing[5],
    width: 40,
    height: 40,
    backgroundColor: colors.whiteOverlay20,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    backgroundColor: colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.slate200,
    paddingHorizontal: spacing[4],
  },
  tab: {
    paddingVertical: spacing[3],
    marginRight: spacing[6],
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.slate500,
  },
  tabTextActive: {
    color: colors.primary,
  },
  content: {
    padding: spacing[5],
  },
  section: {
    marginBottom: spacing[4],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[3],
  },
  sectionText: {
    fontSize: 14,
    color: colors.slate600,
    lineHeight: 22,
    marginBottom: spacing[4],
  },
  expandAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  highlightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  highlightCard: {
    width: '48%',
    backgroundColor: colors.surfaceLight,
    padding: spacing[3],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.slate100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    ...shadows.sm,
  },
  highlightIcon: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  highlightSubtitle: {
    fontSize: 12,
    color: colors.slate500,
  },
  divider: {
    height: 1,
    backgroundColor: colors.slate200,
    marginVertical: spacing[4],
  },
  itineraryList: {
    paddingLeft: spacing[2],
  },
  itineraryItem: {
    flexDirection: 'row',
    gap: spacing[4],
    marginBottom: spacing[6],
  },
  itineraryDayBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itineraryDayText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textWhite,
  },
  itineraryMoreBadge: {
    backgroundColor: colors.slate200,
  },
  itineraryContent: {
    flex: 1,
  },
  itineraryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[1],
  },
  itineraryDescription: {
    fontSize: 14,
    color: colors.slate500,
    lineHeight: 20,
  },
  itineraryImage: {
    width: '100%',
    height: 120,
    borderRadius: borderRadius.lg,
    marginTop: spacing[2],
  },
  itineraryMoreText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.slate500,
    alignSelf: 'center',
  },
  viewFullButton: {
    borderWidth: 1,
    borderColor: colors.slate200,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing[3],
    alignItems: 'center',
    marginTop: spacing[2],
  },
  viewFullButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  inclusionsList: {
    gap: spacing[3],
  },
  inclusionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  inclusionText: {
    fontSize: 14,
    color: colors.slate700,
    flex: 1,
  },
  inclusionTextExcluded: {
    color: colors.slate500,
    opacity: 0.7,
  },
  datesScroll: {
    marginHorizontal: -spacing[5],
    paddingHorizontal: spacing[5],
  },
  dateCard: {
    width: 220,
    backgroundColor: colors.surfaceLight,
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.slate200,
    marginRight: spacing[4],
    overflow: 'hidden',
    ...shadows.sm,
  },
  dateUrgentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
    backgroundColor: colors.primary,
  },
  dateMonth: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.slate400,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dateDates: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing[1],
  },
  dateFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: spacing[3],
  },
  dateSpotsContainer: {
    backgroundColor: colors.slate100,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[0.5],
    borderRadius: borderRadius.full,
  },
  dateSpotsUrgent: {
    backgroundColor: colors.green100,
  },
  dateSpotsText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.slate500,
  },
  dateSpotsTextUrgent: {
    color: colors.green600,
  },
  datePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginTop: spacing[1],
  },
  dateArrowButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.slate100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  faqItem: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.slate200,
    marginBottom: spacing[3],
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[4],
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    flex: 1,
  },
  faqAnswer: {
    fontSize: 14,
    color: colors.slate600,
    lineHeight: 22,
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[4],
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surfaceLight,
    borderTopWidth: 1,
    borderTopColor: colors.slate200,
    padding: spacing[4],
    ...shadows.lg,
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 12,
    color: colors.slate500,
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[1],
  },
  priceFrom: {
    fontSize: 12,
    color: colors.slate400,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.textPrimary,
  },
  selectDateButton: {
    flex: 1,
    marginLeft: spacing[4],
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.primary,
  },
  selectDateButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default PackageDetailsScreen;
