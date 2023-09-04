
---
# Blog Application

This is a simple blog application that allows users to compose and publish blog posts with various content types. It was developed using modern web technologies and follows best practices for building web applications.

## Table of Contents

* [Features](https://chat.openai.com/c/7d1db7d1-0fb6-4e15-a59e-51b3389a7d2b#features)
* [Technologies Used](https://chat.openai.com/c/7d1db7d1-0fb6-4e15-a59e-51b3389a7d2b#technologies-used)
* [Getting Started](https://chat.openai.com/c/7d1db7d1-0fb6-4e15-a59e-51b3389a7d2b#getting-started)
* [Usage](https://chat.openai.com/c/7d1db7d1-0fb6-4e15-a59e-51b3389a7d2b#usage)
* [Contributing](https://chat.openai.com/c/7d1db7d1-0fb6-4e15-a59e-51b3389a7d2b#contributing)

## Features

### 1. Compose Blog Posts

* Create and edit blog posts with a user-friendly form.
* Supports multiple sections within a blog post, including text, code, and images.
* Dynamically add and remove sections as needed.

### 2. Tags and Authors

* Add tags to categorize your blog posts.
* Include author details for each blog post, including name, title, description, avatar, and Twitter handle.
* Support for multiple authors in a single blog post.

### 3. Validation

* Ensure data integrity with validation for mandatory fields such as title, author name, and author title.
* Real-time error feedback to guide users in completing the form correctly.

### 4. Toast Notifications

* Notify users of successful blog post publication with a toast notification.
* Option to visit the published post directly from the notification.

### 5. Next.js and React

* Developed using [Next.js](https://nextjs.org/), a React framework for building server-rendered React applications.
* Utilizes React components and hooks for a dynamic and interactive user interface.

### 6. LocalStorage

* Persists blog post data locally in the browser's `localStorage`.
* Retrieves and displays existing blog posts, even after page refresh.

## Technologies Used

*  **Next.js** : A React framework for building server-rendered React applications.
*  **React** : A JavaScript library for building user interfaces.
*  **Formik** : A popular form management library for React applications.
*  **Yup** : A library for schema validation, used with Formik for form validation.
*  **Tailwind CSS** : A utility-first CSS framework for styling the application.
*  **TypeScript** : A statically typed superset of JavaScript, used to enhance code quality.
*  **localStorage** : Web storage for persisting blog post data locally in the browser.
*  **Toaster** : Custom toast notifications for user feedback.

## Getting Started

1. Clone this repository to your local machine:
   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/your-username/blog-app.git
   </code></div></div></pre>
1. Install project dependencies:
   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd blog-app
   npm install
   </code></div></div></pre>
1. Start the development server:
   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm run dev
   </code></div></div></pre>
1. Open your browser and visit `http://localhost:3000` to access the blog application.

## Usage

1.  **Compose a Blog Post** :
   * Click the "Compose" link in the navigation menu.
   * Fill out the form with your blog post details, including sections, tags, and author information.
   * Click the "Publish Blog Post" button to publish your post.
1.  **View Published Posts** :
   * On the home page, you can view all the published blog posts.
   * Click on a post to view its details.
1.  **Edit and Delete Posts** :
   * Edit and delete your own posts using the provided options on each post's detail page.
1.  **Explore Features** :
   * Explore the various features of the application, including dynamic section management, real-time validation, and toast notifications.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.


## Author

Tomide Adeoye
LinkedIn: https://www.linkedin.com/in/tomide-adeoye-828604129/
---
