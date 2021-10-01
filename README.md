# NUSFintechDevops
For Devops Assignment

# Build Docker Images in Visual Studio
docker build -t mainjs .

# Check on the exist image
docker images

# Run the images with a container
docker run -it -d -p 3001:3000 mainjs

# Check if the container is running
docker ps

# Stop the container from running
docker stop <container id>
