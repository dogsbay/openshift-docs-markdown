{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the node exporter service outside the cluster {id="virt-accessing-node-exporter-outside-cluster_{{ context }}"}

You can access the node-exporter service outside the cluster and view the exposed metrics. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` privileges or the `monitoring-edit` role.
*   You have enabled monitoring for the user-defined project by configuring the node-exporter service.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Expose the node-exporter service.
    ```terminal
    $ oc expose service -n <namespace> <node_exporter_service_name>
    ```
1.  Obtain the FQDN (Fully Qualified Domain Name) for the route.
    ```terminal
    $ oc get route -o=custom-columns=NAME:.metadata.name,DNS:.spec.host
    ```

    Example output:
    ```terminal
    NAME                    DNS
    node-exporter-service   node-exporter-service-dynamation.apps.cluster.example.org
    ```
1.  Use the `curl` command to display metrics for the node-exporter service.
    ```terminal
    $ curl -s http://node-exporter-service-dynamation.apps.cluster.example.org/metrics
    ```

    Example output:
    ```terminal
    go_gc_duration_seconds{quantile="0"} 1.5382e-05
    go_gc_duration_seconds{quantile="0.25"} 3.1163e-05
    go_gc_duration_seconds{quantile="0.5"} 3.8546e-05
    go_gc_duration_seconds{quantile="0.75"} 4.9139e-05
    go_gc_duration_seconds{quantile="1"} 0.000189423
    ```