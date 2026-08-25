{%- set _mod_docs_content_type = "CONCEPT" %}
# Pruning cron jobs {id="pruning-cronjobs_{{ context }}"}

Clean up completed and failed Kubernetes jobs manually to prevent resource exhaustion. You can restrict cron job access to authorized users and configure resource quotas to control job and pod creation. {._abstract}

Cron jobs can perform pruning of successful jobs, but might not properly handle failed jobs. Therefore, the cluster administrator should perform regular cleanup of jobs manually. They should also restrict the access to cron jobs to a small group of trusted users and set appropriate quota to prevent the cron job from creating too many jobs and pods.