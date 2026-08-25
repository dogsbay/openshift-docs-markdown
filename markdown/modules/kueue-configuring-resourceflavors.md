{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a resource flavor {id="configuring-resourceflavors_{{ context }}"}

After you have configured a `ClusterQueue` object, you can configure a `ResourceFlavor` object.

Resources in a cluster are typically not homogeneous. If the resources in your cluster are homogeneous, you can use an empty `ResourceFlavor` instead of adding labels to custom resource flavors.

You can use a custom `ResourceFlavor` object to represent different resource variations that are associated with cluster nodes through labels, taints, and tolerations. You can then associate workloads with specific node types to enable fine-grained resource management.

**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml.md" %}

**Procedure**

1.  Create a `ResourceFlavor` object as a YAML file:
    ```yaml title="Example of an empty ResourceFlavor object"
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ResourceFlavor
    metadata:
      name: default-flavor
    ```
    ```yaml title="Example of a custom ResourceFlavor object"
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ResourceFlavor
    metadata:
      name: "x86"
    spec:
      nodeLabels:
        cpu-arch: x86
    ```
1.  Apply the `ResourceFlavor` object by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```