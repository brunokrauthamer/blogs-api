# :computer: Blogs API
## About:
The objective of this project is to create a RESTful API that is integrated with a MySQL database, which will be used to manage and produce content for a blog.
## Concepts:
  - Database modeling;
  - Database manage (create, read, update and delete content)
  - RESTful API;
## Database ER Diagram:
![blogs_api-er_diagram](https://user-images.githubusercontent.com/102389687/236590259-e9cd15c7-3586-4450-9aeb-8372feff633a.png)
## Requirements:
  - Enpoint POST /login - Used to login registrated users :
    - Requisition body format:
    
      `{
          "email": "lewishamilton@gmail.com",
          "password": "123456"
      }`
    - Response body (if credentials are correct):
    
      `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}`
  - Endpoint POST /user - Used to registrate a new user:
    - Requisition body format:
    
    `{
          "displayName": "Brett Wiltshire",
          "email": "brett@email.com",
          "password": "123456",
          "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
          // image is optional
      }
    `
    - The following conditions are required:
      - "displayName" must be at least 8 characters long
      - "email" format must be valid
      - "password" length must be at least 6 characters long
    - Response body:
    
      `  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }`
  - Endpoint GET /user
    - Should return all users list
    - A valid Token must be sent via headers
    - Response body:
    
      `
      [
      {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      {
      "id": 2,
      "displayName": "Ronaldo Nazário",
      "email": "r9@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      }
      ]
      `
  - Endpoint GET /user/:id
    - Should return one user (defined by :id params)
    - A valid Token must be sent via headers
    - Response body:
    
    `
    {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    }
    `
  - Endpoint POST /categories
    - It should add a new category to the table in the database
    - A valid Token must be sent via headers
    - Requisition body:
    
    `{
        "name": "Typescript"
    }`
    - Response body:
    
    `
    {
      "id": 3,
      "name": "Typescript"
    }
    `
  - Endpoint GET /categories
    - It should return all categories stored in database:
    - A valid Token must be sent via headers
    - Response body:
    
    `
    [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    },
    ]
    `
  - Endpoint POST /post
    - It should add a new blog post to the database.
    - A valid Token must be sent via headers
    - Requisition body:
    
    `
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
    
    `
  - Endpoint GET /post
  - It should return a list with all the posts stored in the database.
  - A valid Token must be sent via headers
  - Response body:
  
  `
  [
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
      "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
     }
]
  `
  - GET /post/:id
    - It should return one post stored in the database, based on the id provided via params
    - A valid Token must be sent via headers
    - Response body:
    
    `
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
          {
              "id": 1,
              "name": "Inovação"
          }
      ]
    }
    `
  - Endpoint PUT /post/:id
    - It should update a post based on the id provided via params
    - A valid Token must be sent via headers
    - Just the post author must be able to update it
    - Just the atributes "title" and "content" can be updated.
    - Requisition body:
    
    `
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
    `
    - Response body:
    
    `
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2022-05-18T18:00:01.000Z",
      "updated": "2022-05-18T18:07:32.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }
      ]
    }
    `
  - Endpoint DELETE /post/:id
    - A post must be deleted by the id provided via params
    - A valid Token must be sent via headers
    - Just the post author can delete it
    - If all conditions are respected and the provided id exists the post will be deleted from the database
    - There is no response body, it will just responde with status 204
  - Endpoint DELETE /user/me
    - A valid Token must be sent via headers
    - The user will be deleted based on the token provided
    - There is no response body, it will just responde with status 204
    
## How to run:
  - Make sure you have Node installed in version 16 or higher;
