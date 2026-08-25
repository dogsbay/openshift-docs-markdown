{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable HTTP Strict Transport Security per-route {id="nw-disabling-hsts_{{ context }}"}

To allow unencrypted connections or troubleshoot access issues, disable HTTP Strict Transport Security (HSTS) for a specific route. Setting the `max-age` route annotation to `0` instructs browsers to stop enforcing HTTPS requirements on the route host. {._abstract}

**Prerequisites**

{%- if not microshift %}
*   You are logged in to the cluster with a user with administrator privileges for the project.
{% endif %}
{% if microshift %}
*   You have root access to the cluster.
{%- endif %}
*   You installed the {{ oc_first }}.

**Procedure**

*   To disable HSTS, enter the following to set the `max-age` value in the route annotation to `0`:
    ```terminal
    $ oc annotate route <route_name> -n <namespace> --overwrite=true "haproxy.router.openshift.io/hsts_header"="max-age=0"
    ```

    :::tip

    You can alternatively apply the following YAML to create the config map for disabling HSTS per-route:

    ```yaml
    kind: Route
    apiVersion: route.openshift.io/v1
    metadata:
      annotations:
        haproxy.router.openshift.io/hsts_header: max-age=0
    ```
    
    :::

*   To disable HSTS for every route in a namespace, enter the following command:
    ```terminal
    $ oc annotate route --all -n <namespace> --overwrite=true "haproxy.router.openshift.io/hsts_header"="max-age=0"
    ```

**Verification**

*   To query the annotation for all routes, enter the following command:
    ```terminal
    $ oc get route  --all-namespaces -o go-template='{{range .items}}{{if .metadata.annotations}}{{$a := index .metadata.annotations "haproxy.router.openshift.io/hsts_header"}}{{$n := .metadata.name}}{{with $a}}Name: {{$n}} HSTS: {{$a}}{{"\n"}}{{else}}{{""}}{{end}}{{end}}{{end}}'
    ```
    ```terminal title="Example output"
    Name: routename HSTS: max-age=0
    ```