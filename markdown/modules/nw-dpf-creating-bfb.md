{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the BFB custom resource {id="nw-dpf-creating-bfb_{{ context }}"}

You can create a `BFB` custom resource to define the DPU image, known as a BlueField Bootstream File, that is downloaded and placed on shared storage for DPU provisioning. {._abstract}

**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `bfb.yaml` with the following content:
    ```yaml
    apiVersion: provisioning.dpu.nvidia.com/v1alpha1
    kind: BFB
    metadata:
      name: bf-bundle
      namespace: dpf-operator-system
    spec:
      url: $BFB_URL
      versions:
        atf: 4.15.0-4-g419fbf393
        bsp: 4.15.0.13998
        doca: 3.4.1
        uefi: 4.15.0-19-g37c6f5adb2
    ```
1.  Apply the resource file:
    ```terminal
    $ envsubst < bfb.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the BFB image phase is `Ready`:
    ```terminal
    $ oc get bfbs.provisioning.dpu.nvidia.com -n dpf-operator-system bf-bundle -o yaml | grep phase
    ```
    ```terminal title="Example output"
    phase: Ready
    ```