{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring JSON Web Token authentication with SPIRE {id="zero-trust-manager-vault-authenticate-jwt_{{ context }}"}

To help your applications securely log in to Vault using SPIFFE identities, configure JSON Web Token (JWT) authentication. {._abstract}

**Prerequisites**

*   Make sure that Vault is initialized and unsealed.
*   Ensure that a test secret is stored in the key-value secrets engine.

**Procedure**

1.  On your local machine, retrieve the SPIRE Certificate Authority (CA) bundle and save it to a file by running the following command:
    ```terminal
    $ oc get cm -n zero-trust-workload-identity-manager spire-bundle -o jsonpath='{ .data.bundle\.crt }' > oidc_provider_ca.pem
    ```
1.  Back in the Vault pod shell, create a temporary file and paste the contents of `oidc_provider_ca.pem` into it by running the following command:
    ```terminal
    $ cat << EOF > /tmp/oidc_provider_ca.pem
    -----BEGIN CERTIFICATE-----
    <Paste-Your-Certificate-Content-Here>
    -----END CERTIFICATE-----
    EOF>
    ```
1.  Set up the necessary environment variables for the JWT configuration by running the following commands:
    ```terminal
    $ export APP_DOMAIN=<Your-App-Domain>
    ```
    ```terminal
    $ export JWT_ISSUER_ENDPOINT="oidc-discovery.$APP_DOMAIN"
    ```
    ```terminal
    $ export OIDC_URL="https://$JWT_ISSUER_ENDPOINT"
    ```
    ```terminal
    $ export OIDC_CA_PEM="$(cat /tmp/oidc_provider_ca.pem)"
    ```
1.  Crate a new environment variable by running the following command:
    ```terminal
    $ export ROLE="${NAME}-role"
    ```
1.  Enable the JWT authentication method by running the following command:
    ```terminal
    $ vault auth enable jwt
    ```
1.  Configure you ODIC authentication method by running the following command:
    ```terminal
    $ vault write auth/jwt/config \
      oidc_discovery_url=$OIDC_URL \
      oidc_discovery_ca_pem="$OIDC_CA_PEM" \
      default_role=$ROLE
    ```
1.  Create a policy named `ztwim-policy` by running the following command:
    ```terminal
    $ export POLICY="${NAME}-policy"
    ```
1.  Grant read access to the secret you created earlier by running the following command:
    ```terminal
    $ vault policy write $POLICY -<<EOF
    path "secret/$NAME" {
        capabilities = ["read"]
    }
    EOF
    ```
1.  Create the following environment variables by running the following commands:
    ```terminal
    $ export APP_NAME=client
    ```
    ```terminal
    $ export APP_NAMESPACE=demo
    ```
    ```terminal
    $ export AUDIENCE=$APP_NAME
    ```
1.  Create a JWT role that binds the policy to workload with a specific SPIFFE ID by running the following command:
    ```terminal
    $ vault write auth/jwt/role/$ROLE -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "sub",
      "bound_audiences": "$AUDIENCE",
      "bound_claims_type": "glob",
      "bound_claims": {
        "sub": "spiffe://$APP_DOMAIN/ns/$APP_NAMESPACE/sa/$APP_NAME"
      },
      "token_ttl": "24h",
      "token_policies": "$POLICY"
    }
    EOF
    ```