**Blog Application API - Backend**

This is a simple RESTful API for a Blog application built with Node.js, Express, MongoDB, and Mongoose.

**Features**
1. User authentication with JWT.
2. Create, read, update, and delete blog posts.
3. Basic error handling and input validation.
4. MVC pattern for better code organization.

**Endpoints**

**User Authentication**

**1. Register a New User**

**URL:** /register

**Method:** POST

**Description:** Registers a new user.

**Request Body:**

**name: String (required)

email: String (required)

password: String (required, minimum 8 characters)
**

**Response:**

**200 OK:** Returns a JWT token on successful registration.

**400 Bad Request:** Validation error or user already exists.


**2. Login User**

**URL**: /login

**Method**: POST

**Description**: Logs in a user.

**Request Body:**

**email**: String (required)

**password**: String (required)

**Response**:

**200 OK**: Returns a JWT token on successful login.

**400 Bad Request**: Invalid credentials or user doesn't exist.

-------------------------------------

**Blog Posts**

**1. Get All Posts**

**URL**: /posts

**Method**: GET

**Description**: Fetches all blog posts.

**Response:**

**200 OK**: Returns an array of blog posts.


**2. Get a Specific Post**

**URL**: /posts/:id

**Method**: GET

**Description**: Fetches a specific blog post by ID.

**Response**:

**200 OK**: Returns the blog post object.

**404 Not Found:** Post does not exist.


**3. Create a New Post**

**URL:** /posts

**Method:** POST

**Description:** Creates a new blog post.

**Request Body:**

**title:** String (required)

**content:** String (required)

**cardSummary**: String (required)

**image:** File (optional, handled via Multer)

**createdAt:** Date

**Response:**

**201 Created:** Returns the created blog post.

**400 Bad Request:** Validation error.


**4. Update a Post**

**URL:** /posts/:id

**Method:** PUT

**Description:** Updates an existing blog post by ID.

**Request Body:**

**title:** String (optional)

**content:** String (optional)

**image: File (optional, handled via Multer)**

**Response:**

**200 OK:** Returns the updated blog post.

**404 Not Found:** Post does not exist.

**400 Bad Request:** Validation error.


**5. Delete a Post**

**URL**: /posts/:id

**Method**: DELETE

**Description**: Deletes a blog post by ID.

**Response**:

**200 OK**: Post successfully deleted.

**404 Not Found:** Post does not exist.

**Setup:**

1. First clone this repo
   
2. npm install
  
3. Create a .env file in the root directory:

     MONGODB_URI:...

     JWT_SECRET:...

4. npm start


**Frontend Repo - https://github.com/PritomDutta89/BlogApp-Frontend**
