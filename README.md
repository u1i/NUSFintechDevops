# NUSFintechDevops
For Devops Assignment

CI/

https://nusfintechdevopsfx-3w6afueuvq-as.a.run.app/FX.html


## DOCKER
https://docs.docker.com/engine/reference/commandline/docker/

### Build Docker Image (where the . represent to include every files in the directory)
```docker build -t (imagename) . ```

example - ```docker build -t mainjs . ```

### Check on the existing image
```docker images ```

### Run the images with a container
```docker run -it -d -p (any port number):(port defined in your node.js file) (imagename) ```

example - ```docker run -it -d -p 3001:3000 mainjs ```

### Check if the container is running
```docker ps ```

### Stop the container from running
```docker stop <container id> ```

example - ```docker stop c42758de58f0 ```
