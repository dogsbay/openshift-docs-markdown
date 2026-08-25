{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling HTTP/2 {id="nw-disable-http2_{{ context }}"}

You can disable HTTP/2 on a specific Ingress Controller, or you can disable HTTP/2 for the entire cluster.

**Procedure**

*   To disable HTTP/2 on a specific Ingress Controller, enter the `oc annotate` command:
    ```terminal
    $ oc -n openshift-ingress-operator annotate ingresscontrollers/<ingresscontroller_name> ingress.operator.openshift.io/default-enable-http2=false (1)
    ```
    1.  Replace `<ingresscontroller_name>` with the name of an Ingress Controller to disable HTTP/2.
*   To disable HTTP/2 for the entire cluster, enter the `oc annotate` command:
    ```terminal
    $ oc annotate ingresses.config/cluster ingress.operator.openshift.io/default-enable-http2=false
    ```


    :::tip

    Alternatively, you can apply the following YAML code to disable HTTP/2:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Ingress
    metadata:
      name: cluster
      annotations:
        ingress.operator.openshift.io/default-enable-http2: "false"
    ```
    
    :::