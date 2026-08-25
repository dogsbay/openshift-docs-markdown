{%- set _mod_docs_content_type = "CONCEPT" %}
# About event routing {id="cluster-logging-eventrouter-about_{{ context }}"}

The Event Router is a pod that watches {{ product_title }} events so they can be collected by {{ logging }}.
The Event Router collects events from all projects and writes them to `STDOUT`. Fluentd collects those events and forwards them into the {{ product_title }} Elasticsearch instance. Elasticsearch indexes the events to the `infra` index.

You must manually deploy the Event Router.