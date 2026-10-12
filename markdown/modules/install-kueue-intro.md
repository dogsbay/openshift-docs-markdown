{%- set _mod_docs_content_type = "CONCEPT" %}
# Install {{ kueue_name }} {id="install-kueue-intro_{{ context }}"}

You install {{ kueue_name }} by using the {{ kueue_op }} from OperatorHub, and then create a `Kueue` custom resource (CR) to activate it on the cluster. Before {{ kueue_name }} can admit any jobs, you must label the namespaces whose workloads you want it to manage.