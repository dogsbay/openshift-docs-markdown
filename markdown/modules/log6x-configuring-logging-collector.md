{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the log collector {id="log6x-configuring-logging-collector_{{ context }}"}

You can configure which log collector type your {{ logging }} uses by modifying the `ClusterLogging` custom resource (CR).

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.
*   You have installed the {{ clo }}.
*   You have created a `ClusterLogging` CR.

**Procedure**

1.  Modify the `ClusterLogging` CR `collection` spec:
    ```yaml title="ClusterLogging CR example"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
    # ...
    spec:
    # ...
      collection:
        type: <log_collector_type> (1)
        resources: {}
        tolerations: {}
    # ...
    ```
    1.  The log collector type you want to use for the {{ logging }}.
1.  Apply the `ClusterLogging` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```