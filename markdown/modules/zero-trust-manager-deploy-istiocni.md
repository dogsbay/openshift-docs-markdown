{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ SMProductName }} CNI on both clusters {id="zero-trust-manager-deploy-istiocni_{{ context }}"}

Deploy the `IstioCNI` CR and federated `ClusterSPIFFEID` resources on Cluster A and Cluster B. This configures {{ SMProductName }} CNI networking and federated SPIFFE trust for cross-cluster mesh workloads. {._abstract}

**Prerequisites**

*   You have configured {{ SMProductName }} for multi-cluster integration. For more information, see "Configuring {{ SMProductName }} for multi-cluster {{ spire_full }} integration".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.
*   You have installed {{ SMProductName }} {{ SMProductVersion }} on both clusters.

**Procedure**

1.  Create the {{ SMProductName }} CNI namespace on Cluster A by running the following command:
    ```terminal
    $ oc new-project "${OSSM_CNI}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Deploy the `IstioCNI` CR on Cluster A by running the following command:
    1.  Create a YAML file that defines the `IstioCNI` CR on Cluster A:
        ```yaml
        apiVersion: sailoperator.io/v1
        kind: IstioCNI
        metadata:
          name: default
        spec:
          namespace: ${OSSM_CNI}
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `istio-cni-node` DaemonSet to be created on Cluster A by running the following command:
    ```terminal
    $ until oc get daemonset/istio-cni-node --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n "${OSSM_CNI}" &> /dev/null; do
      sleep 3
    done
    ```
1.  Wait for the `IstioCNI` DaemonSet to become ready on Cluster A by running the following command:
    ```terminal
    $ oc rollout status daemonset/istio-cni-node --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n "${OSSM_CNI}" --timeout=300s
    ```
1.  Create the {{ SMProductName }} CNI namespace on Cluster B by running the following command:
    ```terminal
    $ oc new-project "${OSSM_CNI}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Deploy the `IstioCNI` CR on Cluster B by running the following command:
    1.  Create a YAML file that defines the `IstioCNI` CR on Cluster B:
        ```yaml
        apiVersion: sailoperator.io/v1
        kind: IstioCNI
        metadata:
          name: default
        spec:
          namespace: ${OSSM_CNI}
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `istio-cni-node` DaemonSet to be created on Cluster B by running the following command:
    ```terminal
    $ until oc get daemonset/istio-cni-node --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n "${OSSM_CNI}" &> /dev/null; do
      sleep 3
    done
    ```
1.  Wait for the `IstioCNI` DaemonSet to become ready on Cluster B by running the following command:
    ```terminal
    $ oc rollout status daemonset/istio-cni-node --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n "${OSSM_CNI}" --timeout=300s
    ```
1.  Create the federated `ClusterSPIFFEID` resources on Cluster A by running the following command:
    1.  Create a YAML file that defines the federated `ClusterSPIFFEID` resources on Cluster A:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterSPIFFEID
        metadata:
          name: sample-federation
        spec:
          className: zero-trust-workload-identity-manager-spire
          spiffeIDTemplate: "spiffe://{{ .TrustDomain }}/ns/{{ .PodMeta.Namespace }}/sa/{{ .PodSpec.ServiceAccountName }}"
          namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: sample
          federatesWith:
            - "${CLUSTER_B_TRUST_DOMAIN}"
        ---
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterSPIFFEID
        metadata:
          name: istio-system-federation
        spec:
          className: zero-trust-workload-identity-manager-spire
          spiffeIDTemplate: "spiffe://{{ .TrustDomain }}/ns/{{ .PodMeta.Namespace }}/sa/{{ .PodSpec.ServiceAccountName }}"
          namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: istio-system
          federatesWith:
            - "${CLUSTER_B_TRUST_DOMAIN}"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Create federated `ClusterSPIFFEID` resources on Cluster B by running the following command:
    1.  Create a YAML file that defines the federated `ClusterSPIFFEID` resources on Cluster B:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterSPIFFEID
        metadata:
          name: sample-federation
        spec:
          className: zero-trust-workload-identity-manager-spire
          spiffeIDTemplate: "spiffe://{{ .TrustDomain }}/ns/{{ .PodMeta.Namespace }}/sa/{{ .PodSpec.ServiceAccountName }}"
          namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: sample
          federatesWith:
            - "${CLUSTER_A_TRUST_DOMAIN}"
        ---
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterSPIFFEID
        metadata:
          name: istio-system-federation
        spec:
          className: zero-trust-workload-identity-manager-spire
          spiffeIDTemplate: "spiffe://{{ .TrustDomain }}/ns/{{ .PodMeta.Namespace }}/sa/{{ .PodSpec.ServiceAccountName }}"
          namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: istio-system
          federatesWith:
            - "${CLUSTER_A_TRUST_DOMAIN}"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```

        :::important

        Do not patch the default `ClusterSPIFFEID` (`zero-trust-workload-identity-manager-spire-default`). The {{ zero_trust_full }} reconciles and reverts manual changes. Instead, create custom `ClusterSPIFFEID` resources for the specific namespaces.
        
        :::