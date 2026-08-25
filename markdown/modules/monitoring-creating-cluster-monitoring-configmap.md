{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a cluster monitoring config map {id="creating-cluster-monitoring-configmap_{{ context }}"}

You can configure the core {{ product_title }} monitoring components by creating and updating the `cluster-monitoring-config` config map in the `openshift-monitoring` project. The {{ cmo_first }} then configures the core components of the monitoring stack.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Check whether the `cluster-monitoring-config` `ConfigMap` object exists:
    ```terminal
    $ oc -n openshift-monitoring get configmap cluster-monitoring-config
    ```
1.  If the `ConfigMap` object does not exist:
    1.  Create the following YAML manifest. In this example the file is called `cluster-monitoring-config.yaml`:
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: cluster-monitoring-config
          namespace: openshift-monitoring
        data:
          config.yaml: |
        ```
    1.  Apply the configuration to create the `ConfigMap` object:
        ```terminal
        $ oc apply -f cluster-monitoring-config.yaml
        ```