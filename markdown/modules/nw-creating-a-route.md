{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an HTTP-based route {id="nw-creating-a-route_{{ context }}"}

You can use the following procedure to create a simple HTTP-based route to a web application, using the `hello-openshift` application as an example. {._abstract}

You can create a route to host your application at a public URL. The route can either be secure or unsecured, depending on the network security configuration of your application. An HTTP-based route is an unsecured route that uses the basic HTTP routing protocol and exposes a service on an unsecured application port.

**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You are logged in as an administrator.
*   You have a web application that exposes a port and a TCP endpoint listening for traffic on the port.

**Procedure**

1.  Create a project called `hello-openshift` by running the following command:
    ```terminal
    $ oc new-project hello-openshift
    ```
1.  Create a pod in the project by running the following command:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift/origin/master/examples/hello-openshift/hello-pod.json
    ```
1.  Create a service called `hello-openshift` by running the following command:
    ```terminal
    $ oc expose pod/hello-openshift
    ```
1.  Create an unsecured route to the `hello-openshift` application by running the following command:
    ```terminal
    $ oc expose svc hello-openshift
    ```

**Verification**

*   To verify that the `route` resource that you created, run the following command:
    ```terminal
    $ oc get routes -o yaml hello-openshift
    ```
    ```yaml title="Example YAML definition of the created unsecured route"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      name: hello-openshift
    spec:
      host: www.example.com
      port:
        targetPort: 8080
      to:
        kind: Service
        name: hello-openshift
    ```

    where:

    `host`
    :   Specifies an alias DNS record that points to the service. This field can be any valid DNS name, such as `www.example.com`. The DNS name must follow DNS952 subdomain conventions. If not specified, a route name is automatically generated.

    `targetPort`
    :   Specifies the target port on pods that is selected by the service that this route points to.

    :::note

    To display your default ingress domain, run the following command:
    ```terminal
    $ oc get ingresses.config/cluster -o jsonpath={.spec.domain}
    ```
    
    :::