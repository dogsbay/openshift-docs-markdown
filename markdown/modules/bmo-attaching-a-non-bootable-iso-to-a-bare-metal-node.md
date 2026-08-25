{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching a non-bootable ISO to a bare-metal node {id="bmo-attaching-a-non-bootable-iso-to-a-bare-metal-node_{{ context }}"}

You can attach a generic, non-bootable ISO virtual media image to a provisioned node by using the `DataImage` resource. After you apply the resource, the ISO image becomes accessible to the operating system after it has booted. This is useful for configuring a node after provisioning the operating system and before the node boots for the first time. {._abstract}

**Prerequisites**

*   The node must use Redfish or drivers derived from it to support this feature.
*   The node must be in the `Provisioned` or `ExternallyProvisioned` state.
*   The `name` must be the same as the name of the node defined in its `BareMetalHost` resource.
*   You have a valid `url` to the ISO image.

**Procedure**

1.  Create a `DataImage` resource:
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: DataImage
    metadata:
      name: <node_name>
    spec:
      url: "http://dataimage.example.com/non-bootable.iso"
    ```

    where:

    `<node_name>`
    :   Specifies the name of the node as defined in its `BareMetalHost` resource.

    `spec.url`
    :   Specifies the URL and path to the ISO image.
1.  Save the `DataImage` resource to a file by running the following command:
    ```terminal
    $ vim <node_name>-dataimage.yaml
    ```
1.  Apply the `DataImage` resource by running the following command:
    ```terminal
    $ oc apply -f <node_name>-dataimage.yaml -n <node_namespace>
    ```

    Replace `<node_namespace>` so that the namespace matches the namespace for the `BareMetalHost` resource. For example, `openshift-machine-api`.
1.  Reboot the node.

    :::note

    To reboot the node, attach the `reboot.metal3.io` annotation, or reset set the `online` status in the `BareMetalHost` resource. A forced reboot of the bare-metal node will change the state of the node to `NotReady` for awhile. For example, 5 minutes or more.
    
    :::

1.  View the `DataImage` resource by running the following command:
    ```terminal
    $ oc get dataimage <node_name> -n openshift-machine-api -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    items:
    - apiVersion: metal3.io/v1alpha1
      kind: DataImage
      metadata:
        annotations:
          kubectl.kubernetes.io/last-applied-configuration: |
            {"apiVersion":"metal3.io/v1alpha1","kind":"DataImage","metadata":{"annotations":{},"name":"bmh-node-1","namespace":"openshift-machine-api"},"spec":{"url":"http://dataimage.example.com/non-bootable.iso"}}
        creationTimestamp: "2024-06-10T12:00:00Z"
        finalizers:
        - dataimage.metal3.io
        generation: 1
        name: bmh-node-1
        namespace: openshift-machine-api
        ownerReferences:
        - apiVersion: metal3.io/v1alpha1
          blockOwnerDeletion: true
          controller: true
          kind: BareMetalHost
          name: bmh-node-1
          uid: 046cdf8e-0e97-485a-8866-e62d20e0f0b3
        resourceVersion: "21695581"
        uid: c5718f50-44b6-4a22-a6b7-71197e4b7b69
      spec:
        url: http://dataimage.example.com/non-bootable.iso
      status:
        attachedImage:
          url: http://dataimage.example.com/non-bootable.iso
        error:
          count: 0
          message: ""
        lastReconciled: "2024-06-10T12:05:00Z"
    ```