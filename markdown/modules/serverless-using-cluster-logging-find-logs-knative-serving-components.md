{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using OpenShift Logging to find logs for Knative Serving components {id="using-cluster-logging-to-find-logs-for-knative-serving-components_{{ context }}"}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Get the Kibana route:
    ```terminal
    $ oc -n openshift-logging get route kibana
    ```
1.  Use the route’s URL to navigate to the Kibana dashboard and log in.
1.  Check that the index is set to **.all**. If the index is not set to **.all**, only the {{ product_title }} system logs will be listed.
1.  Filter the logs by using the `knative-serving` namespace. Enter `kubernetes.namespace_name:knative-serving` in the search box to filter results.


:::note

Knative Serving uses structured logging by default. You can enable the parsing of these logs by customizing the OpenShift Logging Fluentd settings. This makes the logs more searchable and enables filtering on the log level to quickly identify issues.

:::