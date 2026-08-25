{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a custom namespace for boot source images by using the CLI {id="virt-boot-source-images-namespace-cli_{{ context }}"}

You can configure a custom namespace for boot source images in your cluster by setting the `spec.commonBootImageNamespace` field in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You created a namespace to use for boot source images.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Configure the custom namespace by updating the value of the `spec.commonBootImageNamespace` field.

    Example configuration file:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      commonBootImageNamespace: <custom_namespace>
    # ...
    ```

    where:

    `spec.commonBootImageNamespace`
    :   Specifies the namespace to use for boot source images.

1.  Save your changes and exit the editor.