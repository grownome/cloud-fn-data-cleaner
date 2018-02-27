#!/bin/bash
cp package.json release/
gcloud beta functions deploy subscribe --source release --stage-bucket grownome_fn_staging --trigger-topic huginn-tele
