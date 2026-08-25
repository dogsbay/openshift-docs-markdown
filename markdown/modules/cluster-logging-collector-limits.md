{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure log collector CPU and memory limits {id="cluster-logging-collector-limits_{{ context }}"}

The log collector allows for adjustments to both the CPU and memory limits.

**Procedure**

*   Edit the `ClusterLogging` custom resource (CR) in the `openshift-logging` project:
    ```terminal
    $ oc -n openshift-logging edit ClusterLogging instance
    ```
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      collection:
        type: fluentd
        resources:
          limits: (1)
            memory: 736Mi
          requests:
            cpu: 100m
            memory: 736Mi
    # ...
    ```
    1.  Specify the CPU and memory limits and requests as needed. The values shown are the default values.