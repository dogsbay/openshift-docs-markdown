{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Argo CD OIDC {id="configuring-argo-cd-oidc_{{ context }}"}

To configure Argo CD OpenID Connect (OIDC), you must generate your client secret, encode it, and add it to your custom resource.

**Prerequisites**

*   You have obtained your client secret.

**Procedure**

1.  Store the client secret you generated.
    1.  Encode the client secret in base64:
        ```terminal
        $ echo -n '83083958-8ec6-47b0-a411-a8c55381fbd2' | base64
        ```
    1.  Edit the secret and add the base64 value to an `oidc.keycloak.clientSecret` key:
        ```terminal
        $ oc edit secret argocd-secret -n <namespace>
        ```
        ```yaml title="Example YAML of the secret"
        apiVersion: v1
        kind: Secret
        metadata:
          name: argocd-secret
        data:
          oidc.keycloak.clientSecret: ODMwODM5NTgtOGVjNi00N2IwLWE0MTEtYThjNTUzODFmYmQy
        ```
1.  Edit the `argocd` custom resource and add the OIDC configuration to enable the Keycloak authentication:
    ```terminal
    $ oc edit argocd -n <your_namespace>
    ```
    ```yaml title="Example of argocd custom resource"
    apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      creationTimestamp: null
      name: argocd
      namespace: argocd
    spec:
      resourceExclusions: |
        - apiGroups:
          - tekton.dev
          clusters:
          - '*'
          kinds:
          - TaskRun
          - PipelineRun
      oidcConfig: |
        name: OpenShift Single Sign-On
        issuer: https://keycloak.example.com/auth/realms/myrealm (1)
        clientID: argocd (2)
        clientSecret: $oidc.keycloak.clientSecret (3)
        requestedScopes: ["openid", "profile", "email", "groups"] (4)
      server:
        route:
          enabled: true
    ```
    1.  `issuer` must end with the correct realm name (in this example `myrealm`).
    1.  `clientID` is the Client ID you configured in your Keycloak account.
    1.  `clientSecret` points to the right key you created in the argocd-secret secret.
    1.  `requestedScopes` contains the groups claim if you did not add it to the Default scope.