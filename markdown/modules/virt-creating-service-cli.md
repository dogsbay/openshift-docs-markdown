{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a service by using the CLI {id="virt-creating-service-cli_{{ context }}"}

You can create a service and associate it with a virtual machine (VM) by using the command line. {._abstract}

**Prerequisites**

*   You configured the cluster network to support the service.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `VirtualMachine` manifest to add the label for service creation. Add `special: key` to the `spec.template.metadata.labels` stanza:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: example-namespace
    spec:
      runStrategy: Halted
      template:
        metadata:
          labels:
            special: key
    # ...
    ```

    :::note

    Labels on a virtual machine pass through to the pod. The `special: key` label must match the label in the `spec.selector` attribute of the `Service` manifest.
    
    :::

1.  Save the `VirtualMachine` manifest file to apply your changes.
1.  Create a `Service` manifest to expose the VM:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: example-service
      namespace: example-namespace
    spec:
    # ...
      selector:
        special: key
      type: NodePort
      ports:
        protocol: TCP
        port: 80
        targetPort: 9376
        nodePort: 30000
    ```
    *   `spec.selector` defines the label that you added to the `spec.template.metadata.labels` stanza of the `VirtualMachine` manifest.
    *   `spec.type` defines the type of service by the way it is exposed. Choose one of `ClusterIP`, `NodePort`, or `LoadBalancer`.
    *   `spec.ports` defines a collection of network ports and protocols to expose from the virtual machine.
1.  Save the `Service` manifest file.
1.  Create the service by running the following command:
    ```terminal
    $ oc create -f example-service.yaml
    ```
1.  Restart the VM to apply the changes.

**Verification**

*   Query the `Service` object to verify that it is available:
    ```terminal
    $ oc get service -n example-namespace
    ```