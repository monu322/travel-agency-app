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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface ProfileScreenProps {
  onEditProfile?: () => void;
  onLogout?: () => void;
}

const menuItems = [
  { id: 'account', icon: 'person', title: 'Account Settings', subtitle: 'Personal info, password' },
  { id: 'payment', icon: 'credit-card', title: 'Payment Methods', subtitle: 'Cards, billing address' },
  { id: 'notifications', icon: 'notifications', title: 'Notifications', subtitle: 'Email, push preferences' },
  { id: 'help', icon: 'help', title: 'Help & Support', subtitle: 'FAQs, contact us' },
  { id: 'about', icon: 'info', title: 'About', subtitle: 'App version, legal' },
];

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onEditProfile, onLogout }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + spacing[4] }]}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCekYe22-b46d5cdvDcbn06oB8UdXk7Juhz83cHkIe05VttVLK770DC9NtXJzVsP3VlGkcFrj0ERtI_BFgAJPeljAcO9-N99omqLDTnZytqdG8SGlNkWtsSEdTNP4Un1B5dc8ufKUGdNXBudai0qQC3asYUCUJdJajovXID8AAfYLQ_gcCI1T4OKxo9Sr3kqnMMbnTIgAEdXO0Jgh58WR6VA7aqp-U0HoJlgKYTkydc7X0QWKZo4sMP4rTlWDkYihksgUyEOOE0QzkI' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Icon name="camera-alt" size={16} color={colors.textWhite} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Alex Johnson</Text>
          <Text style={styles.profileEmail}>alex.johnson@email.com</Text>
          <TouchableOpacity style={styles.editProfileButton} onPress={onEditProfile}>
            <Icon name="edit" size={16} color={colors.primary} />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconContainer}>
                  <Icon name={item.icon} size={22} color={colors.primary} />
                </View>
                <View>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                </View>
              </View>
              <Icon name="chevron-right" size={24} color={colors.slate400} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Icon name="logout" size={20} color={colors.red500} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>Highland Escapes v1.0.0</Text>

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
  scrollContent: {
    paddingHorizontal: spacing[4],
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing[4],
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.backgroundLight,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing[1],
  },
  profileEmail: {
    fontSize: 14,
    color: colors.slate500,
    marginBottom: spacing[3],
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.full,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    padding: spacing[5],
    marginBottom: spacing[6],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing[0.5],
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.slate500,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: colors.slate200,
    alignSelf: 'center',
  },
  menuContainer: {
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    marginBottom: spacing[6],
    borderWidth: 1,
    borderColor: colors.slate100,
    ...shadows.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.slate100,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing[0.5],
  },
  menuSubtitle: {
    fontSize: 12,
    color: colors.slate500,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    paddingVertical: spacing[4],
    backgroundColor: colors.red50,
    borderRadius: borderRadius.xl,
    marginBottom: spacing[4],
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.red500,
  },
  versionText: {
    fontSize: 12,
    color: colors.slate400,
    textAlign: 'center',
  },
});

export default ProfileScreen;
