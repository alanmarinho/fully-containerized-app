#!/bin/bash

until nc -z db 5432; do
  echo "Aguardando o banco... aguarde."
  sleep 2
done

if node ace migration:status | grep -q "pending"; then
  echo "Migrações pendentes, executando migrações..."
  node ace migration:run --force
else
  echo "Migrações já executadas. Pulando..."
fi

# Inicia o servidor
exec node ./build/bin/server.js
