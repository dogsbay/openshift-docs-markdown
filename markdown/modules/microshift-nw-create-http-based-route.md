{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an HTTP-based route {id="microshift-nw-creating-a-route_{{ context }}"}

To host your application at a public URL by using the basic HTTP routing protocol, create an HTTP-based route. This configuration exposes a service on an unsecured application port, allowing external access without TLS encryption. {._abstract}

A route can either be secure or unsecured, depending on the network security configuration of your application.

The following procedure describes how to create a simple HTTP-based route to a web application, using the `hello-microshift` application as an example.

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You have access to your {{ microshift_short }} node.
*   You have a web application that exposes a port and a TCP endpoint listening for traffic on the port.

**Procedure**

1.  Create a service called `hello-microshift` by running the following command:
    ```terminal
    $ oc expose pod hello-microshift -n $namespace
    ```
1.  Create an unsecured route to the `hello-microshift` application by running the following command:
    ```terminal
    $ oc expose svc/hello-microshift --hostname=microshift.com $namespace
    ```

**Verification**

*   Verify that the `route` resource was created by running the following command:
    ```terminal
    $ oc get routes -o yaml <name of resource> -n $namespace
    ```
*   `namespace`: Specifies the route that is named `hello-microshift` and the namespace is named `hello-microshift`.
    ```yaml title="Sample YAML definition for the created unsecured route"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      name: hello-microshift
      namespace: hello-microshift
    spec:
      host: microshift.com
      port:
        targetPort: 8080
      to:
        kind: Service
        name: hello-microshift
    ```

    where:

    `spec.host`
    :   Specifies the hostname.

    `port.targetPort`
    :   Specifies the target port for the router to map the endpoint port in the service.

    :::note

    {{ microshift_short }} does not use an API that creates a default ingress domain, but instead provides a wildcard for automatically generated domains. Each route can also define a separate hostname.
    
    :::