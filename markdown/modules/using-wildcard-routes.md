{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using wildcard routes {id="using-wildcard-routes_{{ context }}"}

The HAProxy Ingress Controller has support for wildcard routes. The Ingress Operator uses `wildcardPolicy` to configure the `ROUTER_ALLOW_WILDCARD_ROUTES` environment variable of the Ingress Controller.

The default behavior of the Ingress Controller is to admit routes with a wildcard policy of `None`, which is backwards compatible with existing `IngressController` resources.

**Procedure**

1.  Configure the wildcard policy.
    1.  Use the following command to edit the `IngressController` resource:
        ```terminal
        $ oc edit IngressController
        ```
    1.  Under `spec`, set the `wildcardPolicy` field to `WildcardsDisallowed` or `WildcardsAllowed`:
        ```yaml
        spec:
          routeAdmission:
            wildcardPolicy: WildcardsDisallowed # or WildcardsAllowed
        ```