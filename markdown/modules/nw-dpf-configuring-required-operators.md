{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the required Operators {id="nw-dpf-configuring-required-operators_{{ context }}"}

After the required Operators are installed, configure Node Feature Discovery, MetalLB, {{ gitops_shortname }}, and Cluster Network Operator for the DPF environment. This procedure also verifies that the multicluster engine and hosted control planes components are ready. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed the {{ cert_manager_operator }}, MetalLB Operator, {{ gitops_title }}, and NVIDIA Maintenance Operator.
*   You have installed the Logical Volume Manager Storage Operator, multicluster engine operator, and the Node Feature Discovery Operator. You can install them by using the Assisted Installer during cluster creation. For manual installation, see [Installing multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.17/html/install/index) and ensure that the hosted control planes component is enabled.

**Procedure**

1.  Define the cluster variables used by Node Feature Discovery:
    ```terminal
    $ export CLUSTER_NAME="doca-mgmt"
    $ export BASE_DOMAIN="example.com"
    $ export HOST_CLUSTER_API="api.${CLUSTER_NAME}.${BASE_DOMAIN}"
    ```

    where:

    `CLUSTER_NAME`
    :   Specifies the management cluster name.

    `BASE_DOMAIN`
    :   Specifies the management cluster base domain.

    `HOST_CLUSTER_API`
    :   Specifies the management cluster API endpoint.

1.  Create a file named `nfd-instance.yaml` with the following `NodeFeatureDiscovery` resource definition:
    ```yaml
    apiVersion: nfd.openshift.io/v1
    kind: NodeFeatureDiscovery
    metadata:
      name: nfd-instance
      namespace: openshift-nfd
    spec:
      operand:
        workerEnvs:
          - name: KUBERNETES_SERVICE_HOST
            value: $HOST_CLUSTER_API
          - name: KUBERNETES_SERVICE_PORT
            value: "6443"
      workerConfig:
        configData: |
          sources:
            pci:
              deviceClassWhitelist:
                - "0200"
                - "03"
                - "12"
                - "0207"
              deviceLabelFields:
                - "vendor"
                - "device"
                - "class"
    ```
1.  Apply the file by using `envsubst` to substitute the environment variables:
    ```terminal
    $ envsubst < nfd-instance.yaml | oc apply -f -
    ```
1.  Create a file named `nfd-rule.yaml` with the following `NodeFeatureRule` resource definition to detect worker nodes with DPUs and label them with a `dpu-enabled` label:
    ```yaml
    apiVersion: nfd.openshift.io/v1alpha1
    kind: NodeFeatureRule
    metadata:
      name: dpu-detection-rule
      namespace: openshift-nfd
    spec:
      rules:
        - labels:
            dpu-enabled: ""
          matchFeatures:
            - feature: pci.device
              matchExpressions:
                device:
                  op: In
                  value:
                    - a2d6
                    - a2dc
                vendor:
                  op: In
                  value:
                    - 15b3
          name: DPU-detection-rule
    ```
1.  Apply the file:
    ```terminal
    $ oc apply -f nfd-rule.yaml
    ```
1.  Ensure that the MetalLB Operator `Subscription` schedules Operator pods on control-plane nodes.
When you install the MetalLB Operator, include the following `spec.config` settings, or patch an existing `Subscription` to add them:
    ```yaml
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
        tolerations:
        - key: "node-role.kubernetes.io/control-plane"
          operator: "Exists"
          effect: "NoSchedule"
        affinity:
          nodeAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
              nodeSelectorTerms:
              - matchExpressions:
                - key: "node-role.kubernetes.io/control-plane"
                  operator: "Exists"
    ```
1.  Create a file named `metallb-config.yaml` with the following `MetalLB` resource definition:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: MetalLB
    metadata:
      name: metallb
      namespace: openshift-operators
    spec:
      nodeSelector:
        node-role.kubernetes.io/control-plane: ""
      speakerTolerations:
        - key: node-role.kubernetes.io/control-plane
          operator: Exists
          effect: NoSchedule
    ```
1.  Apply the MetalLB resource file:
    ```terminal
    $ oc apply -f metallb-config.yaml
    ```
1.  Ensure that the {{ gitops_title }} `Subscription` includes the DPF-required environment variables.
When you install the Operator, set the following `spec.config.env` values, or patch an existing `Subscription` to add them so that Argo CD can manage the `dpf-operator-system` namespace:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-gitops-operator
      namespace: openshift-gitops-operator
    spec:
      channel: gitops-1.21
      config:
        env:
        - name: ARGOCD_CLUSTER_CONFIG_NAMESPACES
          value: "openshift-gitops,dpf-operator-system"
        - name: CONTROLLER_CLUSTER_ROLE
          value: "cluster-admin"
        - name: SERVER_CLUSTER_ROLE
          value: "cluster-admin"
      installPlanApproval: Automatic
      name: openshift-gitops-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      startingCSV: openshift-gitops-operator.v1.21.0
    ```
1.  Create a file named `argocd-instance.yaml` with the following `ArgoCD` resource definition:
    ```yaml
    apiVersion: argoproj.io/v1beta1
    kind: ArgoCD
    metadata:
      name: argocd
      namespace: dpf-operator-system
    spec:
      nodePlacement:
        nodeSelector:
          node-role.kubernetes.io/control-plane: ""
        tolerations:
        - key: node-role.kubernetes.io/master
          operator: Exists
          effect: NoSchedule
        - key: node-role.kubernetes.io/control-plane
          operator: Exists
          effect: NoSchedule
      server:
        route:
          enabled: true
        labels:
          ovn.dpu.nvidia.com/skip-injection: ""
      controller:
        labels:
          ovn.dpu.nvidia.com/skip-injection: ""
      repo:
        labels:
          ovn.dpu.nvidia.com/skip-injection: ""
      applicationSet:
        enabled: false
      resourceExclusions:
      - apiGroups:
        - packages.operators.coreos.com
        kinds:
        - PackageManifest
      sso:
        provider: dex
        dex:
          openShiftOAuth: true
      notifications:
        enabled: false
    ```
1.  Apply the Argo CD file:
    ```terminal
    $ oc apply -f argocd-instance.yaml
    ```
1.  Wait for the ArgoCD Redis deployment to be ready:
    ```terminal
    $ oc wait deployment argocd-redis -n dpf-operator-system \
      --for=condition=Available --timeout=120s
    ```
1.  Add the OVN skip-injection label to the Redis deployment:
    ```terminal
    $ oc patch deployment argocd-redis -n dpf-operator-system \
      --type=merge -p '{"spec":{"template":{"metadata":{"labels":{"ovn.dpu.nvidia.com/skip-injection":""}}}}}'
    ```

    :::important

    The OpenShift GitOps Operator ArgoCD CR does not support custom labels on the Redis component. This label must be applied manually to prevent the OVN resource injector from modifying Redis pods. The ArgoCD Operator will not override this patch.
    
    :::

1.  Enable global IP forwarding on the OVN-Kubernetes configuration:

    This command enables IP packet forwarding between different networks managed by OVN-Kubernetes.
    ```terminal
    $ oc patch network.operator.openshift.io cluster --type=merge -p \
      '{"spec":{"defaultNetwork":{"ovnKubernetesConfig":{"gatewayConfig":{"ipForwarding":"Global"}}}}}'
    ```
    ```terminal title="Example output"
    network.operator.openshift.io/cluster patched
    ```

**Verification**

*   Verify that the `MultiClusterEngine` instance is created:
    ```terminal
    $ oc get multiclusterengine mce
    ```
    ```terminal title="Example output"
    NAME   STATUS      AGE     CURRENTVERSION   DESIREDVERSION   MESSAGE
    mce    Available   4m58s   2.17.0           2.17.0           All components available
    ```
*   Verify that the hosted control planes component is enabled:
    ```terminal
    $ oc get multiclusterengine mce -o jsonpath='{.spec.overrides.components[?(@.name=="hypershift")].enabled}{"\n"}'
    ```
    ```terminal title="Example output"
    true
    ```
*   Verify that the `NodeFeatureDiscovery` instance and `NodeFeatureRule` are configured:
    ```terminal
    $ oc get nodefeaturediscovery,nodefeaturerule -n openshift-nfd
    ```
*   Verify that the `MetalLB` instance was created:
    ```terminal
    $ oc get metallb -n openshift-operators
    ```
*   Verify that the Argo CD pods are running:
    ```terminal
    $ oc get pods -n dpf-operator-system -l app.kubernetes.io/part-of=argocd
    ```
*   Verify that IP forwarding is set to `Global`:
    ```terminal
    $ oc get network.operator.openshift.io cluster -o jsonpath='{.spec.defaultNetwork.ovnKubernetesConfig.gatewayConfig.ipForwarding}'
    ```
    ```terminal title="Example output"
    Global
    ```