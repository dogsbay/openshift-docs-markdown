{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring KSM activation by using the CLI {id="virt-configure-ksm-cli_{{ context }}"}

You can enable or disable {{ VirtProductName }}'s kernel samepage merging (KSM) activation feature by editing the `HyperConverged` custom resource (CR). Use this method if you want {{ VirtProductName }} to activate KSM on only a subset of nodes. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `ksmConfiguration` stanza:
    *   To enable the KSM activation feature for all nodes, set the `nodeLabelSelector` value to `{}`. For example:
        ```yaml {minja}
        apiVersion: hco.kubevirt.io/v1beta1
        kind: HyperConverged
        metadata:
          name: kubevirt-hyperconverged
          namespace: {{ CNVNamespace }}
        spec:
          ksmConfiguration:
            nodeLabelSelector: {}
        # ...
        ```
    *   To enable the KSM activation feature on a subset of nodes, edit the `nodeLabelSelector` field. Add syntax that matches the nodes where you want {{ VirtProductName }} to enable KSM. For example, the following configuration allows {{ VirtProductName }} to enable KSM on nodes where both `<first_example_key>` and `<second_example_key>` are set to `"true"`:
        ```yaml {minja}
        apiVersion: hco.kubevirt.io/v1beta1
        kind: HyperConverged
        metadata:
          name: kubevirt-hyperconverged
          namespace: {{ CNVNamespace }}
        spec:
          ksmConfiguration:
            nodeLabelSelector:
              matchLabels:
                <first_example_key>: "true"
                <second_example_key>: "true"
        # ...
        ```
    *   To disable the KSM activation feature, delete the `ksmConfiguration` stanza. For example:
        ```yaml {minja}
        apiVersion: hco.kubevirt.io/v1beta1
        kind: HyperConverged
        metadata:
          name: kubevirt-hyperconverged
          namespace: {{ CNVNamespace }}
        spec:
        # ...
        ```
1.  Save the file.