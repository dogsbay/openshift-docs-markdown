{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a cluster eviction strategy by using the CLI {id="virt-configuring-cluster-eviction-strategy-cli_{{ context }}"}

You can configure an eviction strategy for a cluster by using the command line. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `hyperconverged` resource by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Set the cluster eviction strategy as shown in the following example:

    Example cluster eviction strategy:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      evictionStrategy: LiveMigrate
    # ...
    ```