/**
 * @file model.ts
 * @desc Defines the UserProfile interface and provides an array of user profiles.
 */

/**
 * Interface for a user profile with optional website.
 */
export interface UserProfile {
  avatarURL: string;  // URL of the user's avatar image
  name: string;       // User's name
  bio: string;        // User's bio/description
  website?: string;   // Optional website URL
}

/**
 * Array of user profiles using the UserProfile interface.
 */
export const users: UserProfile[] = [
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4220025?v=4',
    name: 'John Doe',
    bio: 'I am a web developer',
    website: 'https://johndoe.com',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/3132025?v=4',
    name: 'Jane Smith',
    bio: 'Frontend engineer and designer',
    website: 'https://janesmith.com',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4623025?v=4',
    name: 'Bob Johnson',
    bio: 'Full-stack developer',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4220947?v=4',
    name: 'Alice Roberts',
    bio: 'UX/UI Designer',
    website: 'https://aliceroberts.com',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4283525?v=4',
    name: 'Michael Brown',
    bio: 'Software Engineer',
    website: 'https://michaelbrown.dev',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/8275937?v=4',
    name: 'Emily Adams',
    bio: 'Frontend Developer',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4220741?v=4',
    name: 'David Wilson',
    bio: 'Data Scientist',
    website: 'https://davidwilson.ai',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4226175?v=4',
    name: 'Olivia Thompson',
    bio: 'Product Manager',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/4252016?v=4',
    name: 'Andrew Lee',
    bio: 'Mobile App Developer',
    website: 'https://andrewlee.dev',
  },
  {
    avatarURL: 'https://avatars.githubusercontent.com/u/7845631?v=4',
    name: 'Sophia Scott',
    bio: 'Graphic Designer',
  },
];