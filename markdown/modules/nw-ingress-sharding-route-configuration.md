{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a route for Ingress Controller sharding {id="nw-ingress-sharding-route-configuration_{{ context }}"}

You can use a route to host your application at a URL. Ingress Controller sharding helps balance incoming traffic load among a set of Ingress Controllers. Ingress Controller sharding can also isolate traffic to a specific Ingress Controller. For example, company A goes to one Ingress Controller and company B to another. {._abstract}

The following procedure describes how to create a route for Ingress Controller sharding, using the `hello-openshift` application as an example.

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You are logged in as a project administrator.
*   You have a web application that exposes a port and an HTTP or TLS endpoint listening for traffic on the port.
*   You have configured the Ingress Controller for sharding.

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
1.  Create a route definition called `hello-openshift-route.yaml`:
    ```yaml title="YAML definition of the created route for sharding"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      labels:
        type: sharded
      name: hello-openshift-edge
      namespace: hello-openshift
    spec:
      subdomain: hello-openshift
      tls:
        termination: edge
      to:
        kind: Service
        name: hello-openshift
    ```

    where:

    `type`
    :   Specifies both the label key and its corresponding label value must match the ones specified in the Ingress Controller. In this example, the Ingress Controller has the label key and value `type: sharded`.

    `subdomain`
    :   Specifies the route gets exposed by using the value of the `subdomain` field. When you specify the `subdomain` field, you must leave the hostname unset. If you specify both the `host` and `subdomain` fields, then the route uses the value of the `host` field, and ignore the `subdomain` field.

1.  Use `hello-openshift-route.yaml` to create a route to the `hello-openshift` application by running the following command:
    ```terminal
    $ oc -n hello-openshift create -f hello-openshift-route.yaml
    ```

**Verification**

*   Get the status of the route with the following command:
    ```terminal
    $ oc -n hello-openshift get routes/hello-openshift-edge -o yaml
    ```

    The resulting `Route` resource should look similar to the following:
    ```yaml title="Example output"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      labels:
        type: sharded
      name: hello-openshift-edge
      namespace: hello-openshift
    spec:
      subdomain: hello-openshift
      tls:
        termination: edge
      to:
        kind: Service
        name: hello-openshift
    status:
      ingress:
      - host: hello-openshift.<apps-sharded.basedomain.example.net>
        routerCanonicalHostname: router-sharded.<apps-sharded.basedomain.example.net>
        routerName: sharded
    ```

    where:

    `host`
    :   Specifies the hostname the Ingress Controller, or router, uses to expose the route. The value of the `host` field is automatically determined by the Ingress Controller, and uses its domain. In this example, the domain of the Ingress Controller is `<apps-sharded.basedomain.example.net>`. 

    `<apps-sharded.basedomain.example.net>`
    :   Specifies the hostname of the Ingress Controller. If the hostname is not set, the route can use a subdomain instead. When you specify a subdomain, you automatically use the domain of the Ingress Controller that exposes the route. When a route is exposed by multiple Ingress Controllers, the route is hosted at multiple URLs.

    `routerName`
    :   Specifies the name of the Ingress Controller. In this example, the Ingress Controller has the name `sharded`.