Backend

1. We set up the project by setting up frontend/backend folders
2. Set up virtual environment and requirements.txt
3. core folder has core backend files
4. personalfinance app is the first Django app
5. .env file contains sensitive information
6. Set up database with postgres - still need to figure out how that shit works
7. API tested and works
8. Backend setup is ready for development

    Auth:
    1. Created function based Register view
    2. Created endpoints in core urls (api/auth) and endpoints in auth app (register, login)
    3. Endpoints are now ready to receive API requests

Frontend
1. Assets and design files migrated
2. Created Login and Register components as well as primitive ButtonPrimary component
3. Created Login and Register endpoints
4. Used Redux 

 Authentication
 1. Register page now sends a Json response with name, email password
 2. Form validation ensures all fields are first valid, otherwise provides user feedback
 3. API flow: Register.js > authActions > api.js. (Uses Redux)
 4. Form successfully sends form data to backend API. 