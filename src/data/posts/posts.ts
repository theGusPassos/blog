import Post from "@/models/post";

export const posts: Post[] = [
  {
    id: 3,
    date: new Date(2020, 8, 4),
    title: "My experience in the 2020 GMTK Game Jam",
    folder: "3_my_experience_in_the_2020_GMTK_game_jam",
    issueId: 7,
  },
  {
    id: 2,
    date: new Date(2020, 6, 8),
    title: "Cutting sprites in Unity programmatically",
    folder: "2_cutting_sprites_in_unity_programmatically",
    issueId: 4,
  },
  {
    id: 1,
    date: new Date(2020, 4, 24),
    title: "2D animation in Unity with different sprite sizes",
    folder: "1_2d_animation_in_unity_with_different_sprite_sizes",
    issueId: 2,
  },
];
