{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the cert-manager upstream authority plugin {id="zero-trust-manager-config-cert-manager_{{ context }}"}

Configure SPIRE Server to obtain intermediate signing certificates from {{ cert_manager_operator }} by setting `spec.upstreamAuthority.certManager` on the `SpireServer` custom resource. {{ zero_trust_full }} generates SPIRE Server configuration and reconciles the SPIRE Server `StatefulSet. {._abstract}

**Prerequisites**

*   You have installed {{ zero_trust_full }} and deployed a `SpireServer` CR.
*   You have completed preparing {{ cert_manager_operator }} for SPIRE Server use, including creating an `Issuer` or `ClusterIssuer`.

**Procedure**

1.  Export the current `SpireServer` CR to a file by running the following command:
    ```terminal
    $ oc get spireserver cluster -o yaml > SpireServer-cert-manager.yaml
    ```
1.  In the `SpireServer-cert-manager.yaml`, add the `upstreamAuthority` section under `spec:`:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: SpireServer
    metadata:
      name: cluster
    spec:
      logLevel: "info"
      logFormat: "text"
      jwtIssuer: "https://oidc-discovery.apps.cluster.example.com"
      caValidity: "24h"
      defaultX509Validity: "1h"
      defaultJWTValidity: "5m"
      jwtKeyType: "rsa-2048"
      caSubject:
        country: "US"
        organization: "Example Corporation"
        commonName: "SPIRE Server CA"
      persistence:
        size: "5Gi"
        accessMode: "ReadWriteOnce"
        storageClass: "gp3-csi"
      datastore:
        databaseType: "sqlite3"
        connectionString: "/run/spire/data/datastore.sqlite3"
        tlsSecretName: ""
        maxOpenConns: 100
        maxIdleConns: 10
        connMaxLifetime: 0
        disableMigration: "false"
      upstreamAuthority:
        certManager:
          namespace: cert-manager
          issuerName: spire-ca
          issuerKind: Issuer
          issuerGroup: cert-manager.io
    ```

    where:

    `spec.upstreamAuthority.certManager.namespace`
    :   Specifies the namespace where SPIRE Server creates `CertificateRequest` resources. For a namespace-scoped `Issuer`, this must match the `Issuer` namespace. For a `ClusterIssuer`, any namespace is valid.

    `spec.upstreamAuthority.certManager.issuerName`
    :   Specifies the name of the `Issuer` or `ClusterIssuer`.

    `spec.upstreamAuthority.certManager.issuerKind`
    :   Specifies the `Issuer` or `ClusterIssuer`. The default is `Issuer`.

    `spec.upstreamAuthority.certManager.issuerGroup`
    :   Specifies the API group of the issuer. The default is `cert-manager.io`.

    :::note

    On {{ product_title }}, SPIRE Server uses its in-cluster `ServiceAccount`. {{ zero_trust_full }} grants `CertificateRequest` permissions when `spec.upstreamAuthority.certManager` is configured.
    
    :::


1.  Apply the updated CR by running the following command:
    ```terminal
    $ oc apply -f SpireServer-cert-manager.yaml
    ```
1.  Wait for {{ zero_trust_full }} to reconcile the SPIRE Server by running the following command:
    ```terminal
    $ oc rollout status statefulset/spire-server -n zero-trust-workload-identity-manager
    ```

**Verification**

1.  Verify that SPIRE Server is healthy and that logs show the `UpstreamAuthority` plugin loaded by running the following commands:
    ```terminal
    $ oc exec -n zero-trust-workload-identity-manager statefulset/spire-server -c spire-server -- \
        /opt/spire/bin/spire-server healthcheck
    ```
    ```terminal
    $ oc logs statefulset/spire-server -n zero-trust-workload-identity-manager -c spire-server --tail=50
    ```
1.  Confirm that a cert-manager-signed intermediate certificate is present by running the following command:
    ```terminal
    $ oc exec -n zero-trust-workload-identity-manager statefulset/spire-server -c spire-server -- \
        /opt/spire/bin/spire-server bundle show
    ```