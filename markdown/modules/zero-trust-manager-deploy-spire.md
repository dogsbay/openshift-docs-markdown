{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying SPIRE operands for {{ SMProductName }} integration {id="zero-trust-manager-deploy-spire_{{ context }}"}

Deploy SPIRE operands by creating the `ZeroTrustWorkloadIdentityManager` custom resource (CR) and related SPIRE operand CRs together. A running SPIRE deployment is required before you configure {{ SMProductName }} to use SPIRE-issued certificates for workload mTLS. {._abstract}

**Prerequisites**

*   You have installed {{ zero_trust_full }}.
*   The {{ oc_first }} is configured with access to the cluster.
*   You have permissions to create custom resources in the `zero-trust-workload-identity-manager` namespace.

**Procedure**

1.  Set the environment variables by running the following commands:
    ```terminal
    $ export TRUST_DOMAIN=ocp.one
    $ export ZTWIM_NS=zero-trust-workload-identity-manager
    $ export JWT_ISSUER="https://oidc-discovery.$(oc get ingresses.config/cluster -o jsonpath={.spec.domain})"
    ```
1.  Deploy all SPIRE operand CRs, including the `ZeroTrustWorkloadIdentityManager` CR:
    1.  Create the `ZeroTrustWorkloadIdentityManager` CR:
        ```yaml
        $ oc apply -f - <<EOF
        apiVersion: operator.openshift.io/v1alpha1
        kind: ZeroTrustWorkloadIdentityManager
        metadata:
         name: cluster
         labels:
           app.kubernetes.io/name: zero-trust-workload-identity-manager
           app.kubernetes.io/managed-by: zero-trust-workload-identity-manager
        spec:
          trustDomain: ${TRUST_DOMAIN}
          clusterName: ""
          bundleConfigMap: "spire-bundle"
        EOF
        ```
    1.  Create the `SpireServer` CR:
        ```yaml
        $ cat <<EOF | oc apply -f -
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireServer
        metadata:
         name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          jwtIssuer: $JWT_ISSUER
          caValidity: "24h"
          defaultX509Validity: "1h"
          defaultJWTValidity: "5m"
          caKeytype: “rsa-2048”
          jwtKeyType: "rsa-2048"
          keyManager: “”
          caSubject:
            country: "US"
            organization: "RH"
            commonName: "SPIRE Server CA"
          persistence:
            size: "5Gi"
            accessMode: "ReadWriteOnce"
          datastore:
            databaseType: "sqlite3"
            connectionString: "/run/spire/data/datastore.sqlite3"
            tlsSecretName: ""
            maxOpenConns: 100
            maxIdleConns: 10
            connMaxLifetime: 0
            disableMigration: "false"
        EOF
        ```
    1.  Wait for the SPIRE Server to become ready by running the following commands:
        ```terminal
        $ until oc get statefulset/spire-server -n "${ZTWIM_NS}" &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ kubectl rollout status statefulset/spire-server -n "${ZTWIM_NS}" --timeout=300s
        ```
    1.  Create the `SpireAgent` CR:
        ```yaml
        $ cat <<EOF | oc apply -f -
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireAgent
        metadata:
          name: cluster
        spec:
          socketPath: "/run/spire/agent-sockets"
          logLevel: "info"
          logFormat: "text"
          nodeAttestor:
            k8sPSATEnabled: "true"
          workloadAttestors:
            k8sEnabled: "true"
            workloadAttestorsVerification:
              type: "auto"
              hostCertBasePath: "/etc/kubernetes"
              hostCertFileName: "kubelet-ca.crt"
            disableContainerSelectors: "false"
            useNewContainerLocator: "true"
        EOF
        ```
    1.  Wait for the SPIRE Agent to become ready by running the following commands:
        ```terminal
        $ until oc get daemonset/spire-agent -n "${ZTWIM_NS}" &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ kubectl rollout status daemonset/spire-agent -n "${ZTWIM_NS}" --timeout=300s
        ```
    1.  Deploy the `SpiffeCSIDriver` CR:
        ```yaml
        $ cat <<EOF | oc apply -f -
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpiffeCSIDriver
        metadata:
          name: cluster
        spec:
          agentSocketPath: '/run/spire/agent-sockets'
          pluginName: "csi.spiffe.io"
        EOF
        ```
    1.  Wait for the SPIFFE CSI Driver to become ready by running the following commands:
        ```terminal
        $ until oc get daemonset/spire-spiffe-csi-driver -n "${ZTWIM_NS}" &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ kubectl rollout status daemonset/spire-spiffe-csi-driver -n "${ZTWIM_NS}" --timeout=300s
        ```
    1.  Deploy the `SpireOIDCDiscoveryProvider` CR:
        ```terminal
        $ export OIDC_DISCOVERY_CONFIG_MAP=spire-spiffe-oidc-discovery-provider
        ```
        ```yaml
        $ cat <<EOF | oc apply -f -
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireOIDCDiscoveryProvider
        metadata:
          name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          csiDriverName: "csi.spiffe.io"
          jwtIssuer: $JWT_ISSUER
          replicaCount: 1
          managedRoute: "true"
        EOF
        ```
    1.  Wait for the OIDC Discovery Provider to be created by running the following commands:
        ```terminal
        $ until oc get deployment spire-spiffe-oidc-discovery-provider -n "${ZTWIM_NS}" &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ oc wait --for=condition=Available deployment/spire-spiffe-oidc-discovery-provider -n "${ZTWIM_NS}" --timeout=300s
        ```

**Verification**

1.  Verify that {{ zero_trust_full }} is installed:
    1.  Deploy the client workload and try to fetch a workload SVID:
        ```yaml
        $ cat <<EOF | oc apply -f -
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: ztwim-client
          namespace: default
          labels:
            app: ztwim-client
        spec:
          selector:
            matchLabels:
              app: ztwim-client
          template:
            metadata:
              labels:
                app: ztwim-client
            spec:
              containers:
                - name: client
                  image: ghcr.io/spiffe/spire-agent:1.5.1
                  command: ["/opt/spire/bin/spire-agent"]
                  args: [ "api", "watch",  "-socketPath", "/run/spire/sockets/spire-agent.sock" ]
                  volumeMounts:
                    - mountPath: /run/spire/sockets
                      name: spiffe-workload-api
                      readOnly: true
              volumes:
              - name: spiffe-workload-api
                csi:
                  driver: csi.spiffe.io
                  readOnly: true
        EOF
        ```
    1.  Wait for the client deployment to become ready by running the following command:
        ```terminal
        $ until oc get deployment ztwim-client -n default &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ oc wait --for=condition=Available deployment/ztwim-client -n default --timeout=300s
        ```
        ```terminal
        $ sleep 5
        ```
1.  Verify that the x509 SVID is available by running the following command:
    ```terminal
    $ oc exec -it \
      "$(oc get \
          pods -o=jsonpath='{.items[0].metadata.name}' \
          -l app=ztwim-client \
          -n default \
       )" -n default -- \
      /opt/spire/bin/spire-agent \
        api fetch -socketPath /run/spire/sockets/spire-agent.sock
    ```

    The expected output is an SVID like the following example:
    ```text
    Received 1 svid after 29.636075ms

    SPIFFE ID:		spiffe://ocp.one/ns/default/sa/default
    SVID Valid After:	 2025-10-21 14:04:03 +0000 UTC
    SVID Valid Until:	 2025-10-21 15:04:13 +0000 UTC
    CA #1 Valid After:	2025-10-21 07:38:03 +0000 UTC
    CA #1 Valid Until:	2025-10-22 07:38:13 +0000 UTC
    ```
1.  Verify that the JSON Web Token (JWT) SVID is available by running the following command:
    ```terminal
    $ oc exec -it \
      "$(oc get \
          pods -o=jsonpath='{.items[0].metadata.name}' \
          -l app=ztwim-client \
          -n default \
       )" -n default -- \
      /opt/spire/bin/spire-agent \
        api fetch jwt -audience=sample-aud -socketPath /run/spire/sockets/spire-agent.sock
    ```

    The expected output is a JWT SVID like the following example:
    ```text
    token(spiffe://ocp.one/ns/default/sa/default):
    	eyJhbGciOiJSUzI1NiIsImtpZCI6Ij....IsIm
    bundle(spiffe://ocp.one):
    	{
        "keys": [
            {
                "kty": "RSA",
                "kid": "6k9PfhrAdfajT6jvLvR6bdomFvQxMeGf",
                "n": "wEYTV0ri4OOcdgEVgzN0...KhUEGf0NKxnuaeGQ",
                "e": "AQAB"
            }
        ]
    }
    ```
1.  Remove the client workload by running the following command:
    ```terminal
    $ oc delete deployment ztwim-client -n default
    ```