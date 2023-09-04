import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import Tag from "@/components/Tag";
import formatDate from "@/lib/utils/formatDate";
import LinkGo from "@/components/LinkGo";
import metadata from "data/metadata";
import NewsletterForm from "@/components/NewsletterForm";
import { Blog } from "@/types";
import PostsContext from "@/lib/utils/blogPostProvider";
import Pre from "@/components/Pre";

interface Props {
	title: string;
	initialDisplayPosts?: Blog[];
}

export default function ListLayout({ title, initialDisplayPosts = [] }: Props) {
	const [searchValue, setSearchValue] = useState("");
	const posts = useContext(PostsContext)?.posts ?? [];
	const filteredBlogPosts = posts.filter((frontMatter) => {
		const searchContent =
			frontMatter.title +
			frontMatter.body.toString() +
			frontMatter.tags?.join(" ");
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	const displayPosts =
		initialDisplayPosts.length > 0 && !searchValue
			? initialDisplayPosts
			: filteredBlogPosts;

	return (
		<>
			<div className="divide-y divide-gray-200 dark:divide-gray-600">
				<div className="space-y-2 pb-8 pt-6 md:space-y-5">
					<h1 className="mb-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						{title}
					</h1>
					<Link
						href="/compose"
						className="btn-primary my-5 rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"
					>
						Compose a new article
					</Link>
					<div className="relative max-w-full mt-5">
						<input
							aria-label="Search articles"
							type="text"
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder="Search articles"
							className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
						/>
						<svg
							className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
				<ul>
					{!filteredBlogPosts.length && "No posts found."}
					{displayPosts.map((frontMatter) => {
						const { date, title, tags, body } = frontMatter;
						return (
							<li key={title} className="py-4">
								<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
									<dl>
										<dt className="sr-only">Published on</dt>
										<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
											<time dateTime={date}>{formatDate(date!)}</time>
										</dd>
									</dl>
									<div className="space-y-3 xl:col-span-3">
										<div>
											<h3 className="text-2xl font-bold leading-8 tracking-tight">
												<Link
													href={`/${title}`}
													className="text-gray-900 dark:text-gray-100"
												>
													{title}
												</Link>
											</h3>
											<div className="mt-2 flex flex-wrap">
												{tags?.map((tag: string) => (
													<Tag key={tag} text={tag} />
												))}
											</div>
										</div>
										<div className="prose max-w-none text-gray-500 dark:text-gray-400">
											{body[0].type === "text" ? (
												body[0].content?.slice(0, 200) + "..."
											) : body[0].type === "image" ? (
												<img src={body[0].content} />
											) : (
												<Pre>
													<code>{body[0].content?.slice(0, 200) + "..."}</code>
												</Pre>
											)}
										</div>
										<div className="text-base font-medium leading-6">
											<LinkGo
												href={`/${title}`}
												aria-label={`Read now of "${title}"`}
											>
												Read now
											</LinkGo>
										</div>
									</div>
								</article>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="flex items-center justify-center pt-4">
				<NewsletterForm />
			</div>
		</>
	);
}
