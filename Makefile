#include ../.env
#export $(shell sed 's/=.*//' ../.env)
.PHONY: webpack-dev-server dist node_modules
.DEFAULT_GOAL: webpack-dev-server
all: webpack-dev-server

dc = docker-compose
port ?= 9999
image ?= registry.gitlab.com/group/user
wimage = $(image)/webpack
gr = gitlab-runner exec shell --env CI_COMMIT_TAG=0.0.1 --env CI_REGISTRY_IMAGE=$(image)
dr ?= docker run --rm
entry ?= ./src

dist/main.js:
	webpack --mode production  --optimize-minimize --config webpack/prod.js

webpack-dev-server:
	$(dr) -e WEBPACK_PORT=$(port) -p $(port):$(port) -v `pwd`:/src \
	$(wimage) webpack-dev-server --mode development --entry $(entry) --config webpack/config.js

dist:
	$(dr) -v `pwd`:/src:rw -e RECAPTCHA_PUBLIC=6LegM1gUAAAAAJ08hqdcoazfqTFj3xslWS1_yP9K \
	$(wimage) webpack --optimize-minimize --display errors-only --config webpack/prod.js

rollup:
	$(dr) -v `pwd`:/src -e NODE_ENV=development \
	$(wimage) rollup -c

ts:
	$(dr) -v `pwd`:/src -e NODE_ENV=development \
	$(wimage) tsc -p .

vendor:
	$(dr) -v `pwd`:/src \
	$(wimage) webpack --config webpack/vendor.js --mode production

node_modules:
	cd webpack && docker build . -t $(wimage)

app:
	git commit -am 'testing local ci' || true
	$(gr) .local

