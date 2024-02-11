# Demo Repo for [Adonis v6 Postgis](https://www.mattstrayer.com/posts/adonis-v6-postgis/) blog post


## Instructions

1. `npm i` to install deps
2. create a `.env` file that sets the `DB_` env variables to your postgres db credentials (that has the postgis extension installed)
3. run `node ace postgis:test`
4. if successful, you you see a log output like this:

```
[ info ] ST_geomFromText('Point(0 0)')
```
