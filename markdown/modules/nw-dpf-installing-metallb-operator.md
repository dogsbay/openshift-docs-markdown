{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the MetalLB Operator {id="nw-dpf-installing-metallb-operator_{{ context }}"}

The MetalLB Operator provides load balancing services for DPF components on the management cluster.
You install this operator by using the OpenShift CLI. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a file named `metallb-operator.yaml` with the following content:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: metallb-system
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: metallb-operator
      namespace: openshift-operators
    spec:
      channel: "stable"
      name: metallb-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      installPlanApproval: Automatic
      config:
        # Tolerate the taint on the master nodes
        tolerations:
        - key: "node-role.kubernetes.io/control-plane"
          operator: "Exists"
          effect: "NoSchedule"
        # Force scheduling only on nodes with the control-plane label
        affinity:
          nodeAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: "node-role.kubernetes.io/control-plane"
                  operator: "Exists"
    ```
1.  Apply the file:
    ```terminal
    $ oc apply -f metallb-operator.yaml
    ```

**Verification**

*   Wait for the MetalLB custom resource definition to be created and established before configuring MetalLB:
    ```terminal
    $ oc wait crd/metallbs.metallb.io --for=create --timeout=10m
    $ oc wait crd/metallbs.metallb.io --for=condition=Established --timeout=5m
    ```