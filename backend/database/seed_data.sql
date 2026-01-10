-- Wanderlust Travel App - Seed Data
-- Run this SQL in your Supabase SQL Editor AFTER running schema.sql

-- =============================================
-- SEED PACKAGES
-- =============================================
INSERT INTO public.packages (id, title, description, duration_days, price, max_guests, status, cover_image, start_date, end_date, location, is_featured) VALUES
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'Bali Paradise Retreat',
    'Experience the ultimate tropical getaway in Bali. From the lush rice terraces of Ubud to the pristine beaches of Nusa Dua, this 7-day retreat is designed for relaxation and adventure. Explore ancient temples, enjoy traditional Balinese spa treatments, and immerse yourself in the island''s rich culture.',
    7,
    1200.00,
    15,
    'active',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    '2026-03-12',
    '2026-03-19',
    'Bali, Indonesia',
    true
),
(
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'Swiss Alps Hiking Adventure',
    'Embark on an unforgettable journey through the majestic Swiss Alps. Trek through breathtaking mountain trails, stay in charming alpine villages, and witness some of Europe''s most spectacular scenery. Perfect for adventure seekers and nature lovers.',
    5,
    2400.00,
    10,
    'draft',
    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200',
    '2026-06-05',
    '2026-06-10',
    'Swiss Alps, Switzerland',
    false
),
(
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Kyoto Cherry Blossom Experience',
    'Witness the magical cherry blossom season in Japan''s cultural capital. Visit ancient temples, traditional gardens, and experience authentic Japanese tea ceremonies. This 10-day journey captures the essence of Japanese culture and natural beauty.',
    10,
    3100.00,
    20,
    'sold_out',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
    '2026-04-01',
    '2026-04-11',
    'Kyoto, Japan',
    true
),
(
    'd4e5f6a7-b8c9-0123-defa-456789012345',
    'Thai Island Hopping',
    'Discover the stunning islands of Thailand with this island-hopping adventure. From the limestone cliffs of Krabi to the crystal-clear waters of Koh Phi Phi, experience tropical paradise at its finest. Includes snorkeling, kayaking, and beach relaxation.',
    8,
    1850.00,
    12,
    'active',
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200',
    '2026-02-10',
    '2026-02-18',
    'Phuket, Thailand',
    false
),
(
    'e5f6a7b8-c9d0-1234-efab-567890123456',
    'Iceland Northern Lights',
    'Chase the magical Aurora Borealis in Iceland. This winter adventure combines natural wonders with thrilling activities including glacier hiking, ice cave exploration, and relaxing in natural hot springs. A once-in-a-lifetime experience.',
    6,
    2800.00,
    8,
    'active',
    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200',
    '2026-01-15',
    '2026-01-21',
    'Reykjavik, Iceland',
    true
),
(
    'f6a7b8c9-d0e1-2345-fabc-678901234567',
    'Moroccan Desert Safari',
    'Journey through the vibrant souks of Marrakech to the golden dunes of the Sahara. Experience camel treks, overnight desert camps under the stars, and the rich tapestry of Moroccan culture. An exotic adventure for the soul.',
    9,
    1950.00,
    16,
    'active',
    'https://images.unsplash.com/photo-1489493512598-d08130f49bea?w=1200',
    '2026-04-20',
    '2026-04-29',
    'Marrakech, Morocco',
    false
);

-- =============================================
-- SEED ITINERARIES
-- =============================================

-- Bali Paradise Retreat Itinerary
INSERT INTO public.itineraries (package_id, day_number, title, description) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 1, 'Arrival in Denpasar & Transfer to Ubud', 'Meet and greet at Ngurah Rai International Airport followed by a scenic drive to the cultural heart of Bali. Check into your luxury villa and enjoy a welcome dinner with traditional Balinese cuisine.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 2, 'Sacred Monkey Forest & Rice Terraces', 'Visit the famous Ubud Monkey Forest and explore the stunning Tegallalang Rice Terraces. Afternoon free for shopping in Ubud''s artisan markets.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 3, 'Sunrise Yoga & Cooking Class', 'Start with a peaceful sunrise yoga session overlooking the valley. Learn to cook authentic Balinese dishes in a hands-on cooking class.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 4, 'Temple Tour: Tirta Empul & Gunung Kawi', 'Visit the sacred Tirta Empul temple for a purification ritual. Explore the ancient rock-cut shrines of Gunung Kawi.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 5, 'Transfer to Nusa Dua - Beach Day', 'Travel to the beautiful beaches of Nusa Dua. Afternoon at leisure to enjoy water sports or spa treatments.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 6, 'Uluwatu Temple & Kecak Dance', 'Explore the clifftop Uluwatu Temple and watch the mesmerizing Kecak fire dance at sunset. Farewell dinner at a beachfront restaurant.'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 7, 'Departure', 'Free morning for last-minute shopping or relaxation. Transfer to the airport for your departure flight.');

