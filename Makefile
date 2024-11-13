setup: install
	npx simple-git-hooks

install:
	npm ci

dev:
	npm run dev

start-server:
	node bin/server.js

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-step:
	node --test --test-name-pattern step$(STEP)