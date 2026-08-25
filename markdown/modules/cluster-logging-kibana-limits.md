{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the CPU and memory limits for the log visualizer {id="cluster-logging-kibana-limits_{{ context }}"}

You can adjust both the CPU and memory limits for the pod that hosts the log visualizer. 

**Procedure**

1.  Edit the `ClusterLogging` custom resource (CR) in the `openshift-logging` project: 
    ```terminal
    $ oc edit ClusterLogging instance
    ```
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    metadata:
      name: "instance"

    ....

    spec:
        visualization:
          type: "kibana"
          kibana:
            replicas:
          resources:  (1)
            limits:
              memory: 1Gi
            requests:
              cpu: 500m
              memory: 1Gi
          proxy:  (2)
            resources:
              limits:
                memory: 100Mi
              requests:
                cpu: 100m
                memory: 100Mi
    ```
    1.  Specify the CPU and memory limits to allocate for each node.
    1.  Specify the CPU and memory limits to allocate to the Kibana proxy.