/* eslint-disable @typescript-eslint/no-explicit-any */
interface Post {
  _id: string;
  slug: { current: string };
  title: string;
  publishedAt: string;
  mainImage?: any;
  author?: {
    name?: string;
    image?: any;
  };
  body?: any[];
}

export default Post;