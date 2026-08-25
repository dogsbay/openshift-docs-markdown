{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the route admission policy {id="nw-route-admission-policy_{{ context }}"}

Administrators and application developers can run applications in multiple namespaces with the same domain name. This is for organizations where multiple teams develop microservices that are exposed on the same hostname.


:::warning

Allowing claims across namespaces should only be enabled for clusters with trust between namespaces, otherwise a malicious user could take over a hostname. For this reason, the default admission policy disallows hostname claims across namespaces.

:::


**Prerequisites**

*   Cluster administrator privileges.

**Procedure**

*   Edit the `.spec.routeAdmission` field of the `ingresscontroller` resource variable using the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontroller/default --patch '{"spec":{"routeAdmission":{"namespaceOwnership":"InterNamespaceAllowed"}}}' --type=merge
    ```
    ```yaml title="Sample Ingress Controller configuration"
    spec:
      routeAdmission:
        namespaceOwnership: InterNamespaceAllowed
    ...
    ```

    :::tip

    You can alternatively apply the following YAML to configure the route admission policy:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: default
      namespace: openshift-ingress-operator
    spec:
      routeAdmission:
        namespaceOwnership: InterNamespaceAllowed
    ```
    
    :::