{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a namespace for user-defined networks by using the CLI {id="virt-creating-udn-namespace-cli_{{ context }}"}

You can create a namespace to be used with primary user-defined networks (UDNs) by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object as a YAML file similar to the following example:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: my-namespace
      labels:
        k8s.ovn.org/primary-user-defined-network: ""
    # ...
    ```

    The `k8s.ovn.org/primary-user-defined-network` label is required for the namespace to be associated with a UDN. If the namespace is to be used with an existing cluster UDN, you must also add the appropriate labels that are defined in the `spec.namespaceSelector` field of the `ClusterUserDefinedNetwork` custom resource.
1.  Apply the `Namespace` manifest by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```