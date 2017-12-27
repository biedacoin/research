FROM alpine:3.7 as build

RUN apk --no-cache add nodejs yarn git
RUN apk --no-cache add python gcc g++ make pkgconfig musl-dev

COPY react-app/package.json \
     react-app/yarn.lock \
     react-app/tsconfig.json \
     /opt/react-app/

RUN cd /opt/react-app/ && yarn install

COPY react-app/src/    /opt/react-app/src/
COPY react-app/public/ /opt/react-app/public/

RUN cd /opt/react-app/ && yarn run build

###

FROM nginx:alpine

RUN apk --no-cache add curl

COPY --from=build /opt/react-app/build/ /opt/react-app/build/

COPY deploy/docker/react-app-nginx.conf.envsubst /nginx.conf.envsubst

WORKDIR /opt/react-app/

COPY deploy/docker/docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

COPY deploy/docker/react-app-start.sh /
CMD /react-app-start.sh

# vim:ts=2:sw=2:et:syn=dockerfile:
