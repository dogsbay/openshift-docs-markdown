{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preventing pod removal using critical pods {id="nodes-pods-configuring-critical_{{ context }}"}

You can mark pods on a worker node as _critical_ to prevent {{ product_title }} from evicting those pods. Pods marked as critical are not allowed to be evicted. {._abstract}

There are several core components that are critical to a fully functional cluster,
but, run on a regular cluster node rather than the master. A cluster might stop working properly if a critical add-on is evicted.

The following procedure shows how to mark a pod as critical.

**Procedure**

1.  Create a `Pod` spec or edit existing pods to include the `system-cluster-critical` priority class:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pdb
    spec:
      template:
        metadata:
          name: critical-pod
        priorityClassName: system-cluster-critical
    # ...
    ```

    The `spec.template.priorityClassName.system-cluster-critical` parameter specifies the default priority class for pods that should never be evicted from a node.

    Alternatively, you can specify `system-node-critical` for pods that are important to the cluster
    but can be removed if necessary.
1.  Create the pod:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```