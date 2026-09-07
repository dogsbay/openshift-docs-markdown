{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the NVIDIA Maintenance Operator {id="nw-dpf-installing-maintenance-operator_{{ context }}"}

The NVIDIA Maintenance Operator assists in performing maintenance tasks and gracefully draining DPU worker nodes.
You install this operator by using Helm. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed the Helm CLI (`helm`).

**Procedure**

1.  Create a Helm values file named `maintenance-operator-values.yaml` with the following content:
    ```yaml
    operatorConfig:
      maxParallelOperations: 60%
    operator:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: "node-role.kubernetes.io/master"
                    operator: Exists
              - matchExpressions:
                  - key: "node-role.kubernetes.io/control-plane"
                    operator: Exists
      tolerations:
        - key: node-role.kubernetes.io/master
          operator: Exists
          effect: NoSchedule
        - key: node-role.kubernetes.io/control-plane
          operator: Exists
          effect: NoSchedule
    ```
1.  Install the Operator by using Helm:
    ```terminal
    $ helm upgrade --install maintenance-operator oci://ghcr.io/mellanox/maintenance-operator-chart \
      --namespace dpf-operator-system \
      --create-namespace \
      --disable-openapi-validation \
      --version 0.3.0 \
      --values maintenance-operator-values.yaml \
      --wait
    ```

**Verification**

*   Verify that the Operator pod is running:
    ```terminal
    $ oc get pods -n dpf-operator-system
    ```
    ```terminal title="Example output"
    maintenance-operator-585767f779-kps9c   1/1     Running   0          2d23h
    ```