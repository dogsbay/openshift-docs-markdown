{%- set _mod_docs_content_type = "CONCEPT" %}
# Logging {id="security-monitoring-cluster-logging_{{ context }}"}

Using the `oc log` command, you can view container logs, build configs and deployments in real time. Different users can have access different access to logs: {._abstract}

*   Users who have access to a project are able to see the logs for that project by default.
*   Users with admin roles can access all container logs.

To save your logs for further audit and analysis, you can enable the `cluster-logging` add-on feature to collect, manage, and view system, container, and audit logs. You can deploy, manage, and upgrade OpenShift Logging through the {{ es_op }} and {{ clo }}.