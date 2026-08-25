{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the external certificate for the managed OIDC discovery provider route {id="zero-trust-manager-create-route-oidc_{{ context }}"}

Configure the managed OIDC discovery provider route to use an externally managed TLS certificate. By referencing a TLS secret, you can secure the OIDC endpoint with your own certificate credentials. {._abstract}

**Prerequisites**

*   You have installed {{ zero_trust_full }} 0.2.0 or later.
*   You have deployed the SPIRE Server, SPIRE Agent, SPIFFEE CSI Driver, and the SPIRE OIDC Discovery Provider operands in the cluster.
*   You have installed the {{ cert_manager_operator }}. For more information, [Installing the cert-manager Operator for Red&#160;Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#cert-manager-operator-install).
*   You have created a `ClusterIssuer` or `Issuer` configured with a publicly trusted CA service. For example, an Automated Certificate Management Environment (ACME) type `Issuer` with the "Let’s Encrypt ACME" service. For more information, see [Configuring an ACME issuer](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#cert-manager-operator-issuer-acme)

**Procedure**

1.  Create a `Role` to provide the router service account permissions to read the referenced secret by running the following command:
    ```terminal
    $ oc create role secret-reader \
      --verb=get,list,watch \
      --resource=secrets \
      --resource-name=$TLS_SECRET_NAME \
      -n zero-trust-workload-identity-manager
    ```
1.  Create a `RoleBinding` resource to bind the router service account with the newly created Role resource by running the following command:
    ```terminal
    $ oc create rolebinding secret-reader-binding \
      --role=secret-reader \
      --serviceaccount=openshift-ingress:router \
      -n zero-trust-workload-identity-manager
    ```
1.  Configure the `SpireOIDCDIscoveryProvider` Custom Resource (CR) object to reference the Secret generated in the earlier step by running the following command:
    ```terminal
    $ oc patch SpireOIDCDiscoveryProvider cluster --type=merge -p='
    spec:
      externalSecretRef: ${TLS_SECRET_NAME}
    '
    ```

**Verification**

1.  In the `SpireOIDCDiscoveryProvider` CR, check if the `ManageRouteReady` condition is set to `True` by running the following command:
    ```terminal
    $ oc wait --for=jsonpath='{.status.conditions[?(@.type=="ManagedRouteReady")].status}'=True SpireOIDCDiscoveryProvider/cluster --timeout=120s
    ```
1.  Verify that the OIDC endpoint can be accessed securely through HTTPS by running the following command:
    ```terminal
    $ curl https://$JWT_ISSUER_ENDPOINT/.well-known/openid-configuration

    {
      "issuer": "https://$JWT_ISSUER_ENDPOINT",
      "jwks_uri": "https://$JWT_ISSUER_ENDPOINT/keys",
      "authorization_endpoint": "",
      "response_types_supported": [
        "id_token"
      ],
      "subject_types_supported": [],
      "id_token_signing_alg_values_supported": [
        "RS256",
        "ES256",
        "ES384"
      ]
    }%
    ```