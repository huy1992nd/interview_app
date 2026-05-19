export default [
      {
        id: 1,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "Can you please introduce yourself?",
        keys: ["10+ năm Full-Stack", "Back-end mạnh: Node.js, NestJS, microservices", "Front-end: React, Next.js, Angular", "AWS/GCP, Team Lead, English", "AI tools: Cursor, Copilot"],
        a: `Hi, my name is Huy. I'm a Full-Stack Developer with more than 10 years of experience in building web applications.

Throughout my career, I've worked on many scalable and reliable systems in finance, healthcare, and education domains, serving thousands of users.

My main strength is Back-End development. I have strong experience with Node.js, NestJS, Express.js, and microservices architecture. I've built RESTful APIs, real-time systems using WebSocket and Socket.IO, background job processing systems, and integrations with many third-party services such as Twilio, Firebase, PayPal, Stripe, and RapidAPI.

I also have experience designing scalable system architecture, optimizing database performance, handling large amounts of data, and improving system reliability and maintainability. In several projects, I worked with MongoDB and MySQL, including complex queries, aggregation pipelines, and performance optimization.

In addition, I have experience working with cloud platforms like AWS and Google Cloud. On AWS, I've used services such as EC2, S3, SES, CloudWatch, Docker, and Kubernetes/EKS for deployment, monitoring, and infrastructure management.

On the Front-End side, I have experience working with React.js, Next.js, and Angular. I've built responsive and user-friendly interfaces, integrated APIs, implemented reusable components, and optimized application performance for better user experience.

Recently, I've also taken on the Team Lead role, where I mentor junior developers, design databases and system architecture, communicate directly with customers, clarify requirements, and support technical decision-making.

I'm comfortable communicating in English with clients and team members in daily meetings and technical discussions.

In addition, I actively use AI tools like Cursor and GitHub Copilot to improve development productivity and speed up problem-solving.

Thank you for your time.`
      },
      {
        id: 2,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "Tell me about your latest project. What did you do? Most challenging problem and how you solved it?",
        keys: ["Influencer marketing platform (IG, TikTok)", "Stripe, Twilio, Firebase, AWS", "Team Lead: DB design, codebase, mentoring", "Challenge: scale hàng nghìn concurrent users", "Giải pháp: microservices, Redis, RabbitMQ, CDN, React.memo/useMemo/useCallback"],
        a: `In my latest project, I worked on a platform that helps advertisers promote their products through influencers on Instagram and TikTok.

The system included features such as campaign management, influencer matching, payment processing, and real-time notifications.

In this project, we used technologies such as Stripe for payment integration, Twilio for SMS services, Firebase for authentication and notifications, and AWS services for infrastructure and deployment.

As a Team Lead, I was responsible for designing the database architecture, building the initial codebase and project structure, mentoring team members, breaking down tasks, reviewing code, and communicating directly with customers to clarify requirements and support technical decision-making.

The most challenging problem I faced in this project was improving system performance and scalability because the platform needed to support thousands of concurrent users during large campaigns.

To solve this problem, on the Back-End side, we designed the system using a microservices architecture to make it easier to scale horizontally. We used Redis caching to reduce database load for frequently accessed data, optimized database queries and indexes, and used RabbitMQ for background jobs and asynchronous processing to avoid blocking the main services.

We also used AWS S3 for file storage and CDN services to improve image loading performance.

On the Front-End side, we optimized rendering performance by using React.memo, useMemo, and useCallback to avoid unnecessary re-renders. We also implemented lazy loading, pagination, and dynamic imports to reduce bundle size and improve page loading speed.

As a result, the system became more stable, scalable, and responsive even under high traffic conditions.`
      },
      {
        id: 32,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "Can you describe a project you built from scratch?",
        keys: ["Influencer marketing platform", "From requirements to production", "Team Lead: DB design, codebase, structure", "NestJS, React, Stripe, Firebase, AWS", "Zero to production, mentoring team"],
        a: `Yes. In my latest project, I helped build an influencer marketing platform from scratch — connecting advertisers with influencers on Instagram and TikTok.

I joined from the early stage when we clarified requirements with the customer, then designed the database, defined the project structure, and built the initial codebase.

The platform included campaign management, influencer matching, payment processing, and real-time notifications.

As Team Lead, I set up the technical foundation using Node.js/NestJS on the back end, React on the front end, and integrations with Stripe, Twilio, Firebase, and AWS.

I also broke down tasks, reviewed code, and mentored team members so we could move from zero to a production-ready system step by step.`
      },
      {
        id: 33,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "How did you design the architecture for that project?",
        keys: ["Microservices", "RESTful APIs", "Redis cache", "RabbitMQ async", "S3 + CDN", "MongoDB/MySQL", "Separation of concerns", "Scalable, stateless services"],
        a: `I designed the architecture based on scalability, maintainability, and business requirements.

On the back end, we used a microservices-oriented approach so core domains such as campaigns, users, payments, and notifications could scale independently.

We exposed RESTful APIs for the front end and third-party integrations, and used Redis for caching frequently accessed data to reduce database load.

Heavy or non-critical work — such as notifications, emails, and background processing — was handled asynchronously with RabbitMQ so the main API stayed responsive.

For storage, we kept structured business data in the database (MongoDB/MySQL depending on the module), while media files were stored in AWS S3 and delivered through CDN for better performance.

On the front end, we used React with a clear component structure, API integration layers, and performance optimizations such as lazy loading and pagination.

Overall, the architecture was stateless at the service layer, with shared state stored in the database, cache, or message queue — making it easier to scale horizontally.`
      },
      {
        id: 34,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "What challenges did you face during development?",
        keys: ["Thousands of concurrent users", "Performance & scalability", "Redis, indexes, query optimization", "RabbitMQ background jobs", "Front-end: React.memo, useMemo, useCallback", "CDN, S3, lazy loading"],
        a: `The biggest challenge was performance and scalability, especially during large campaigns when thousands of users were active at the same time.

We had to handle high traffic on APIs, fast-changing campaign data, and real-time user interactions without slowing down the system.

To solve this, on the back end we optimized database queries and indexes, introduced Redis caching, and moved heavy processing to RabbitMQ workers.

We also refined service boundaries in the microservices architecture so we could scale the bottlenecks independently.

On the front end, unnecessary re-renders were causing slow UI updates, so we applied React.memo, useMemo, and useCallback, along with lazy loading, pagination, and dynamic imports.

Another challenge was managing third-party dependencies such as Stripe, Twilio, and Firebase — we handled this with clear integration layers, retries, and proper error handling.

After these improvements, the system became much more stable and responsive under high load.`
      },
      {
        id: 35,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "How did you deploy and maintain the system?",
        keys: ["CI/CD GitHub Actions / GitLab CI", "Docker, Kubernetes, Helm, ArgoCD", "dev/staging/production branches", "Health checks, monitoring, rollback", "CloudWatch, logs, production support"],
        a: `We deployed and maintained the system using a fully automated CI/CD process.

When code was merged into development, staging, or production branches, the pipeline automatically ran lint checks, tests, Docker builds, and deployments.

We containerized services with Docker and deployed them to Kubernetes using Helm and ArgoCD (GitOps), which helped keep environments consistent and easy to roll back.

Each environment (dev, staging, production) had separate configuration and secrets managed through the CI platform.

Before switching traffic to a new version, we ran health checks and monitored logs and metrics (for example CloudWatch) to make sure services were healthy.

For maintenance, we monitored error rates, performance, and queue backlogs; fixed bugs through hotfix or regular release branches; and continuously improved database performance and caching based on production traffic patterns.

This approach reduced downtime risk and made releases predictable for the team and stakeholders.`
      },
      {
        id: 3,
        category: "react",
        section: "React & Frontend",
        q: "What is memoization in React?",
        keys: ["Tránh re-render & tính toán lặp lại", "React.memo → props không đổi thì không re-render child", "useMemo → cache kết quả tính toán nặng", "useCallback → cache reference function"],
        a: `Memoization in React is an optimization technique used to improve performance by avoiding unnecessary re-renders and expensive recalculations.

React provides several tools for memoization:

• React.memo — prevents a child component from re-rendering when its props have not changed.
• useMemo — caches the result of expensive calculations so the value is not recalculated on every render.
• useCallback — memoizes function references to prevent unnecessary re-renders when passing functions to child components.

Memoization helps improve application performance and provides a better user experience, especially in large or complex applications.`
      },
      {
        id: 4,
        category: "react",
        section: "React & Frontend",
        q: "Why does useEffect sometimes run in an infinite loop? How to prevent it?",
        keys: ["Effect chạy sau render → setState → re-render → lặp", "Dependency array sai hoặc thiếu", "Tránh update state không cần thiết trong effect", "useCallback/useMemo để ổn định reference object/function"],
        a: `useEffect runs after a component renders.

An infinite loop usually happens when the effect updates the component state, which triggers a re-render, and then the effect runs again continuously.

One common reason is missing or incorrect dependency arrays in useEffect.

To prevent this problem, we should carefully manage the dependency array and avoid unnecessary state updates inside the effect.

In some cases, we also use useCallback or useMemo to prevent function or object references from changing on every render, because changing references can also retrigger useEffect.`
      },
      {
        id: 5,
        category: "js",
        section: "JavaScript",
        q: "Describe Promises in JS. Then describe async/await.",
        keys: ["Promise: pending → fulfilled / rejected", "Dùng .then() và .catch()", "async/await: syntax đồng bộ, dễ đọc", "try/catch với async/await", "Tránh callback hell"],
        a: `A Promise in JavaScript is an object used to handle asynchronous operations.

A Promise has three states:
• pending
• fulfilled (resolved)
• rejected

We usually handle Promise results using .then() and .catch().

async/await is a cleaner and more readable way to work with Promises. It helps developers write asynchronous code in a synchronous style and avoids callback hell.

We can also use try/catch with async/await for better error handling.`
      },
      {
        id: 6,
        category: "js",
        section: "JavaScript",
        q: "What is the difference between CommonJS and ES Modules?",
        keys: ["CommonJS: require() / module.exports (Node.js truyền thống)", "ESM: import / export (chuẩn ECMAScript)", "ESM: static analysis, tree-shaking tốt hơn", "Node hiện hỗ trợ cả hai; package.json \"type\": \"module\""],
        a: `CommonJS and ES Modules are two module systems in JavaScript.

CommonJS (CJS):
• Uses require() to import and module.exports to export.
• Loads modules synchronously at runtime.
• Traditionally used in Node.js.

ES Modules (ESM):
• Uses import and export syntax.
• Static structure — enables tree-shaking and better optimization.
• Standard in modern JavaScript and supported in browsers and Node.js.

Key differences:
• Syntax: require vs import/export
• Loading: CJS is dynamic; ESM is statically analyzable
• Interop: mixing both may need careful configuration in Node (e.g. "type": "module" in package.json)

In modern projects, ESM is preferred for front-end bundlers and many new Node.js projects.`
      },
      {
        id: 7,
        category: "js",
        section: "JavaScript",
        q: "What's the difference between the browser environment and Node.js?",
        keys: ["Browser: DOM, UI, client-side", "Node: file system, networking, server-side", "Cùng JavaScript nhưng API khác nhau", "Cả hai: event-driven, non-blocking, event loop"],
        a: `The browser environment is used for client-side applications and works with the DOM and user interactions.

Node.js is used for server-side development and provides APIs for files, networking, and databases.

Both can run JavaScript, but they serve different purposes and provide different built-in APIs.

Both environments use an event-driven and non-blocking architecture with an event loop.`
      },
      {
        id: 8,
        category: "js",
        section: "JavaScript",
        q: "How do you solve error handling when functions don't declare what they throw?",
        keys: ["Expected errors: validation, auth, business rules → HTTP 4xx/5xx", "Unexpected errors: null ref, runtime → log + monitor", "Custom error classes + global exception handler", "try/catch + centralized logging"],
        a: `In JavaScript, error handling is challenging because functions do not explicitly declare which errors they can throw.

Normally, I classify errors into two categories:

Expected errors — business or validation-related errors, such as invalid input, authentication failures, missing request data, or database connection issues. These should be handled gracefully with proper validation, custom error messages, and appropriate HTTP status codes like 400, 401, or 500.

Unexpected errors — system or programming errors that we do not anticipate, such as null reference errors or runtime exceptions. For these cases, I usually use centralized error handling with try/catch, logging systems, and monitoring tools to track and debug issues.

In large applications, I also prefer using custom error classes and global exception handlers to make error handling more consistent and maintainable.`
      },
      {
        id: 9,
        category: "aws",
        section: "AWS & Lambda",
        q: "What are some considerations when writing code for Lambdas?",
        keys: ["Task nhẹ, thời gian chạy ngắn", "Stateless — chỉ xử lý logic", "DB/storage tách ra (RDS, S3, DynamoDB)", "Dễ deploy, auto-scale", "Tính phí theo thời gian thực thi + cold start"],
        a: `When using Lambda functions, I consider several important points:

• Keep functions lightweight — avoid long-running heavy tasks.
• Handle only business logic; keep functions stateless.
• Separate persistent data to external services (databases, S3).
• Easy to deploy and maintain with infrastructure as code.
• Cost is calculated by execution time and memory — optimize accordingly.
• Minimize cold starts: reduce package size and dependencies.
• Implement proper logging (CloudWatch) and monitoring.
• Use environment variables and IAM roles for secrets and permissions.`
      },
      {
        id: 10,
        category: "aws",
        section: "AWS & Lambda",
        q: "When are Lambdas NOT the right solution?",
        keys: ["Long-running / heavy workloads", "Cần persistent local state", "WebSocket dài hạn (có giới hạn timeout)", "Traffic ổn định cao — EC2/ECS có thể rẻ hơn", "Cold start không chấp nhận được"],
        a: `Lambda is NOT ideal when:

• Tasks require long execution time (Lambda has timeout limits, max 15 minutes).
• You need persistent connections or heavy CPU/memory workloads continuously.
• The application requires always-warm, low-latency responses and cold starts are unacceptable without provisioned concurrency.
• Steady, predictable high traffic where dedicated servers (EC2, ECS, Kubernetes) may be more cost-effective.
• Complex stateful processing that doesn't fit the stateless model.
• WebSocket or streaming workloads with very long sessions (though API Gateway WebSocket + Lambda can work with design constraints).

For these cases, containers on ECS/EKS or traditional servers are often better choices.`
      },
      {
        id: 11,
        category: "db",
        section: "Database",
        q: "When designing database tables: which columns go where? Which columns to index?",
        keys: ["Hiểu business → entities & relationships", "Normalization, 1-1 / 1-n / n-n", "NoSQL (MongoDB) vs SQL (PostgreSQL/MySQL)", "Index: WHERE, JOIN, ORDER BY, search", "B-tree vs hash; Elasticsearch cho full-text"],
        a: `When designing database tables, I usually start by understanding the business requirements and identifying the main entities and relationships in the system.

Based on that, I design tables with proper relationships such as one-to-one, one-to-many, or many-to-many relationships while trying to avoid unnecessary data duplication through normalization.

I also choose the database type based on the system requirements. For flexible and rapidly changing schemas, I may use NoSQL databases like MongoDB. For systems that require strong consistency, transactions, and relational data, I prefer SQL databases such as PostgreSQL or MySQL.

For indexing, I usually analyze query patterns first. I create indexes on columns frequently used in WHERE conditions, JOINs, ORDER BY clauses, and search operations.

B-tree indexes are commonly used for sorting and range queries, while hash indexes are useful for equality lookups.

For full-text search or complex searching, I often use Elasticsearch instead of relying only on database indexes.

In some systems, files are stored in S3 while metadata is stored in the database to improve scalability and storage management.`
      },
      {
        id: 12,
        category: "devops",
        section: "DevOps & CI/CD",
        q: "Workflow from getting requirements to deploying a feature.",
        keys: ["Clarify requirements → design DB/API", "Feature branch + tasks", "Code review, lint, tests", "Merge → CI/CD (GitHub Actions / GitLab CI)", "Docker → registry → K8s/Helm/ArgoCD", "Health check + rollback plan"],
        a: `First, I clarify the requirements and analyze the feature.

Then I design the database and APIs if needed, create tasks, and start development in a feature branch.

After coding, the code goes through code review, lint checks, and automated testing.

Once merged, the CI/CD pipeline is triggered using GitHub Actions or GitLab CI.

The pipeline builds Docker images, pushes them to a registry, and deploys them using Kubernetes, Helm, or ArgoCD.

Health checks are performed before switching traffic to the new version, and rollback is prepared in case of failures.`
      },
      {
        id: 13,
        category: "devops",
        section: "DevOps & CI/CD",
        q: "How was your CI/CD set up? How did you manage environments and branches?",
        keys: ["GitHub Actions + GitLab CI", "Branch dev/staging/prod → pipeline tự động", "Helm + ArgoCD → K8s/ECS", "Env vars + secrets theo môi trường", "Lint, test, build Docker, deploy"],
        a: `We used GitHub Actions and GitLab CI for CI/CD automation.

When code was pushed to development, staging, or production branches, the pipeline automatically ran lint checks, tests, Docker builds, and deployments.

We deployed applications using Helm and ArgoCD to Kubernetes or ECS environments.

For environment management, we separated dev, staging, and production configurations using environment variables and secrets in GitHub or GitLab.

The pipeline selected the correct environment based on the branch name.`
      },
      {
        id: 14,
        category: "js",
        section: "JavaScript",
        q: "Can you use timers (setTimeout) in async/await?",
        keys: ["Có — wrap setTimeout trong Promise", "await chỉ pause async function, không block thread", "delay helper: () => new Promise(r => setTimeout(r, ms))"],
        a: `Yes, but setTimeout must be wrapped inside a Promise because it does not return a Promise by default.

Example:
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await delay(1000);

await only pauses the current async function, not the entire Node.js thread.`
      },
      {
        id: 15,
        category: "js",
        section: "JavaScript",
        q: "Difference between a for loop and forEach in JS?",
        keys: ["for: break, continue, await tuần tự", "forEach: không await Promise bên trong", "Async: dùng for...of (tuần tự) hoặc Promise.all (song song)"],
        a: `The main difference is control flow and async behavior.

Traditional for loops support break, continue, and sequential async/await execution.

forEach is more concise for simple iterations, but it is not ideal for asynchronous workflows because it does not await Promises internally.

In asynchronous scenarios, I usually choose between for...of for sequential processing and Promise.all for controlled parallel execution.`
      },
      {
        id: 16,
        category: "react",
        section: "React & Frontend",
        q: "Differences between React.js and Node.js?",
        keys: ["React: UI, client-side, Virtual DOM, components", "Node: server runtime (V8), APIs, microservices", "Cùng JavaScript — khác layer & mục đích", "Full-stack JS stack phổ biến"],
        a: `ReactJS and Node.js both use JavaScript, but they target different layers of application development.

ReactJS focuses on client-side rendering and interactive UI development using component-based architecture and the Virtual DOM.

Node.js is a server-side runtime built on Chrome's V8 engine and is commonly used for APIs, microservices, real-time systems, and backend infrastructure.

Together, they are often used to build full-stack JavaScript applications.`
      },
      {
        id: 17,
        category: "react",
        section: "React & Frontend",
        q: "Differences between React.js and Next.js?",
        keys: ["React: library UI, thường CSR", "Next.js: framework trên React", "SSR, SSG, CSR — SEO tốt hơn SPA", "File-based routing, API routes, image optimization", "React linh hoạt; Next conventions + production-ready"],
        a: `ReactJS is a JavaScript library used for building user interfaces, mainly for client-side rendering.

Next.js is a framework built on top of React that provides additional features and better application structure.

One major difference is that traditional React applications usually rely on client-side rendering, while Next.js supports server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR).

Because of SSR and SSG, Next.js is generally more SEO-friendly than a standard React SPA application.

Next.js also provides built-in features such as file-based routing, API routes, image optimization, caching, and easier project structure management.

React gives more flexibility, while Next.js provides more conventions and production-ready features.`
      },
      {
        id: 18,
        category: "react",
        section: "React & Frontend",
        q: "How do you manage state in a React app? (local, global, server)",
        keys: ["Local: useState, useReducer (form, modal, UI)", "Global: Context, Redux, Zustand (auth, theme)", "Server: React Query, SWR (cache, refetch, sync)", "Tách layer giúp scale & maintain"],
        a: `In React applications, I usually manage state in three different levels: local state, global state, and server state.

Local state is used for component-specific data such as form inputs, modal visibility, or UI interactions. For local state, I typically use useState or useReducer.

Global state is used when multiple components need to share the same data, such as authentication, theme settings, or user information. For global state management, I usually use Context API, Redux, or Zustand depending on the project size and complexity.

Server state refers to data coming from APIs or backend services. For server state management, I usually use React Query or SWR because they provide caching, background refetching, synchronization, and loading/error handling.

This separation helps keep the application scalable and maintainable.`
      },
      {
        id: 19,
        category: "devops",
        section: "DevOps & CI/CD",
        q: "How does deployment work after coding is done?",
        keys: ["CI/CD tự động sau merge", "Branch theo environment", "Validate → test → Docker → registry → deploy", "Secrets isolated per env", "Rolling update, health check, rollback"],
        a: `Our deployment process is fully automated through CI/CD pipelines using GitHub Actions and GitLab CI.

After code review and approval, changes are merged into environment-specific branches that trigger automated pipelines.

The pipeline handles validation, testing, containerization, registry publishing, and deployment through Helm and ArgoCD.

Environment configurations and secrets are isolated per environment to ensure deployment safety and consistency.

We also implement rolling updates, health checks, monitoring, and rollback strategies to minimize downtime and deployment risks.`
      },
      {
        id: 20,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "Experience with Copilot / ChatGPT? Your perspective on AI in development?",
        keys: ["Cursor, Copilot, ChatGPT — productivity", "Research, architecture, boilerplate, debug", "Luôn review code AI trước production", "Không share secrets / credentials", "Phải hiểu logic trước khi dùng"],
        a: `Yes, I have experience using AI tools such as GitHub Copilot, Cursor, and ChatGPT to improve development productivity and save time.

When working on new requirements, I often use AI tools to help research technical solutions, generate architecture ideas, create implementation plans, and automate repetitive coding tasks.

AI tools are also helpful for debugging, writing boilerplate code, improving documentation, and learning new technologies more quickly.

However, I think developers still need to carefully review and validate AI-generated code before using it in production.

I also avoid sharing sensitive information such as secret keys, passwords, database credentials, or private customer data with AI tools.

Most importantly, I always make sure I fully understand the generated code and business logic before applying it to the project.`
      },
      {
        id: 21,
        category: "intro",
        section: "Giới thiệu & Dự án",
        q: "Frontend/JavaScript skills? Can you build from zero to deliverables?",
        keys: ["React, Next.js, state, API, performance", "Zero to production: requirements → deploy", "Team Lead: mentor + customer communication"],
        a: `Yes, I have strong experience with JavaScript, ReactJS, and Next.js on the frontend side.

I've worked with state management, API integration, performance optimization, and reusable component design.

I also have experience building projects from zero to production — joining from requirement discussion, system design, coding, deployment, and production support.

In some projects, I also worked as a Team Lead to support team members and communicate directly with customers.`
      },
      {
        id: 22,
        category: "arch",
        section: "Architecture & System Design",
        q: "When is it recommended to use stateful vs stateless?",
        keys: ["Stateful: session, WebSocket, chat, game", "Stateless: REST API, microservices — dễ scale", "Stateless: state lưu DB/Redis bên ngoài", "Scale horizontal dễ hơn với stateless"],
        a: `Stateful systems store client or session information between requests. They are useful when the application needs to maintain user sessions, authentication state, real-time connections, or user-specific behavior. Examples include WebSocket connections, online games, chat systems, or traditional session-based authentication.

Stateless systems do not store client state inside the application server. Each request contains all the information needed to process it.

Stateless architecture is usually preferred for REST APIs and microservices because it is easier to scale, deploy, and distribute across multiple servers.

In stateless systems, shared data is typically stored in external services such as databases, Redis, or distributed caches.`
      },
      {
        id: 23,
        category: "arch",
        section: "Architecture & System Design",
        q: "How do you optimize API performance?",
        keys: ["Redis cache cho request thường xuyên", "DB indexes theo search pattern", "CDN cho static files", "Pagination, select fields cần thiết", "Message queue (RabbitMQ/Kafka) cho heavy tasks", "Read/write DB separation"],
        a: `To improve API performance, I usually apply several strategies:

• Use caching (Redis) for frequently requested data.
• Create proper database indexes based on search and query patterns.
• Use CDN for static files like images.
• Use pagination (limit/offset or cursor) instead of loading all data.
• Select only necessary fields in database queries.
• Use message queues and event-driven architecture (RabbitMQ, Kafka) for heavy asynchronous tasks instead of blocking the API.
• Separate read and write databases (primary + replicas) to distribute load.`
      },
      {
        id: 24,
        category: "db",
        section: "Database",
        q: "How should you design a database to handle overload / high load?",
        keys: ["Redis cache", "Indexing + query optimization", "Read replicas", "S3 + metadata in DB", "CDN", "Queue cho async work", "Pagination, selective fields", "Normalization cân bằng performance"],
        a: `To handle high database load and overload situations, I usually apply several optimization and scaling strategies.

First, I use caching systems such as Redis for frequently requested data to reduce database traffic and improve response times.

Second, I optimize database performance through proper indexing based on query and search patterns. I also separate read and write operations using primary and replica databases to distribute traffic more efficiently.

For static files such as images or videos, I store the files in S3 or object storage services and keep only metadata in the database. CDN services are also used to reduce latency and offload static content delivery.

For heavy asynchronous workloads, I use message queues and event-driven architecture with tools such as RabbitMQ or Kafka to move expensive processing out of synchronous API requests.

Another important optimization is minimizing unnecessary database queries by selecting only required fields and using pagination for large datasets.

Finally, I carefully design relationships and normalization strategies to reduce unnecessary data duplication while still balancing performance requirements.`
      },
      {
        id: 25,
        category: "db",
        section: "Database",
        q: "How do you optimize a database (configuration, schema, operations)?",
        keys: ["Schema: relationships, indexes, tránh duplicate", "Queries: pagination, selective fields, tránh JOIN thừa", "Redis cache", "Read replicas", "Monitor slow queries", "S3/CDN thay vì lưu file lớn trong DB"],
        a: `To optimize a database, I usually focus on three areas: database configuration, schema design, and query/operation optimization.

For schema design, I carefully design relationships between tables, avoid unnecessary duplicate data, and create proper indexes based on query patterns and search conditions.

For query optimization, I try to select only necessary fields, use pagination for large datasets, and avoid expensive queries or unnecessary joins.

I also use caching systems like Redis for frequently accessed data to reduce database load.

For high-traffic systems, I separate read and write databases using read replicas to improve scalability.

For heavy asynchronous tasks, I use message queues such as RabbitMQ or Kafka to move processing out of synchronous database operations.

In terms of operations and infrastructure, I monitor slow queries, optimize database configurations, and use CDN or object storage like S3 for static files instead of storing large files directly in the database.`
      },
      {
        id: 26,
        category: "db",
        section: "Database",
        q: "How do you optimize query execution time?",
        keys: ["EXPLAIN / execution plan", "Indexes: WHERE, JOIN, ORDER BY", "Tránh full table scan", "Không SELECT *", "Pagination", "Redis cache", "Read replicas", "Slow query logs"],
        a: `To optimize query execution time, I usually start by analyzing slow queries and checking execution plans.

One important optimization is creating proper indexes based on search conditions, joins, sorting, and frequently used queries.

I also try to avoid full table scans by using indexed columns and optimized WHERE conditions.

Another important point is selecting only necessary fields instead of using SELECT *.

For large datasets, I use pagination with limit and offset or cursor-based pagination to reduce query load.

I also optimize joins and avoid unnecessary nested queries when possible.

For frequently accessed data, I use caching systems like Redis to reduce database traffic.

In high-traffic systems, I may separate read and write databases using read replicas.

I also monitor slow query logs and database metrics to identify bottlenecks and continuously improve performance.`
      },
      {
        id: 27,
        category: "arch",
        section: "Architecture & System Design",
        q: "How do you handle rollbacks? When are rollbacks needed?",
        keys: ["DB: transactions (ACID)", "Microservices: Saga pattern / compensating transactions", "Deploy: blue-green, canary, Helm/CI rollback", "Khi deploy lỗi hoặc data inconsistency"],
        a: `To handle rollbacks, I use different strategies depending on the layer of the system:

At the database level, I use transactions to ensure atomicity. If any step fails, the whole operation is rolled back automatically to keep data consistent.

In distributed systems or microservices, where transactions are not possible across services, I use the Saga pattern or compensating actions. This means if one step fails, I execute reverse operations to undo previous steps.

At the deployment level, I use strategies like blue-green deployments or canary releases, so if a new version has issues, I can quickly switch traffic back to the stable version or roll back the release using tools like Helm or CI/CD pipelines.`
      },
      {
        id: 28,
        category: "arch",
        section: "Architecture & System Design",
        q: "Scenario: Save to DB → send email. If email fails, how do you handle it?",
        keys: ["DB là source of truth — save trước", "Email async qua queue/event", "Không rollback DB khi email fail", "Retry + logging + dead-letter queue", "Eventual consistency"],
        a: `I would first save the data to the database since it is the source of truth. Email sending should be handled asynchronously using an event or queue system.

If the email fails, I would not rollback the database, but instead use retries, logging, and possibly a dead-letter queue to ensure eventual delivery.

This follows the principle of eventual consistency in distributed systems.`
      },
      {
        id: 29,
        category: "node",
        section: "Node.js & Backend",
        q: "How do you validate the request body for an incoming API call?",
        keys: ["DTO/schema validation (class-validator, Joi, Zod)", "Business rules ở service layer", "DB constraints là lớp cuối", "HTTP status codes rõ ràng"],
        a: `I validate API requests in multiple layers:

1. Schema validation at the DTO level (e.g. class-validator in NestJS, Joi, or Zod) — type, format, required fields.
2. Business rule validation in the service layer — domain logic, permissions, cross-field rules.
3. Database constraints as a final safeguard — unique keys, foreign keys, not null.

This ensures correctness, security, and consistency of data.`
      },
      {
        id: 30,
        category: "react",
        section: "React & Frontend",
        q: "What are commonly used React components, and how do you use them?",
        keys: ["Functional components + Hooks (chuẩn hiện tại)", "Reusable UI components", "Controlled components cho forms", "Custom hooks cho shared logic", "Class components/HOC ít dùng hơn"],
        a: `In React, I mainly use functional components combined with hooks. I structure applications using reusable UI components, controlled components for forms, and custom hooks for shared logic.

Older patterns like class components and HOCs still exist but are less common in modern codebases.`
      },
      {
        id: 31,
        category: "react",
        section: "React & Frontend",
        q: "React Hooks — what are they and which ones do you use?",
        keys: ["Hooks từ React 16.8 — state & lifecycle trong functional components", "useState, useEffect, useRef", "useMemo, useCallback — performance", "Custom Hooks — tái sử dụng logic"],
        a: `React Hooks are functions introduced in React 16.8 that allow us to use state and lifecycle features in functional components, without needing class components. They help make code more clean, reusable, and easier to maintain.

Main hooks I use:
1. useState — manage component state
2. useEffect — handle side effects (API calls, subscriptions)
3. useRef — access DOM elements or persist values without re-render
4. useMemo — cache expensive calculations
5. useCallback — memoize function references
6. Custom Hooks — extract and reuse logic across components`
      }
    ];
