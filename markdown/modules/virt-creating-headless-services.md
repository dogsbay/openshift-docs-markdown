{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a headless service in a project by using the CLI {id="virt-creating-headless-services_{{ context }}"}

To create a headless service in a namespace, add the `clusterIP: None` parameter to the service YAML definition. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a `Service` manifest to expose the VM, such as the following example:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: mysubdomain
    spec:
      selector:
        expose: me
      clusterIP: None
      ports:
      - protocol: TCP
        port: 1234
        targetPort: 1234
    ```
    *   `metadata.name` defines the name of the service. This must match the `spec.subdomain` attribute in the `VirtualMachine` manifest file.
    *   `spec.selector` defines the service selector that must match the `expose:me` label in the `VirtualMachine` manifest file.
    *   `spec.clusterIP` defines a headless service.
    *   `spec.ports` defines the list of ports that are exposed by the service. You must define at least one port. This can be any arbitrary value as it does not affect the headless service.
1.  Save the `Service` manifest file.
1.  Create the service by running the following command:
    ```terminal
    $ oc create -f headless_service.yaml
    ```