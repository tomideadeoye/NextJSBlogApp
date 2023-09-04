import Tag from "@/components/Tag";
import formatDate from "@/lib/utils/formatDate";
import Pre from "../components/Pre";
import { Author } from "@/types";
import Link from "next/link";
import Image from "../components/Image";
import metadata from "data/metadata";

export interface Blog {
	title: string;
	date: string;
	tags: string[];
	lastmod: string;
	draft: boolean;
	summary: string;
	bibliography: string;
	type: string;
	readingTime: {
		text: string;
		minutes: number;
		time: number;
		words: number;
	};
	slug: string;
	path: string;
	filePath: string;
	body: {
		type: string;
		content: string;
	}[];
}

interface Props {
	content: any;
	[key: string]: unknown;
}

export const BlogDetailLayout = ({ content }: Props) => {
	if (!content) {
		return null;
	}

	return (
		<div>
			<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
				{content?.title}
			</h1>
			<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
				<dl>
					<dt className="sr-only">Published on</dt>
					<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
						<time dateTime={content?.date}>{formatDate(content?.date)}</time>
					</dd>
				</dl>
				<div className="space-y-3 xl:col-span-3">
					<div className="mt-2 flex flex-wrap">
						{content?.tags?.map((tag: string) => <Tag key={tag} text={tag} />)}
					</div>
					{content?.body?.map((item: { type: string; content: string }) => {
						if (item?.type === "text") {
							return (
								<div
									key={item?.content}
									className="prose max-w-none text-gray-500 dark:text-gray-400"
								>
									{item?.content}
								</div>
							);
						}
						if (item?.type === "image") {
							return (
								<div
									key={item?.content}
									className="prose max-w-none text-gray-500 dark:text-gray-400"
								>
									<img src={item?.content} />
								</div>
							);
						}
						if (item?.type === "code") {
							return (
								<div
									className="prose max-w-none text-gray-500 dark:text-gray-400"
									key={item?.content}
								>
									<Pre>
										<code>{item?.content}</code>
									</Pre>
								</div>
							);
						}
					})}{" "}
				</div>
				<dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
					<dt className="sr-only">Authors</dt>
					<dd>
						<ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
							{content.authors.map((author: Author) => (
								<li
									className="flex items-center space-x-2"
									key={author.authorName}
								>
									<Image
										src="/static/images/avatar.webp"
										width={38}
										height={38}
										alt="avatar"
										className="h-10 w-10 rounded-full"
									/>

									<dl className="whitespace-nowrap text-sm font-medium leading-5">
										<dt className="sr-only">Name</dt>
										<dd className="text-gray-900 dark:text-gray-100">
											{author.authorName}
										</dd>
										<dt className="sr-only">Twitter</dt>
										<dd>
											<Link
												href={metadata.linkedin}
												className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											>
												{author.authorTitle}
											</Link>
										</dd>
									</dl>
								</li>
							))}
						</ul>
					</dd>
				</dl>
			</article>

			<div className="flex w-full items-end justify-end gap-5">
				<button
					aria-label="Scroll To Top"
					type="button"
					onClick={() => {
						window.scrollTo(0, 0);
					}}
					className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
				>
					<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
