{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a local queue {id="configuring-localqueues_{{ context }}"}

A local queue is a namespaced object, represented by a `LocalQueue` object, that groups closely related workloads that belong to a single namespace.

As an administrator, you can configure a `LocalQueue` object to point to a cluster queue. This allocates resources from the cluster queue to workloads in the namespace specified in the `LocalQueue` object.

**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml.md" %}

*   You have created a `ClusterQueue` object.

**Procedure**

1.  Create a `LocalQueue` object as a YAML file:
    ```yaml title="Example of a basic LocalQueue object"
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      namespace: team-namespace
      name: user-queue
    spec:
      clusterQueue: cluster-queue
    ```
1.  Apply the `LocalQueue` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```