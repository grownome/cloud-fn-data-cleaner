# data-cleaner

# Why
We are producing a few kinds of data from our sensors, all of it needs storage, some of it needs exposure to the user.

This cloud fn should accomplish the following:

1. Pull out all of the parts of images, sort them by date published, group them by sensor, dump them in cloud storage buckets
2. Pull out all of the metrics push them in to google bigquery and firestore. Metrics should be broken into their name (everything before the value) and the value. An example metric looks like this
```
nomes/shy-snowflake-payload-core-temp-main/48.692
^                                        ^ ^     ^
-----------Metric Name-------------------- -Value-
```
Then pushed into google bigquery for bulk analysis. and google firestore for customer usage.
3. Should batch up all the events compress them and stuff them into google cloud storage.


## Usage
To acutally run the thing for development

TODO
To build
```
lein cljsbuild once
```

To deploy
```
gcloud beta functions deploy subscribe --source target/js/compiled --stage-bucket grownome_fn_staging --trigger-topic huginn-tele
gcloud beta functions deploy make_image --source target/js/compiled --stage-bucket grownome_fn_staging --trigger-topic daily
```

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

## Usage

FIXME

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
