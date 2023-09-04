import ListLayout from "@/layouts/ListLayout";
import PostsContext from "@/lib/utils/blogPostProvider";
import { sortedBlogPost } from "@/lib/utils/contentlayer";

export default function Blog() {
	const postContext = useContext(PostsContext);

	const allPosts = postContext?.posts ?? [];
	const posts = sortedBlogPost(allPosts);

	return <ListLayout initialDisplayPosts={posts} title="All Posts" />;
}
