import { Blog } from "@/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

type PostsContextType = {
	posts: Blog[];
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

type PostsProviderProps = {
	children: ReactNode;
};

export function PostsProvider({ children }: PostsProviderProps) {
	const [posts, setPosts] = useState<Blog[]>([
		{
			title: "Sample Post: how to use shadcn ui in next js 13",
			date: "2017-07-15T00:00:00.000Z",
			tags: ["Web3", "engaging", "incubating"],
			body: [
				{
					content: `In this tutorial, we will see how to install & setup shadcn ui in next js 13. We will see how to use next 13 with typescript. there is multiple way you can use shadcn ui in next js 13. Run the following command to create a new Next.js project using the next-template template.`,
					type: "text",
				},
				{
					content: `
# with npm
npx create-next-app -e https://github.com/shadcn/next-template
# with yarn
yarn create next-app -e https://github.com/shadcn/next-template
          `,
					type: "code",
				},
				{
					content: `This creates a new Next.js 13 project with the following features.
          Next.js App directory
          Tailwind CSS
          
          TypeScript
          ESLint
          
          Prettier`,
					type: "text",
				},
				{
					content: `
          import Link from "next/link"

          import { siteConfig } from "@/config/site"
          import { buttonVariants } from "@/components/ui/button"
          
          export default function IndexPage() {
            return (
              <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <div className="flex max-w-[980px] flex-col items-start gap-2">
                  <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Beautifully designed components <br className="hidden sm:inline" />
                    built with Radix UI and Tailwind CSS.
                  </h1>
                  <p className="max-w-[700px] text-lg text-muted-foreground">
                    Accessible and customizable components that you can copy and paste
                    into your apps. Free. Open Source. And Next.js 13 Ready.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={siteConfig.links.docs}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants()}
                  >
                    Documentation
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={siteConfig.links.github}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    GitHub
                  </Link>
                </div>
              </section>
            )
          }          
          `,
					type: "code",
				},
				{
					content: `
          This will install dependencies, setup Tailwind CSS, and configure the cn utils for you.

          Note: For latest version you can check https://ui.shadcn.com/docs/installation
          
          
          
          If you want Manual Installation you can check https://ui.shadcn.com/docs/installation .
          `,
					type: "text",
				},
			],
			authors: [
				{
					authorName: "Tomide Adeoye",
					authorTitle: "Software Engineer",
				},
			],
		},
	]);

	useEffect(() => {
		const storedPosts = localStorage.getItem("blogPosts");

		if (storedPosts) {
			const parsedPosts = JSON.parse(storedPosts) as Blog[];
			setPosts(parsedPosts);
		}
	}, []);

	return (
		<PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
	);
}

export default PostsContext;
