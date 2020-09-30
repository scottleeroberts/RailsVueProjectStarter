#!/bin/bash
DBNAME="quote4_development"

echo "Sleeping to give db time to start"
sleep 3
echo "Waking up"

rm -f /app/tmp/pids/server.pid

bundle check || bundle install -j2

echo "Checking for postgres"
until psql -h db -U "postgres" -c '\q' 2>/dev/null; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 3
done
echo "Postgres is available: continuing with database setup"

init_database=$(psql -lqt -h db -U "postgres" | cut -d \| -f 1 | grep -w $DBNAME)

if $init_database; then
  echo "Initializing development database"
  bundle exec rake db:setup
else
  echo "Development database already exists; skipping setup"
fi

bundle exec rails server -p 8080 -b 0.0.0.0
