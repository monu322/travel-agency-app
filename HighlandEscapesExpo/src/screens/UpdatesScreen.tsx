import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface UpdatesScreenProps {
  onNotificationPress?: (id: string) => void;
}

const notifications = [
  {
    id: '1',
    type: 'trip',
    title: 'Trip Documents Ready',
    message: 'Your detailed itinerary and packing list for Highlands Explorer are now available.',
    time: '2 hours ago',
    read: false,
    icon: 'description',
    color: colors.primary,
  },
  {
    id: '2',
    type: 'reminder',
    title: 'Payment Reminder',
    message: 'Final payment of $750 due in 7 days for your October trip.',
    time: '1 day ago',
    read: false,
    icon: 'payment',
    color: colors.amber500,
  },
  {
    id: '3',
    type: 'update',
    title: 'Group Update',
    message: "Your group leader Sarah has shared a welcome message. Say hi to your fellow travelers!",
    time: '2 days ago',
    read: true,
    icon: 'groups',
    color: colors.green500,
  },
  {
    id: '4',
    type: 'promo',
    title: 'Early Bird Discount',
    message: 'Book your 2025 adventure now and save 15% on all spring departures.',
    time: '3 days ago',
    read: true,
    icon: 'local-offer',
    color: colors.primary,
  },
];

export const UpdatesScreen: React.FC<UpdatesScreenProps> = ({ onNotificationPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing[2] }]}>
        <Text style={styles.headerTitle}>Updates</Text>
        <TouchableOpacity style={styles.markAllButton}>
          <Text style={styles.markAllText}>Mark all read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Unread Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New</Text>
          {notifications
            .filter((n) => !n.read)
            .map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={[styles.notificationCard, styles.unreadCard]}
                onPress={() => onNotificationPress?.(notification.id)}
              >
                <View style={[styles.iconContainer, { backgroundColor: `${notification.color}20` }]}>
                  <MaterialIcons name={notification.icon} size={24} color={notification.color} />
                </View>
                <View style={styles.notificationContent}>
                  <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>{notification.title}</Text>
                    <View style={styles.unreadDot} />
                  </View>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>

        {/* Earlier Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earlier</Text>
          {notifications
            .filter((n) => n.read)
            .map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={styles.notificationCard}
                onPress={() => onNotificationPress?.(notification.id)}
              >
                <View style={[styles.iconContainer, { backgroundColor: colors.slate100 }]}>
                  <MaterialIcons name={notification.icon} size={24} color={colors.slate500} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={[styles.notificationTitle, styles.readTitle]}>
                    {notification.title}
                  </Text>
                  <Text style={[styles.notificationMessage, styles.readMessage]}>
                    {notification.message}
                  </Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>

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
    paddingBottom: spacing[4],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  markAllButton: {
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
  },
  markAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
  },
  section: {
    marginBottom: spacing[6],
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.slate500,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceLight,
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  unreadCard: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary + '30',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing[1],
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  readTitle: {
    color: colors.slate600,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  notificationMessage: {
    fontSize: 14,
    color: colors.slate600,
    lineHeight: 20,
    marginBottom: spacing[2],
  },
  readMessage: {
    color: colors.slate500,
  },
  notificationTime: {
    fontSize: 12,
    color: colors.slate400,
  },
});

export default UpdatesScreen;
