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
## How to run:
  - Make sure you have node installed in version 16 or higher;
