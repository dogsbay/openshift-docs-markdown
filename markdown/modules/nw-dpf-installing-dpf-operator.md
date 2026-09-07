{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the DPF Operator {id="nw-dpf-installing-dpf-operator_{{ context }}"}

You can install the DPF Operator by using Helm to deploy the Operator into the `dpf-operator-system` namespace on your management cluster. {._abstract}


:::important

You must install the DPF Operator before the DPF HCP Provisioner Operator because that Operator requires the following DPF custom resource definitions to be available: `DPUCluster`, `DPUFlavor`, `DPUDeployment`, and `DPFOperatorConfig`.

:::


**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   You have installed the `helm` CLI.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Add the DPF Helm repository and update the local cache:
    ```terminal
    $ helm repo add --force-update dpf-repository ${REGISTRY}
    ```
    ```terminal
    $ helm repo update
    ```
1.  Install the DPF Operator by using Helm:
    ```terminal
    $ helm upgrade --install dpf-operator dpf-repository/dpf-operator \
        --namespace dpf-operator-system \
        --version "${TAG}" \
        --set kamajiEtcdDefrag.enabled=false \
        --set isOpenshift=true \
        --set enableNodeFeatureRules=false \
        --wait
    ```

**Verification**

1.  Verify that the Operator controller manager deployment has rolled out successfully:
    ```terminal
    $ oc rollout status deployment --namespace dpf-operator-system dpf-operator-controller-manager
    ```
    ```terminal title="Example output"
    deployment "dpf-operator-controller-manager" successfully rolled out
    ```
1.  Verify that all pods in the `dpf-operator-system` namespace are ready:
    ```terminal
    $ oc wait --for=condition=ready --namespace dpf-operator-system pods --all
    ```
    ```terminal title="Example output"
    pod/argocd-application-controller-0 condition met
    pod/argocd-dex-server-6dd56c8469-bhsq4 condition met
    pod/argocd-redis-b4f94bb8d-wr86b condition met
    pod/argocd-repo-server-96765f997-79k9q condition met
    pod/argocd-server-648c7ff85f-7frtg condition met
    pod/dpf-operator-controller-manager-7bf9744c5f-cwrgc condition met
    pod/maintenance-operator-585767f779-8k2lx condition met
    ```