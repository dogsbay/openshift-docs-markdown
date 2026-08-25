{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Dex {id="enabling-dex_{{ context }}"}

Argo CD embeds and bundles Dex as part of its installation. Dex is an identity service that uses OpenID Connect to drive authentication for other apps.

**Procedure**

1.  Enable Dex by updating the `Subscription` resource for the OpenShift GitOps Operator.
    ```yaml
    spec:
      config:
        env:
        - name: DISABLE_DEX
          Value: "false"
    ```

    This update causes the `argocd-cluster-dex-server` instance to run.
1.  To enable login with {{ product_title }}, update the `argo-cd` custom resource by adding the following field: 
    ```yaml
    spec:
      dex:
        openShiftOAuth: true
    ```
1.  Enable role-based access control (RBAC) on `argo-cd` by modifying the following fields:
    ```yaml
    spec:
      dex:
        openShiftOAuth: true
      rbac:
        defaultPolicy: 'role:readonly'
        policy: |
          g, system:cluster-admins, role:admin
        scopes: '[groups]'
    ```