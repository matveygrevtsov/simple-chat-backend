build_dev:
	docker compose -f docker-compose.dev.yml build

build_prod:
	docker compose -f docker-compose.prod.yml build

up_dev:
	docker compose -f docker-compose.dev.yml up

up_prod:
	docker compose -f docker-compose.prod.yml up

down_dev:
	docker compose -f docker-compose.dev.yml down

down_prod:
	docker compose -f docker-compose.prod.yml down

start_dev:
	make down_dev
	make build_dev
	make up_dev

start_prod:
	make down_prod
	make build_prod
	make up_prod
