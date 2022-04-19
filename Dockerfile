FROM centos:7
WORKDIR /app
ADD https://rpm.nodesource.com/setup_10.x
RUN yum install nodejs
RUN npm install
RUN npm build
COPY build /app
EXPOSE 8080
