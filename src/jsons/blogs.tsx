export const blogs = [
  {
    id: 1,
    image: "/blogs/react-fibre.png",
    title: "React Fiber",
    description: `React Fiber is an upgrade to React that helps make apps more responsive and efficient by managing updates in smaller, controlled steps. It was introduced in React 16 to improve how React handles complex UI updates`,
    detailedJson: (
      <div>
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          What Does React Fiber Do?
        </p>
        <ul>
          <li>
            <strong>Breaks Work into Smaller Parts:</strong> Fiber splits big
            tasks into smaller units, allowing React to pause and resume work as
            needed. This way, the UI stays smooth even during complex updates.
          </li>
          <li>
            <strong>Prioritizes Important Tasks:</strong> React can focus on
            high-priority tasks, like user clicks, over background updates. This
            means quick reactions to user actions.
          </li>
          <li>
            <strong>Supports Smooth Loading and Error Handling:</strong> Fiber
            allows for error boundaries, so errors in one part of the UI don’t
            crash the whole app. It also enables Suspense for handling loading
            states without slowing down the app.
          </li>
        </ul>

        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          How Does Fiber Improve React?
        </p>
        <ul>
          <li>
            <strong>Better User Interactions:</strong> Quickly responds to user
            actions.
          </li>
          <li>
            <strong>Smoother Animations:</strong> Keeps animations from lagging.
          </li>
          <li>
            <strong>Error Management:</strong> Catches errors in nested
            components without breaking the UI.
          </li>
        </ul>

        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Why is Fiber Important?
        </p>
        <span>
          Fiber set the groundwork for Concurrent Mode, which helps React apps
          handle multiple tasks at once, making them faster and more
          user-friendly. In short, React Fiber makes React apps run smoother,
          handle complex updates better, and gives users a faster, more
          responsive experience.
        </span>
      </div>
    ),
  },

  {
    id: 2,
    image: "/blogs/react19.png",
    title: "React 19",
    description: `React 19 introduces exciting features to make apps load faster, improve user experience, and simplify the developer’s workflow. Here’s a quick look at what’s new.          `,

    detailedJson: (
      <div>
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          React Server Components (RSC)
        </p>
        <span>
          React 19 now supports React Server Components out of the box. This
          means parts of your app can run on the server, only sending the
          necessary HTML to the browser. This leads to faster load times and
          less data for users to download.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Faster initial loading, especially
            for complex apps.
          </li>
          <li>
            <strong>Example:</strong> Use it to fetch data on the server for
            parts of the app that don’t need user interaction.
          </li>
        </ul>
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Enhanced Concurrent Mode
        </p>
        <span>
          Concurrent Mode in React 19 is even better at handling multiple tasks
          smoothly. Now, React can prepare updates in the background, so there’s
          no lag for users, even during heavy work like data processing or
          animations.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Smoother interactions, even in
            complex apps.
          </li>
          <li>
            <strong>Example:</strong> Helpful for apps that show real-time data
            without slowing down.
          </li>
        </ul>
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Simplified Data Loading with Suspense
        </p>
        <span>
          React 19 makes Suspense the standard way to handle loading data.
          Suspense pauses the app until data is ready, automatically showing
          loading indicators when needed.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Simplifies data loading and makes
            loading screens consistent.
          </li>
          <li>
            <strong>Example:</strong> Show a spinner or loading message
            automatically when fetching data.
          </li>
        </ul>
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Improved Hot Reloading with React Refresh
        </p>
        <span>
          React Refresh has been upgraded for faster and smoother reloading
          during development. When you change code, you can see updates
          instantly in the browser without refreshing the page.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Faster testing for developers.
          </li>
          <li>
            <strong>Example:</strong> Try out UI changes instantly without
            losing app data.
          </li>
        </ul>
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Smaller App Size and Faster Loading
        </p>
        <span>
          React 19 makes apps load faster by removing unused code from the final
          package, making apps smaller and quicker.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Faster loading and less memory use.
          </li>
          <li>
            <strong>Example:</strong> Ideal for mobile apps where loading speed
            matters.
          </li>
        </ul>
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Better DevTools for Debugging
        </p>
        <span>
          React 19 has updated DevTools with more detailed performance tracking,
          making it easier to find and fix slow parts of your app.
        </span>
        <ul>
          <li>
            <strong>Why it’s cool:</strong> Easier debugging for developers.
          </li>
          <li>
            <strong>Example:</strong> Useful for finding performance issues in
            big apps.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 3,
    image: "/blogs/node_ms.png",
    title: "Microservices",
    description: `Microservices have become a go-to choice for building modern applications. Instead of building one giant application, we break it down into smaller, independent parts (called services). This makes the app faster, easier to manage, and allows teams to work on different parts at the same time. Node.js, with its lightweight and fast nature, is a great choice for building these services. Let’s dive into how you can set up and build microservices with Node.js. `,
    tags: [
      "#React19",
      "#ReactJS",
      "#WebDevelopment",
      "#ReactFiber",
      "#ReactServerComponents",
      "#ConcurrentMode",
      "#Suspense",
      "#ReactUpdates",
      "#FrontendDevelopment",
      "#JavaScriptFrameworks",
      "#DevTools",
      "#ReactRefresh",
      "#PerformanceOptimization",
      "#HotReloading",
      "#UserExperience",
      "#WebPerformance",
      "#CodeOptimization",
      "#DeveloperTools",
      "#ReactFeatures",
    ],
    detailedJson: (
      <div>
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          What Are Microservices?
        </p>
        <span>
          Microservices is a design approach where you build your application as
          a collection of smaller services. Each service has a specific
          function, like managing users, handling orders, or processing
          payments. These services are independent, so if one service goes down,
          it doesn’t crash the whole app.
        </span>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Benefits of Microservices
        </p>
        <ul>
          <li>
            Scalability: Each service can be scaled up separately, based on
            need.
          </li>
          <li>
            Fault Isolation: Problems in one service don’t break the others.
          </li>
          <li>
            Easier Maintenance: Working on smaller parts is more manageable than
            one big codebase.
          </li>
          <li>
            Technology Flexibility: Each service can use different technologies
            if needed.
          </li>
        </ul>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Setting Up Node.js for Microservices
        </p>
        <span>
          To build microservices in Node.js, you’ll need a few basic tools and
          libraries.
        </span>
        <ul>
          <li>Node.js: The core technology.</li>
          <li>
            Docker: For packaging each service in containers for easier
            deployment.
          </li>
          <li>
            Express.js or Fastify: Frameworks to make it easier to create REST
            APIs.
          </li>
          <li>
            Messaging Queues (like Redis or Kafka, if needed): For communication
            between services.
          </li>
          <li>
            Database: Choose one based on your needs, such as MongoDB, MySQL, or
            PostgreSQL.
          </li>
        </ul>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Structuring Your Project
        </p>
        <span>
          Each service is a separate project. Here’s a simple structure:
        </span>
        <pre>
          <code>
            {`├── user-service
│   ├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── index.js
├── order-service
│   ├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── index.js
└── gateway
├── src
├── routes
├── index.js
└── config`}
          </code>
        </pre>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Creating Your First Microservice
        </p>
        <span>Open your terminal and run:</span>
        <pre>
          <code>
            {`mkdir user-service
cd user-service
npm init -y
npm install express body-parser dotenv`}
          </code>
        </pre>

        <span>Basic Service Code</span>
        <span>
          In <code>user-service/index.js</code>, add this code:
        </span>
        <pre>
          <code>
            {`const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/user", (req, res) => {
res.json({ message: "User service is running!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("User Service running on port PORT");
});`}
          </code>
        </pre>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          How Services Communicate
        </p>
        <span>
          Since each microservice is separate, they need a way to talk to each
          other. You can do this with HTTP requests or a message queue.
        </span>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Option 1: Using HTTP with Axios
        </p>
        <span>
          To call another service over HTTP, install Axios, a popular HTTP
          client for Node.js.
        </span>
        <pre>
          <code>npm install axios</code>
        </pre>
        <span>
          In another service (like <code>order-service</code>), you can use
          Axios to call <code>user-service</code>:
        </span>
        <pre>
          <code>
            {`const axios = require("axios");

axios.get("http://localhost:3000/user")
.then(response => console.log(response.data))
.catch(error => console.error(error));`}
          </code>
        </pre>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Option 2: Using a Message Queue (Optional)
        </p>
        <span>
          For complex applications with high traffic, you might use messaging
          tools like Kafka or RabbitMQ, which handle a lot of messages quickly.
        </span>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Setting Up an API Gateway
        </p>
        <span>
          An API Gateway acts as the single entry point for all services, making
          it easy to route requests, add security, and manage rate-limiting and
          authentication.
        </span>
        <pre>
          <code>
            {`mkdir gateway
cd gateway
npm install express http-proxy-middleware`}
          </code>
        </pre>
        <span>
          In <code>gateway/index.js</code>:
        </span>
        <pre>
          <code>
            {`const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/user", createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true }));
app.use("/order", createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true }));

app.listen(8080, () => console.log("API Gateway running on port 8080"));`}
          </code>
        </pre>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          Storing Data in Each Service
        </p>
        <span>
          Each service should have its own database to stay independent and
          avoid dependency issues.
        </span>
        <pre>
          <code>
            {`version: 3.8
services:
user-service-db:
  image: mongo
  ports:
    - "27017:27017"
order-service-db:
  image: mysql
  environment:
    MYSQL_ROOT_PASSWORD: password
    MYSQL_DATABASE: orders
  ports:
    - "3306:3306"`}
          </code>
        </pre>

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>Security Basics</p>
        <span>
          Security is crucial in microservices to ensure each service remains
          safe from unauthorized access.
        </span>
        <ul>
          <li>
            <strong>Authentication:</strong> Use API keys or OAuth for secure
            access.
          </li>
          <li>
            <strong>HTTPS:</strong> Encrypt data with HTTPS to protect
            communication.
          </li>
          <li>
            <strong>Rate Limiting:</strong> Limit requests to each service to
            prevent abuse.
          </li>
          <li>
            <strong>Environment Variables:</strong> Store sensitive information
            like passwords in environment variables.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 4,
    image: "/blogs/vdom.png",
    title: "Virtual DOM",
    description: `React revolutionized front-end development with its efficient and powerful way of handling UI updates. Central to React’s efficiency are the concepts of the Virtual DOM (VDOM), Reconciliation, and the Diffing Algorithm. Understanding these concepts helps developers write more optimized and responsive applications. Let’s dive into what each of these terms means, why they’re important, and how they work together in React.`,

    detailedJson: (
      <div>
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          1. What is the DOM?
        </p>
        <span>
          The Document Object Model (DOM) is a programming interface for web
          documents. It represents the structure of a webpage as a tree, where
          each node is an element or a piece of content on the page. When you
          change something in a webpage—like the text in a paragraph, the color
          of a button, or the visibility of a modal—you’re making updates to the
          DOM.
        </span>
        <br />
        <span>
          However, the DOM can be slow to manipulate directly, especially as
          pages grow more complex with many elements. Each update to the DOM
          forces the browser to re-render parts of the page, which can result in
          poor performance and laggy user experiences.
        </span>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          2. Enter the Virtual DOM (VDOM)
        </p>
        <span>
          The Virtual DOM is a lightweight copy of the actual DOM. React uses
          this to manage and optimize changes more efficiently. Instead of
          updating the real DOM every time something changes, React uses the
          Virtual DOM to track changes, figure out what needs to be updated, and
          then only updates those specific parts in the real DOM. This makes the
          process much faster and smoother.
        </span>
        <span>In React, when the state or props of a component change:</span>
        <ul>
          <li>React re-renders the component to produce a new Virtual DOM.</li>
          <li>
            The new Virtual DOM is compared to the previous version of the
            Virtual DOM to identify changes (a process called Diffing).
          </li>
          <li>
            Only the changed elements are updated in the real DOM (the
            Reconciliation process).
          </li>
        </ul>
        <span>Why Use the Virtual DOM?</span>
        <ul>
          <li>
            <strong>Improved Performance:</strong> The Virtual DOM minimizes
            direct manipulation of the real DOM, which is slow.
          </li>
          <li>
            <strong>Efficient Updates:</strong> Only the parts of the DOM that
            have changed are updated, which makes React very fast.
          </li>
          <li>
            <strong>Consistency:</strong> The Virtual DOM helps maintain a
            predictable update flow, ensuring that React applications behave
            consistently.
          </li>
        </ul>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          3. Reconciliation: Finding and Applying Changes
        </p>
        <span>
          Reconciliation is the process React uses to determine how to update
          the real DOM when the state of the application changes. When a
          component’s state or props change, React creates a new Virtual DOM
          representation. Then, React must figure out the differences between
          this new Virtual DOM and the previous one to update only what’s
          necessary.
        </span>
        <span>
          To make this comparison efficient, React uses its Diffing Algorithm.
        </span>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          4. Diffing Algorithm: Comparing the Old and New Virtual DOM
        </p>
        <span>
          The Diffing Algorithm is the logic React uses to efficiently compare
          the previous Virtual DOM with the new Virtual DOM. Here’s how it
          works:
        </span>
        <span>Basic Principles of the Diffing Algorithm</span>
        <span>
          React’s Diffing Algorithm makes a few assumptions that enable it to be
          both fast and efficient:
        </span>
        <ul>
          <li>
            <strong>Element Type Changes:</strong> If two elements have
            different types (e.g., &lt;div&gt; vs. &lt;span&gt;), React assumes
            they are different and will replace the old element with the new
            one.
          </li>
          <li>
            <strong>Keys for Lists:</strong> When rendering lists, React relies
            on unique keys for each item. Keys help React identify which items
            have changed, been added, or removed. Without keys, React would need
            to re-render the entire list, which is slower.
          </li>
        </ul>
        <span>
          <strong>Steps in the Diffing Algorithm:</strong>
        </span>
        <ul>
          <li>
            Tree Comparison: React compares the new Virtual DOM tree with the
            old one, node by node.
          </li>
          <li>
            Identify Changes: When React finds a difference, it marks that node
            for an update in the real DOM.
          </li>
          <li>
            Apply Changes: Once the differences are identified, React updates
            only the specific nodes in the real DOM that have changed, leaving
            the rest of the DOM untouched.
          </li>
        </ul>

        <code>
          <span>Imagine you have a list of items:</span>
          <pre>
            <span key="1">Apple</span>
            <span key="2">Banana</span>
            <span key="3">Cherry</span>
          </pre>
          <span>If you add a new item with a unique key:</span>
          <pre>
            <span key="1">Apple</span>
            <span key="2">Banana</span>
            <span key="3">Cherry</span>
            <span key="4">Date</span>
          </pre>
        </code>
        <span>
          React’s Diffing Algorithm will recognize that only a new &lt;li&gt;
          with key="4" was added, so it will only insert that new element into
          the real DOM without re-rendering the entire list.
        </span>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          5. Putting It All Together: How the VDOM, Reconciliation, and Diffing
          Algorithm Work
        </p>
        <span>When a component’s state or props change:</span>
        <ul>
          <li>
            React creates a new Virtual DOM representing the updated component
            and its children.
          </li>
          <li>
            React then compares the new Virtual DOM with the previous version
            using the Diffing Algorithm.
          </li>
          <li>
            React reconciles the differences and applies only the necessary
            changes to the real DOM, ensuring an efficient update.
          </li>
        </ul>
        <span>
          This process happens very quickly, resulting in fast, smooth UI
          updates, even on complex pages with many elements.
        </span>
        <br />
        <br />

        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
          6. Benefits of React’s Virtual DOM and Reconciliation Process
        </p>
        <ul>
          <li>
            <strong>Speed:</strong> Updating only what’s necessary in the DOM
            reduces time and resource usage.
          </li>
          <li>
            <strong>Improved User Experience:</strong> Smooth updates mean no
            page flickering or stuttering.
          </li>
          <li>
            <strong>Consistency:</strong> The predictable flow of updates helps
            maintain UI state, especially in complex applications.
          </li>
        </ul>
        <span>
          The Virtual DOM, Reconciliation, and Diffing Algorithm are core to
          React’s high-performance, interactive applications. By creating an
          efficient and intelligent way of updating the DOM, React minimizes the
          performance issues that can come with direct DOM manipulation. Whether
          you’re building a simple app or a complex interface, understanding
          these concepts will help you write faster, more optimized, and more
          maintainable code in React.
        </span>
      </div>
    ),
  },

  {
    id: 5,
    image: "/blogs/cluster.png",
    title: "Clustering in Node.js",
    description: `Clustering is a way to run multiple copies of your Node.js application so that each copy (called a worker) can handle requests independently. This lets the application make use of multiple CPU cores, speeding up performance by allowing more tasks to be processed simultaneously.`,

    detailedJson: (
      <div>
        <b>What is Clustering?</b>
        <br />
        <span>
          Clustering is a way to run multiple copies of your Node.js application
          so that each copy (called a worker) can handle requests independently.
          This lets the application make use of multiple CPU cores, speeding up
          performance by allowing more tasks to be processed simultaneously.
        </span>
        <br />
        <span>
          Think of it as having multiple workers at a help desk—if one is busy,
          the next one can take the call.
        </span>
        <br />
        <br />

        <b>How Clustering Works in Node.js</b>
        <br />
        <span>
          In Node.js, the built-in cluster module lets us create multiple worker
          processes. These workers run in parallel on different CPU cores but
          share the same server port, which means they can handle requests
          together, splitting the workload.
        </span>
        <br />

        <b>Benefits of Using Clustering</b>
        <ul>
          <li>
            <strong>Better Use of CPU:</strong> You’re using all CPU cores
            rather than just one, which makes the application run more
            efficiently.
          </li>
          <li>
            <strong>Handles More Requests:</strong> With multiple workers, your
            app can process more requests at the same time.
          </li>
          <li>
            <strong>Increased Reliability:</strong> If one worker crashes, the
            others can still keep the app running, making it more reliable.
          </li>
        </ul>

        <b>Setting Up Clustering in Node.js</b>
        <br />
        <span>
          Let’s go through a simple example to set up clustering in your Node.js
          app.
        </span>
        <br />

        <b>Step 1: Load Required Modules</b>
        <br />
        <span>Start by loading the required modules:</span>
        <pre>
          <code>
            {`const cluster = require('cluster');
const http = require('http');
const os = require('os');`}
          </code>
        </pre>

        <b>Step 2: Create a Master Process and Worker Processes</b>
        <br />
        <span>
          The master process will create multiple worker processes (copies of
          the app), each handling incoming requests.
        </span>
        <pre>
          <code>
            {`if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log('Master process running with PID: ' + process.pid);

  // Create a worker process for each CPU core
  for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
  }

  // If a worker dies, create a new one
  cluster.on('exit', (worker) => {
      console.log('Worker ' + worker.process.pid + ' died. Starting a new worker.');
      cluster.fork();
  });
} else {
  // Worker processes: Each will listen on the same port
  http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello from Node.js Cluster!\\n');
  }).listen(8000);

  console.log('Worker process started with PID: ' + process.pid);
}`}
          </code>
        </pre>
        <span>In this setup:</span>
        <ul>
          <li>
            <strong>Master Process:</strong> This process forks (creates) a
            worker for each CPU core and checks if any worker dies, restarting
            it if needed.
          </li>
          <li>
            <strong>Worker Process:</strong> Each worker listens on the same
            port (8000 in this example), handling incoming requests.
          </li>
        </ul>
        <br />

        <b>Step 3: Run the Application</b>
        <br />
        <span>After setting up your code, run it with:</span>
        <pre>
          <code>node yourClusterFile.js</code>
        </pre>
        <br />

        <b>Handling Communication Between Master and Workers</b>
        <br />
        <span>
          In clustered apps, you may sometimes need the master and workers to
          share information. Node.js lets you send messages between the master
          and workers using built-in messaging.
        </span>
        <br />
        <span>
          If you’re working with larger setups, you might use tools like Redis
          or message queues to share data between processes in real-time.
        </span>
        <br />

        <b>Load Balancing in Node.js Clusters</b>
        <br />
        <span>
          By default, Node.js will distribute requests evenly across workers
          (called round-robin). But for advanced load balancing, you can use
          tools like Nginx to manage incoming traffic, which can provide
          additional control.
        </span>
        <br />

        <b>Using PM2 for Easy Cluster Management</b>
        <br />
        <span>
          PM2 is a process manager for Node.js that makes clustering easy. You
          can start your app in cluster mode by running:
        </span>
        <pre>
          <code>pm2 start yourClusterFile.js -i max</code>
        </pre>
        <span>
          This command will automatically start one worker per CPU core and
          handle restarts if any worker crashes. PM2 also provides useful
          monitoring and logging features.
        </span>
        <br />

        <b>When to Use Clustering</b>
        <br />
        <span>Clustering is especially helpful for:</span>
        <ul>
          <li>
            <strong>Real-time apps:</strong> Chat apps, live notifications, and
            online games.
          </li>
          <li>
            <strong>API servers:</strong> Websites or services handling lots of
            requests.
          </li>
          <li>
            <strong>CPU-heavy tasks:</strong> Applications with intense
            calculations that benefit from spreading the load.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 6,
    image: "/blogs/async.png",
    title: "Async Operations in JavaScript",
    description: `Asynchronous operations are a cornerstone of modern JavaScript programming, allowing developers to write non-blocking code that can handle multiple tasks simultaneously. `,
    detailedJson: (
      <div>
        <b>Why Async Operations Matter in JavaScript?</b>
        <br />
        <span>
          JavaScript operates in a single-threaded environment, meaning it can
          execute only one task at a time. However, many operations (e.g.,
          network requests, file I/O, timers) take time to complete. Async
          operations ensure that these tasks don’t block the main thread,
          keeping the application responsive.
        </span>
        <br />
        <br />

        <b>Techniques for Handling Async Operations in JavaScript</b>
        <br />

        <b>1. Callbacks</b>
        <br />
        <span>
          A callback is a function passed as an argument to another function,
          which is then executed after the async operation completes.
        </span>
        <br />
        <b>Example:</b>
        <pre>
          <code>
            {`function fetchData(callback) {
  setTimeout(() => {
      console.log("Data fetched");
      callback();
  }, 2000);
}

fetchData(() => {
  console.log("Processing data...");
});`}
          </code>
        </pre>

        <b>Pros:</b>
        <br />
        <span>Simple to implement.</span>
        <br />

        <b>Cons:</b>
        <br />
        <span>
          Leads to “callback hell” if multiple async operations are nested.
        </span>
        <br />
        <br />

        <b>2. Promises</b>
        <br />
        <span>
          Promises provide a cleaner way to handle async operations. A Promise
          represents a value that may be available now, or in the future, or
          never.
        </span>
        <br />
        <b>Example:</b>
        <pre>
          <code>
            {`function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched");
      }, 2000);
  });
}

fetchData()
  .then(data => {
      console.log(data);
      console.log("Processing data...");
  })
  .catch(error => {
      console.error("Error:", error);
  });`}
          </code>
        </pre>

        <b>Pros:</b>
        <ul>
          <li>Avoids callback hell.</li>
          <li>Better error handling through .catch().</li>
        </ul>

        <b>Cons:</b>
        <ul>
          <li>Requires chaining for sequential operations.</li>
        </ul>
        <br />

        <b>3. Async/Await</b>
        <br />
        <span>
          async/await is built on top of Promises and allows you to write
          asynchronous code that looks synchronous.
        </span>
        <br />
        <b>Example:</b>
        <pre>
          <code>
            {`async function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched");
      }, 2000);
  });
}

async function processData() {
  try {
      const data = await fetchData();
      console.log(data);
      console.log("Processing data...");
  } catch (error) {
      console.error("Error:", error);
  }
}

processData();`}
          </code>
        </pre>

        <b>Pros:</b>
        <ul>
          <li>Clean and readable syntax.</li>
          <li>Easier to debug.</li>
          <li>Built-in error handling with try/catch.</li>
        </ul>

        <b>Cons:</b>
        <ul>
          <li>
            Requires an environment that supports async/await (modern browsers
            or Node.js).
          </li>
        </ul>
        <br />

        <b>4. Parallel Execution with Promise.all</b>
        <br />
        <span>
          When you need to run multiple async operations in parallel,
          Promise.all is your friend.
        </span>
        <br />
        <b>Example:</b>
        <pre>
          <code>
            {`function fetchData1() {
  return new Promise(resolve => setTimeout(() => resolve("Data 1 fetched"), 2000));
}

function fetchData2() {
  return new Promise(resolve => setTimeout(() => resolve("Data 2 fetched"), 1000));
}

async function processData() {
  try {
      const results = await Promise.all([fetchData1(), fetchData2()]);
      console.log(results); // ["Data 1 fetched", "Data 2 fetched"]
  } catch (error) {
      console.error("Error:", error);
  }
}

processData();`}
          </code>
        </pre>

        <b>Pros:</b>
        <ul>
          <li>Executes tasks in parallel.</li>
          <li>Returns results as an array when all promises resolve.</li>
        </ul>

        <b>Cons:</b>
        <ul>
          <li>If any promise rejects, the entire Promise.all rejects.</li>
        </ul>
        <br />

        <b>5. Sequential Execution with for...of</b>
        <br />
        <span>
          Sometimes, you may need to run async operations sequentially.
        </span>
        <br />
        <b>Example:</b>
        <pre>
          <code>
            {`async function fetchData(id) {
  return new Promise(resolve => setTimeout(() => resolve("Data " + id + " fetched"), 1000));
}

async function processSequentially() {
  for (let i = 1; i <= 3; i++) {
      const data = await fetchData(i);
      console.log(data);
  }
}

processSequentially();`}
          </code>
        </pre>

        <b>Pros:</b>
        <ul>
          <li>Ensures tasks run one after another.</li>
          <li>Useful when order matters.</li>
        </ul>

        <b>Cons:</b>
        <ul>
          <li>Slower than parallel execution for independent tasks.</li>
        </ul>
      </div>
    ),
  },
];
