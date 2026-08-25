{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Local Storage Operator Metrics {id="local-storage-metrics-procedure_{{ context }}"}

To monitor Local Storage Operator (LSO) disk discovery, volume provisioning, and storage utilization, enable LSO metrics by configuring cluster monitoring on the Operator namespace. {._abstract}

**Procedure**

1.  Enable local metrics by doing one of the following:
    *   When installing the LSO from the software catalog in the web console, select the **Enable Operator recommended cluster monitoring on this Namespace** checkbox.
    *   Manually add the `openshift.io/cluster-monitoring=true` label to the Operator namespace by running the following command:
        ```terminal
        $ oc label ns/openshift-local-storage openshift.io/cluster-monitoring=true
        ```