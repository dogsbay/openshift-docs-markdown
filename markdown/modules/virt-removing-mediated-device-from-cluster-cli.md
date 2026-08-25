{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing mediated devices from the cluster {id="virt-removing-mediated-device-from-cluster-cli_{{ context }}"}

As a cluster administrator you can remove mediated devices from the cluster so that you can reallocate GPU hardware. To remove a mediated device from the cluster, delete the information for that device from the `HyperConverged` CR. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Remove the device information from the `spec.permittedHostDevices` stanza of the `HyperConverged` CR. For example:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      permittedHostDevices:
        mediatedDevices:
        - mdevNameSelector: GRID T4-2Q
          resourceName: nvidia.com/GRID_T4-2Q
          externalResourceProvider: true
    ```
    *   To remove the `GRID T4-2Q` device, delete the `mdevNameSelector` field and its corresponding `resourceName` field.
1.  Save your changes and exit the editor.