{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing cert-manager for SPIRE Server {id="zero-trust-manager-preparing-plugin-use_{{ context }}"}

Install {{ cert_manager_operator }} and create an `Issuer` or `ClusterIssuer` that can sign SPIRE intermediate certificates. After you complete this procedure, configure `spec.upstreamAuthority.certManager` on the `SpireServer` CR. {._abstract}

**Prerequisites**

*   You are logged in to the cluster with the `cluster-admin` role.
*   You have installed {{ zero_trust_full }} or plan to install it after {{ cert_manager_operator }} is ready.

**Procedure**

1.  Create a self-signed bootstrap `ClusterIssuer`:
    1.  Save the following manifest as `selfsigned-bootstrap.yaml`:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: ClusterIssuer
        metadata:
          name: selfsigned-bootstrap
        spec:
          selfSigned: {}
        ```
    1.  Apply the `ClusterIssuer` by running the following command:
        ```terminal
        $ oc apply -f selfsigned-bootstrap.yaml
        ```
1.  Use the bootstrap `ClusterIssuer` to issue a root CA certificate into a Secret:
    1.  Save the following manifest as `spire-root-ca.yaml`:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: Certificate
        metadata:
          name: spire-root-ca
          namespace: cert-manager
        spec:
          isCA: true
          secretName: spire-root-ca-secret
          issuerRef:
            name: selfsigned-bootstrap
            kind: ClusterIssuer
          commonName: "SPIRE Root CA"
          duration: 87600h
        ```
    1.  Apply the `Certificate` by running the following command:
        ```terminal
        $ oc apply -f spire-root-ca.yaml
        ```
1.  Create a CA `Issuer` that references the root CA Secret:
    1.  Save the following manifest as `spire-ca-issuer.yaml`:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: Issuer
        metadata:
          name: spire-ca
          namespace: cert-manager
        spec:
          ca:
            secretName: spire-root-ca-secret
        ```
    1.  Apply the `Issuer` by running the following command:
        ```terminal
        $ oc apply -f spire-ca-issuer.yaml
        ```

**Verification**

*   Confirm that the bootstrap `ClusterIssuer`, root CA `Certificate`, and signing `Issuer` are ready by running the following commands:
    ```terminal
    $ oc get clusterissuer selfsigned-bootstrap
    ```
    ```terminal
    $ oc get certificate spire-root-ca -n cert-manager
    ```
    ```terminal
    $ oc get issuer spire-ca -n cert-manager
    ```