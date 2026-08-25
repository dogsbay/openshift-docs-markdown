{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enforce HTTP Strict Transport Security per-domain {id="microshift-nw-enforcing-hsts-per-domain_{{ context }}"}

To enforce secure communication per-domain, configure routes with a compliant HSTS policy annotation. For upgraded nodes with non-compliant routes, ensure consistent enforcement by updating the source manifests to apply the new security policies. {._abstract}

You cannot use `oc expose route` or `oc create route` commands to add a route in a domain that enforces HSTS because the API for these commands does not accept annotations.


:::important

HSTS cannot be applied to insecure, or non-TLS, routes.

:::


**Prerequisites**

*   You have root access to the node.
*   You installed the {{ oc_first }}.

**Procedure**

*   Apply HSTS to all routes in the node by running the following command:
    ```terminal
    $ oc annotate route --all --all-namespaces --overwrite=true "haproxy.router.openshift.io/hsts_header"="max-age=31536000;preload;includeSubDomains"
    ```
*   Apply HSTS to all routes in a particular namespace by running the following command:
    ```terminal
    $ oc annotate route --all -n __<my_namespace>__ --overwrite=true "haproxy.router.openshift.io/hsts_header"="max-age=31536000;preload;includeSubDomains"
    ```
*   `<my_namespace>`: Specify the namespace that you want to use.

**Verification**

*   Review the HSTS annotations on all routes by running the following command:
    ```terminal
    $ oc get route  --all-namespaces -o go-template='{{range .items}}{{if .metadata.annotations}}{{$a := index .metadata.annotations "haproxy.router.openshift.io/hsts_header"}}{{$n := .metadata.name}}{{with $a}}Name: {{$n}} HSTS: {{$a}}{{"\n"}}{{else}}{{""}}{{end}}{{end}}{{end}}'
    ```
    ```terminal title="Example output"
    Name: <_routename_> HSTS: max-age=31536000;preload;includeSubDomains
    ```