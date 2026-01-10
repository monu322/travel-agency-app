export interface Package {
  id: string;
  title: string;
  duration: string;
  groupSize?: string;
  price: number;
  dateRange: string;
  status: 'active' | 'draft' | 'sold_out' | 'archived';
  image: string;
  coverImage: string;
  description: string;
  itinerary: ItineraryDay[];
  gallery: string[];
  maxGuests: number;
  startDate: string;
  isActive: boolean;
  isFeatured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description?: string;
}

export const packages: Package[] = [
  {
    id: '1',
    title: 'Bali Paradise Retreat',
    duration: '7 Days',
    groupSize: 'Group of 15',
    price: 1200,
    dateRange: 'Oct 12 - Oct 19',
    status: 'active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SMfte40vXziSzgxcdEyzbe2tV2FPwyMZeQg_zumyF35aViHf79Dz12Lx1S9zdaeGgCOwEJ6Dzq2d-wjZmD54YxABvpFw6p5hSamIX8OsE76sxrMmGJ-LUNQljcX1H7Wk0_jQqNIKoEpkjqZCstAERT-qv4nhu01ZJ8Pu4nX21mellHjHgjM0veM5LvkCjnyleHtuHCzTamdcg6j4oGoXikWgdsCTXJeZ09NOKEkQN5rpWbNL5eDmkow4ei7XQ3iGgqmuW_gJZtT5',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR7DGFinEGdyTWbmILSIsNWQAeMSBDqebcyfoyLjkv2kyK4qLt9JwbUAGOqlh_jdFTDCOU2IZEcx2J4HXJKLutSlsvY5hnHyBp3BN1ES15Tm3VUDfVasnHTRon851jRhIfBp-ZLgsha8V56dlYqNUJSrSesDCi6veb0e9gV8OcPmucTgKSEwjOXQIvwifUK8Txx1DBOvUOayU6_tBeoIlm-_5j93uHMXMlZL4DZ7k5W-W77OV-NUKOrWju9WC93T5PZP2cLOLuPi75',
    description: 'Experience the ultimate tropical getaway in Bali. From the lush rice terraces of Ubud to the pristine beaches of Nusa Dua, this 7-day retreat is designed for relaxation and adventure.',
    itinerary: [
      { day: 1, title: 'Arrival in Denpasar & Transfer to Ubud', description: 'Meet and greet at the airport followed by a scenic drive to the cultural heart of Bali.' },
      { day: 2, title: 'Sacred Monkey Forest & Rice Terraces' },
      { day: 3, title: 'Sunrise Yoga & Cooking Class' },
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMSDtbJfX30J-ZM_dPZvGzCKwGsI-ckOnoXKC6KyPHDChIneWGFaV-vAE7d-JZXQ_Ty9InUqhEi-Yrbgy_AIeCS1Aa6JhYOvC6rZRV3yCnfh5Teb9_SHprWMmg2bIBpN0Cjz2GTqnaJ7RlTzGxBne8SPcJQIxl3YX2HBfhEkAZKJ3_yGWsEWmJHkYGVF_mRqA0_AnRiwlcNhOP1QUStFKS6sIIuib-kKOXEVTDYU-NgOp-GgZwFo5Td8OragAzPN7vwzhwVRHLnwbh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDFSRlW0lgvTn2YsQoUbj9xGtoIj-Na0X8k6iM5r_i8z-75W9SqmOT4WSUR2_s25Wu9mqHFzHNkAUyG-CdecFzWuioSdkEZ3OqWs3DnCAXiHdPo3ADrZhNAySn-aKvuhK3vXfOywms7LeqVUUT9HRsiKiCiiR4JRwo9OneuXcxJENbUzrXveyt1JjXOlp2qx2kUDsw7r8YcgkYWShKnklSkS93KD6cSxHVhSg5V-oLBVGaMNh939tiruGlr59vNnO4y77eF_A5imF4G',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiXLxpafnaHDLg5hKb0IivHiMy9dUT8Ar7GgKgCldF6PARi8HpJd_WsmScn1yPjmoydYePR7I0qcrGsx54fQsEW-r4q2mWDFCVXF9uHlvmthOTc6kULuCnxrYLdezj1iaJG7AmJ4p51tqyg6bHTalqqP0PbkDwZrVqv5qPBoDm9c0k8ZPGWO-P6BtiFzlIfmuepBDnh33JQXYlA9Ym6DKgRg9T0ZHDudmYLq0Mu5eY4GrB5Uip5ocvr8f2UjRVASK-uiJS0iK-SlD',
    ],
    maxGuests: 15,
    startDate: 'Oct 12, 2023',
    isActive: true,
    isFeatured: false,
  },
  {
    id: '2',
    title: 'Swiss Alps Hiking',
    duration: '5 Days',
    price: 2400,
    dateRange: 'Dec 05 - Dec 10',
    status: 'draft',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMsffvtp1ejNx2oPRwSSM2AFhsxZh5eiatJ1xn6lRvkG2DaMfPkDfH_LfL3cPQWlLS3R6LfthwWhwKi1kCu_crUesGjYA0fOq9SzDVU_1WGMS2z4WY1JaP81blDChwgtozxXI9tdwUujmRRWSicFp2Jx908GI3dQx5mLJxwWt64p6G87EYIgDwUxt5eUhfpHfh0TKcgGTIlB49OPfJMFyRl-UvMj9i3CVFEYLAMq1pauIufMRfw38_tnydgsT5ikeejUJL1AaSY4_s',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMsffvtp1ejNx2oPRwSSM2AFhsxZh5eiatJ1xn6lRvkG2DaMfPkDfH_LfL3cPQWlLS3R6LfthwWhwKi1kCu_crUesGjYA0fOq9SzDVU_1WGMS2z4WY1JaP81blDChwgtozxXI9tdwUujmRRWSicFp2Jx908GI3dQx5mLJxwWt64p6G87EYIgDwUxt5eUhfpHfh0TKcgGTIlB49OPfJMFyRl-UvMj9i3CVFEYLAMq1pauIufMRfw38_tnydgsT5ikeejUJL1AaSY4_s',
    description: 'Explore the majestic Swiss Alps with guided hiking tours through breathtaking mountain trails.',
    itinerary: [
      { day: 1, title: 'Arrival in Zurich & Transfer to Alps' },
      { day: 2, title: 'Alpine Meadows Hike' },
    ],
    gallery: [],
    maxGuests: 10,
    startDate: 'Dec 05, 2023',
    isActive: false,
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Kyoto Cherry Blossom',
    duration: '10 Days',
    price: 3100,
    dateRange: 'Apr 01 - Apr 11',
    status: 'sold_out',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMdYBCn1YCI9iP_Gz3CRbFOliN21LbHskqa91VVbumfUKncBhmRmqh13RyYj72JrJkJfn61xY9szr6SETn7TFu8E33ICcKAAOz7F-BFg1OkF0R1CkixgoaupeQFBymb2v9oKiOmhtegMSVCfPLLrQLTdY8xGAUtNueVM9xOrgqjr0YvmxXbHnkugUUfzaKf_2O1a2JClK1NCnY8eBNxySr7C9Wqe20bQK-o83f2JtYIMev-jT1NmdouDAu0wC5X7DbWZCMwgBD41LW',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMdYBCn1YCI9iP_Gz3CRbFOliN21LbHskqa91VVbumfUKncBhmRmqh13RyYj72JrJkJfn61xY9szr6SETn7TFu8E33ICcKAAOz7F-BFg1OkF0R1CkixgoaupeQFBymb2v9oKiOmhtegMSVCfPLLrQLTdY8xGAUtNueVM9xOrgqjr0YvmxXbHnkugUUfzaKf_2O1a2JClK1NCnY8eBNxySr7C9Wqe20bQK-o83f2JtYIMev-jT1NmdouDAu0wC5X7DbWZCMwgBD41LW',
    description: 'Experience the magical cherry blossom season in Kyoto, Japan.',
    itinerary: [
      { day: 1, title: 'Arrival in Kyoto' },
    ],
    gallery: [],
    maxGuests: 20,
    startDate: 'Apr 01, 2024',
    isActive: true,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Thai Island Hopping',
    duration: '8 Days',
    groupSize: 'Group of 12',
    price: 1850,
    dateRange: 'Nov 10 - Nov 18',
    status: 'active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkega1UBvAcp-y-ftDeH5gkKLT1qfDnsiqNHMDNWIYiBrxDbwae3QY7P9Xx3owtRmbnXlrVkE-pFd2b7d9SkOnMQju3zEUrde9SfTXcGaDFPbup1zj5HVGKYffPi-FymNF7OJqETjwpmFSMG-5b5_3O0ZkdKBaMNIOUxjfYYaImghKPGh5SGRWAS0UiunHkMS92nhPB0eYb7KFiHZ-5PF3sTBDWuqzOTQg7_OOY3Z67pOpMIOkJmjFnLqoqcAY-70p4k5A8z-2VEu',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkega1UBvAcp-y-ftDeH5gkKLT1qfDnsiqNHMDNWIYiBrxDbwae3QY7P9Xx3owtRmbnXlrVkE-pFd2b7d9SkOnMQju3zEUrde9SfTXcGaDFPbup1zj5HVGKYffPi-FymNF7OJqETjwpmFSMG-5b5_3O0ZkdKBaMNIOUxjfYYaImghKPGh5SGRWAS0UiunHkMS92nhPB0eYb7KFiHZ-5PF3sTBDWuqzOTQg7_OOY3Z67pOpMIOkJmjFnLqoqcAY-70p4k5A8z-2VEu',
    description: 'Discover the stunning islands of Thailand with this island-hopping adventure.',
    itinerary: [
      { day: 1, title: 'Arrival in Phuket' },
    ],
    gallery: [],
    maxGuests: 12,
    startDate: 'Nov 10, 2023',
    isActive: true,
    isFeatured: false,
  },
];
