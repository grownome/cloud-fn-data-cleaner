#!/bin/bash
cp package.json release/
gcloud beta functions deploy make_image-dev --source release --stage-bucket grownome_fn_staging --trigger-topic daily --entry-point make_image --runtime nodejs8