-- Swiss Alps Hiking Adventure Itinerary
INSERT INTO public.itineraries (package_id, day_number, title, description) VALUES
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 1, 'Arrival in Zurich & Transfer to Alps', 'Welcome to Switzerland! Transfer from Zurich to your mountain lodge. Evening orientation and welcome dinner.'),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 2, 'Alpine Meadows Hike', 'Moderate hike through wildflower meadows with panoramic mountain views. Picnic lunch at a scenic viewpoint.'),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 3, 'Glacier Experience', 'Guided glacier walk with stunning views. Visit a mountain hut for traditional Swiss fondue.'),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 4, 'Peak Summit Day', 'Challenge yourself with a summit hike. Celebrate with a mountain-top picnic and breathtaking 360-degree views.'),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 5, 'Departure', 'Leisurely breakfast and scenic train journey back to Zurich for departure.');

-- Thai Island Hopping Itinerary
INSERT INTO public.itineraries (package_id, day_number, title, description) VALUES
('d4e5f6a7-b8c9-0123-defa-456789012345', 1, 'Arrival in Phuket', 'Welcome to Thailand! Transfer to your beachfront resort. Relax and enjoy a Thai massage.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 2, 'Phang Nga Bay Cruise', 'Full-day cruise through the stunning limestone karsts of Phang Nga Bay. Visit James Bond Island and sea caves.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 3, 'Ferry to Koh Phi Phi', 'Scenic ferry ride to the famous Phi Phi Islands. Check into island accommodation.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 4, 'Snorkeling & Beach Day', 'Snorkeling trip to Maya Bay and surrounding reefs. Afternoon beach relaxation.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 5, 'Transfer to Koh Lanta', 'Ferry to the laid-back island of Koh Lanta. Explore local villages and mangroves.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 6, 'Kayaking & Cooking Class', 'Morning kayaking through mangrove forests. Afternoon Thai cooking class.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 7, 'Return to Phuket', 'Leisurely morning and ferry back to Phuket. Evening night market exploration.'),
('d4e5f6a7-b8c9-0123-defa-456789012345', 8, 'Departure', 'Free morning for shopping. Transfer to airport for departure.');

-- =============================================
-- SEED PACKAGE IMAGES
-- =============================================

-- Bali Paradise Retreat Images
INSERT INTO public.package_images (package_id, image_url, caption, display_order) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', 'Bali Beach', 1),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800', 'Rice Terraces', 2),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800', 'Ubud Temple', 3),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800', 'Balinese Food', 4);

-- Swiss Alps Images
INSERT INTO public.package_images (package_id, image_url, caption, display_order) VALUES
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800', 'Mountain Peaks', 1),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'https://images.unsplash.com/photo-1520962922320-2038eebab146?w=800', 'Alpine Village', 2),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800', 'Hiking Trail', 3);

-- Thai Island Hopping Images
INSERT INTO public.package_images (package_id, image_url, caption, display_order) VALUES
('d4e5f6a7-b8c9-0123-defa-456789012345', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800', 'Phi Phi Islands', 1),
('d4e5f6a7-b8c9-0123-defa-456789012345', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', 'Beach Resort', 2),
('d4e5f6a7-b8c9-0123-defa-456789012345', 'https://images.unsplash.com/photo-1559628233-100c798642d4?w=800', 'Snorkeling', 3);

-- =============================================
-- SEED DEPARTURES
-- =============================================
INSERT INTO public.departures (package_id, departure_date, return_date, available_slots, booked_slots, status) VALUES
-- Bali departures
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', '2026-03-12', '2026-03-19', 15, 8, 'available'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', '2026-04-15', '2026-04-22', 15, 2, 'available'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', '2026-05-10', '2026-05-17', 15, 0, 'available'),

-- Thai Island departures
('d4e5f6a7-b8c9-0123-defa-456789012345', '2026-02-10', '2026-02-18', 12, 10, 'available'),
('d4e5f6a7-b8c9-0123-defa-456789012345', '2026-03-15', '2026-03-23', 12, 12, 'sold_out'),

-- Iceland departures
('e5f6a7b8-c9d0-1234-efab-567890123456', '2026-01-15', '2026-01-21', 8, 5, 'available'),
('e5f6a7b8-c9d0-1234-efab-567890123456', '2026-02-20', '2026-02-26', 8, 0, 'available'),

-- Morocco departures
('f6a7b8c9-d0e1-2345-fabc-678901234567', '2026-04-20', '2026-04-29', 16, 6, 'available'),
('f6a7b8c9-d0e1-2345-fabc-678901234567', '2026-05-15', '2026-05-24', 16, 0, 'available');
