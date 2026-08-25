{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling redundancy for the log visualizer nodes {id="cluster-logging-kibana-scaling_{{ context }}"}

You can scale the pod that hosts the log visualizer for redundancy.

**Procedure**

1.  Edit the `ClusterLogging` custom resource (CR) in the `openshift-logging` project:
    ```terminal
    $ oc -n openshift-logging edit ClusterLogging instance
    ```
    ```yaml
    $ oc edit ClusterLogging instance

    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    metadata:
      name: "instance"
      namespace: openshift-logging
    ....

    spec:
      visualization:
        type: "kibana"
        kibana:
          replicas: 1 (1)
    ```
    1.  Specify the number of Kibana nodes.