📝 Simple Personal Blog Template

A simple personal blog template built with Next.js 13+, TypeScript, and Tailwind CSS. This project serves as a foundation for anyone looking to create their own blog with modern technologies and best practices.

🚀 Features
Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance.
Responsive Design with Tailwind CSS for seamless viewing on all devices.
TypeScript for type safety and improved developer experience.
Markdown Support for writing and managing blog posts.
Dynamic Routing for individual blog post pages.
SEO Optimization with customizable metadata.
📥 Installation
Follow these steps to set up the project locally:

Clone the Repository

bash
Copy code
git clone https://github.com/lowkeysam/simple-next.js-blog.git
Navigate to the Project Directory

bash
Copy code
cd simple-next.js-blog
Install Dependencies

Using npm:

bash
Copy code
npm install
Or using Yarn:

bash
Copy code
yarn install
Configure Environment Variables

If your project requires any environment variables, create a .env.local file in the root directory and add your variables:

env
Copy code

Run the Development Server

Using npm:

bash
Copy code
npm run dev
Or using Yarn:

bash
Copy code
yarn dev
Open in Browser

Visit http://localhost:3000 to view your blog.

🛠️ Usage
Adding New Posts

Add your blog posts as Markdown (.md) files in the posts directory. Each file should include front matter for metadata.

markdown
Copy code
---
title: "Your Post Title"
date: "2024-04-01"
image: "/images/your-image.jpg"
categories:
  - "Category1"
  - "Category2"
tags:
  - "tag1"
  - "tag2"
---

Your blog post content goes here.
Customizing the Layout

Modify the components in the src/components/ui/ directory to customize the Button and Input components or add new UI elements as needed.

Styling

Tailwind CSS is used for styling. Customize your styles by editing the src/app/globals.css file or by extending the Tailwind configuration in tailwind.config.ts.

🤝 Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the Repository

Create a New Branch

bash
Copy code
git checkout -b feature/YourFeatureName
Commit Your Changes

bash
Copy code
git commit -m "Add some feature"
Push to the Branch

bash
Copy code
git push origin feature/YourFeatureName
Open a Pull Request

Describe your changes and submit the pull request for review.

📜 License
This project is licensed under the MIT License.