{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure log collector CPU and memory limits {id="log6x-cluster-logging-collector-limits_{{ context }}"}

Use the log collector to adjust the CPU and memory limits.

**Procedure**

*   Edit the `ClusterLogForwarder` custom resource (CR):
    ```terminal
    $ oc -n openshift-logging edit ClusterLogging instance
    ```
    ```yaml
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      collector:
        resources:
          limits: (1)
            memory: 736Mi
          requests:
            cpu: 100m
            memory: 736Mi
    # ...
    ```
    1.  Specify the CPU and memory limits and requests as needed. The values shown are the default values.