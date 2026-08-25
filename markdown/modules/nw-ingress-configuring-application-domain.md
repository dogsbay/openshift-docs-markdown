{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying an alternative cluster domain using the appsDomain option {id="nw-ingress-configuring-application-domain_{{ context }}"}

As a cluster administrator, you can specify an alternative to the default cluster domain for user-created routes by configuring the `appsDomain` field. The `appsDomain` field is an optional domain for {{ product_title }} to use instead of the default, which is specified in the `domain` field. If you specify an alternative domain, it overrides the default cluster domain for the purpose of determining the default host for a new route.

For example, you can use the DNS domain for your company as the default domain for routes and ingresses for applications running on your cluster.

**Prerequisites**

*   You deployed an {{ product_title }} cluster.
*   You installed the `oc` command-line interface.

**Procedure**

1.  Configure the `appsDomain` field by specifying an alternative default domain for user-created routes.
    1.  Edit the ingress `cluster` resource:
        ```terminal
        $ oc edit ingresses.config/cluster -o yaml
        ```
    1.  Edit the YAML file:
        ```yaml title="Sample appsDomain configuration to test.example.com"
        apiVersion: config.openshift.io/v1
        kind: Ingress
        metadata:
          name: cluster
        spec:
          domain: apps.example.com            (1)
          appsDomain: <test.example.com>      (2)
        ```
        1.  Specifies the default domain. You cannot modify the default domain after installation.
        1.  Optional: Domain for {{ product_title }} infrastructure to use for application routes. Instead of the default prefix, `apps`, you can use an alternative prefix like `test`.
1.  Verify that an existing route contains the domain name specified in the `appsDomain` field by exposing the route and verifying the route domain change:

    :::note

    Wait for the `openshift-apiserver` finish rolling updates before exposing the route.
    
    :::

    1.  Expose the route by entering the following command. The command outputs `route.route.openshift.io/hello-openshift exposed` to designate exposure of the route.
        ```terminal
        $ oc expose service hello-openshift
        ```
    1.  Get a list of routes by running the following command:
        ```terminal
        $ oc get routes
        ```
        ```text title="Example output"
        NAME              HOST/PORT                                   PATH   SERVICES          PORT       TERMINATION   WILDCARD
        hello-openshift   hello_openshift-<my_project>.test.example.com
        hello-openshift   8080-tcp                 None
        ```