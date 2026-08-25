{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling TLS for a container registry {id="virt-disabling-tls-for-registry_{{ context }}"}

You can disable TLS (transport layer security) for one or more container registries by editing the `insecureRegistries` field of the `HyperConverged` custom resource. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add a list of insecure registries to the `spec.storageImport.insecureRegistries` field.

    Example `HyperConverged` custom resource:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      storageImport:
        insecureRegistries:
          - "private-registry-example-1:5000"
          - "private-registry-example-2:5000"
    ```

    Replace the examples in the `insecureRegistries` list with valid registry hostnames.