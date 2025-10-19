docker build -t test .
docker run --env-file .env -p 3000:3000 test