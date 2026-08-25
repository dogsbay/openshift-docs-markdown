{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding events {id="nodes-containers-events-about_{{ context }}"}

Review the following information to learn how {{ product_title }} uses _events_ to record information about real-world events in a resource-agnostic manner. Events also allow developers and administrators to consume information about system components in a unified way. {._abstract}

{% if openshift_online %}
## Failure Notifications {id="event-failure-notifications_{{ context }}"}

For each of your projects, you can choose to receive email notifications about various failures, including dead or failed deployments, dead builds, and dead or failed persistent volume claims (PVCs).

See Notifications.
{% endif %}