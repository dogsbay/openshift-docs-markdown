{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ log_plug }} when you have the Elasticsearch log store and LokiStack installed {id="logging-plugin-es-loki_{{ context }}"}

In {{ logging }} version 5.8 and later, if the Elasticsearch log store is your default log store but you have also installed the LokiStack, you can enable the {{ log_plug }} by using the following procedure.

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ clo }}, the {{ es_op }}, and the {{ loki_op }}.
*   You have installed the {{ oc_first }}.
*   You have created a `ClusterLogging` custom resource (CR).

**Procedure**

1.  Ensure that the {{ log_plug }} is enabled by running the following command:
    ```terminal
    $ oc get consoles.operator.openshift.io cluster -o yaml |grep logging-view-plugin  \
    || oc patch consoles.operator.openshift.io cluster  --type=merge \
    --patch '{ "spec": { "plugins": ["logging-view-plugin"]}}'
    ```
1.  Add the `.metadata.annotations.logging.openshift.io/ocp-console-migration-target: lokistack-dev` annotation to the `ClusterLogging` CR, by running the following command:
    ```terminal
    $ oc patch clusterlogging instance --type=merge --patch \
    '{ "metadata": { "annotations": { "logging.openshift.io/ocp-console-migration-target": "lokistack-dev" }}}' \
    -n openshift-logging
    ```
    ```terminal title="Example output"
    clusterlogging.logging.openshift.io/instance patched
    ```

**Verification**

*   Verify that the annotation was added successfully, by running the following command and observing the output:
    ```terminal
    $ oc get clusterlogging instance \
    -o=jsonpath='{.metadata.annotations.logging\.openshift\.io/ocp-console-migration-target}' \
    -n openshift-logging
    ```
    ```terminal title="Example output"
    "lokistack-dev"
    ```

The {{ log_plug }} pod is now deployed. You can view logging data by navigating to the {{ product_title }} web console and viewing the **Observe** → **Logs** page.