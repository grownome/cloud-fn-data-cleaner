#!/bin/bash
cp package.json release/
gcloud beta functions deploy make_image --source release --stage-bucket grownome_fn_staging --trigger-topic daily
