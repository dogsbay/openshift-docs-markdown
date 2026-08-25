{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying {{ spire_full }} with federation on both clusters {id="zero-trust-manager-deploy-spire-federation-multi-cluster_{{ context }}"}

Deploy {{ spire_full }} (SPIRE) operand custom resources (CRs) with federation enabled on Cluster A and Cluster B, wait for operands to become ready, and verify SDS configuration. {._abstract}

**Prerequisites**

*   You have completed preparing the environment for multi-cluster SPIRE federation. For more information, see "Preparing the environment for multi-cluster {{ spire_full }} federation".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" procedure are set.

**Procedure**

1.  Deploy SPIRE with federation enabled on Cluster A:
    1.  Create a YAML file that defines the `ZeroTrustWorkloadIdentityManager` CR on Cluster A:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: ZeroTrustWorkloadIdentityManager
        metadata:
          name: cluster
        spec:
          trustDomain: ${CLUSTER_A_TRUST_DOMAIN}
          clusterName: ${CLUSTER_A}
          bundleConfigMap: "spire-bundle"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireServer` CR on Cluster A:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireServer
        metadata:
          name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          jwtIssuer: $JWT_ISSUER_A
          caValidity: "24h"
          defaultX509Validity: "1h"
          defaultJWTValidity: "5m"
          caKeytype: "rsa-2048"
          jwtKeyType: "rsa-2048"
          keyManager: ""
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
          federation:
            bundleEndpoint:
              profile: "https_spiffe"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireAgent` CR on Cluster A:
        ```yaml
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
            useNewContainerLocator: "true"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpiffeCSIDriver` CR on Cluster A:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpiffeCSIDriver
        metadata:
          name: cluster
        spec:
          agentSocketPath: "/run/spire/agent-sockets"
          pluginName: csi.spiffe.io
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireOIDCDiscoveryProvider` CR on Cluster A:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireOIDCDiscoveryProvider
        metadata:
          name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          csiDriverName: "csi.spiffe.io"
          jwtIssuer: $JWT_ISSUER_A
          replicaCount: 1
          managedRoute: "true"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Deploy SPIRE with federation enabled on Cluster B:
    1.  Create a YAML file that defines the `ZeroTrustWorkloadIdentityManager` CR on Cluster B:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: ZeroTrustWorkloadIdentityManager
        metadata:
          name: cluster
        spec:
          trustDomain: ${CLUSTER_B_TRUST_DOMAIN}
          clusterName: ${CLUSTER_B}
          bundleConfigMap: "spire-bundle"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireServer` CR on Cluster B:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireServer
        metadata:
          name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          jwtIssuer: $JWT_ISSUER_B
          caValidity: "24h"
          defaultX509Validity: "1h"
          defaultJWTValidity: "5m"
          caKeytype: "rsa-2048"
          jwtKeyType: "rsa-2048"
          keyManager: ""
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
          federation:
            bundleEndpoint:
              profile: "https_spiffe"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireAgent` CR on Cluster B:
        ```yaml
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
            useNewContainerLocator: "true"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpiffeCSIDriver` CR on Cluster B:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpiffeCSIDriver
        metadata:
          name: cluster
        spec:
          agentSocketPath: "/run/spire/agent-sockets"
          pluginName: csi.spiffe.io
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
    1.  Create a YAML file that defines the `SpireOIDCDiscoveryProvider` CR on Cluster B:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireOIDCDiscoveryProvider
        metadata:
          name: cluster
        spec:
          logLevel: "info"
          logFormat: "text"
          csiDriverName: "csi.spiffe.io"
          jwtIssuer: $JWT_ISSUER_B
          replicaCount: 1
          managedRoute: "true"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `spire-server` StatefulSet to become ready on Cluster A by running the following command:
    ```terminal
    $ oc rollout status statefulset/spire-server --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-agent` DaemonSet to become ready on Cluster A by running the following command:
    ```terminal
    $ oc rollout status daemonset/spire-agent --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-spiffe-csi-driver` DaemonSet to become ready on Cluster A by running the following command:
    ```terminal
    $ oc rollout status daemonset/spire-spiffe-csi-driver --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-spiffe-oidc-discovery-provider` deployment to become available on Cluster A by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/spire-spiffe-oidc-discovery-provider \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-server` StatefulSet to become ready on Cluster B by running the following command:
    ```terminal
    $ oc rollout status statefulset/spire-server --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-agent` DaemonSet to become ready on Cluster B by running the following command:
    ```terminal
    $ oc rollout status daemonset/spire-agent --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-spiffe-csi-driver` DaemonSet to become ready on Cluster B by running the following command:
    ```terminal
    $ oc rollout status daemonset/spire-spiffe-csi-driver --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```
1.  Wait for the `spire-spiffe-oidc-discovery-provider` deployment to become available on Cluster B by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/spire-spiffe-oidc-discovery-provider \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} --timeout=300s
    ```

**Verification**

1.  Verify that the SDS configuration is available on Cluster A by running the following command:
    ```terminal
    $ oc get cm spire-agent --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n "${ZTWIM_NS}" \
      -o jsonpath='{.data.agent\.conf}' | grep -A5 '"sds"'
    ```
1.  Verify that the SDS configuration is available on Cluster B by running the following command:
    ```terminal
    $ oc get cm spire-agent --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n "${ZTWIM_NS}" \
      -o jsonpath='{.data.agent\.conf}' | grep -A5 '"sds"'
    ```
    ```terminal title="Example output"
    "sds": {
      "default_all_bundles_name": "ROOTCA",
      "default_bundle_name": "null"
    },
    ```