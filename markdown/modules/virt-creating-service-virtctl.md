{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a service with virtctl {id="virt-creating-service-virtctl_{{ context }}"}

You can create a service for a virtual machine (VM) by using the `virtctl` command-line tool. {._abstract}

**Prerequisites**

*   You installed the `virtctl` command-line tool.
*   You configured the cluster network to support the service.
*   The environment where you installed `virtctl` has the cluster permissions required to access the VM. For example, you ran `oc login` or you set the `KUBECONFIG` environment variable.

**Procedure**

*   Create a service by running the following command:
    ```terminal
    $ virtctl expose vm <vm_name> --name <service_name> --type <service_type> --port <port>
    ```

    where:

    `<vm_name>`
    :   Specifies the name of the VM you are exposing.

    `<service_name>`
    :   Specifies a user-defined name for the service you are creating.

    `<service_type>`
    :   Specifies one of `ClusterIP`, `NodePort`, or `LoadBalancer`.

    `<port>`
    :   Specifies the network port on the VM that the service will expose.
    Example:
    ```terminal
    $ virtctl expose vm example-vm --name example-service --type NodePort --port 22
    ```

**Verification**

*   Verify the service by running the following command:
    ```terminal
    $ oc get service
    ```