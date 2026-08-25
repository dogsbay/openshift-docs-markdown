{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Dynamic Accelerator Slicer Operator using the CLI {id="das-operator-installing-cli_{{ context }}"}

As a cluster administrator, you can install the Dynamic Accelerator Slicer (DAS) Operator using the OpenShift CLI.

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed the required prerequisites:
    *   cert-manager Operator for Red Hat OpenShift
    *   Node Feature Discovery (NFD) Operator
    *   NVIDIA GPU Operator
    *   NodeFeatureDiscovery CR

**Procedure**

1.  Configure the NVIDIA GPU Operator for MIG support:
    1.  Apply the following cluster policy to disable the default NVIDIA device plugin and enable MIG support. Create a file named `gpu-cluster-policy.yaml` with the following content:
        ```yaml
        apiVersion: nvidia.com/v1
        kind: ClusterPolicy
        metadata:
          name: gpu-cluster-policy
        spec:
          daemonsets:
            rollingUpdate:
              maxUnavailable: "1"
            updateStrategy: RollingUpdate
          dcgm:
            enabled: true
          dcgmExporter:
            config:
              name: ""
            enabled: true
            serviceMonitor:
              enabled: true
          devicePlugin:
            config:
              default: ""
              name: ""
            enabled: false
            mps:
              root: /run/nvidia/mps
          driver:
            certConfig:
              name: ""
            enabled: true
            kernelModuleConfig:
              name: ""
            licensingConfig:
              configMapName: ""
              nlsEnabled: true
            repoConfig:
              configMapName: ""
            upgradePolicy:
              autoUpgrade: true
              drain:
                deleteEmptyDir: false
                enable: false
                force: false
                timeoutSeconds: 300
              maxParallelUpgrades: 1
              maxUnavailable: 25%
              podDeletion:
                deleteEmptyDir: false
                force: false
                timeoutSeconds: 300
              waitForCompletion:
                timeoutSeconds: 0
            useNvidiaDriverCRD: false
            useOpenKernelModules: false
            virtualTopology:
              config: ""
          gdrcopy:
            enabled: false
          gds:
            enabled: false
          gfd:
            enabled: true
          mig:
            strategy: mixed
          migManager:
            config:
              default: ""
              name: default-mig-parted-config
            enabled: true
            env:
              - name: WITH_REBOOT
                value: 'true'
              - name: MIG_PARTED_MODE_CHANGE_ONLY
                value: 'true'    
          nodeStatusExporter:
            enabled: true
          operator:
            defaultRuntime: crio
            initContainer: {}
            runtimeClass: nvidia
            use_ocp_driver_toolkit: true
          sandboxDevicePlugin:
            enabled: true
          sandboxWorkloads:
            defaultWorkload: container
            enabled: false
          toolkit:
            enabled: true
            installDir: /usr/local/nvidia
          validator:
            plugin:
              env:
              - name: WITH_WORKLOAD
                value: "false"
            cuda:
              env:
              - name: WITH_WORKLOAD
                value: "false"
          vfioManager:
            enabled: true
          vgpuDeviceManager:
            enabled: true
          vgpuManager:
            enabled: false
        ```
    1.  Apply the cluster policy by running the following command:
        ```terminal
        $ oc apply -f gpu-cluster-policy.yaml
        ```
    1.  Verify the NVIDIA GPU Operator cluster policy reaches the `Ready` state by running the following command:
        ```terminal
        $ oc get clusterpolicies.nvidia.com gpu-cluster-policy -w
        ```

        Wait until the `STATUS` column shows `ready`.
        ```terminal title="Example output"
        NAME                 STATUS   AGE
        gpu-cluster-policy   ready    2025-08-14T08:56:45Z
        ```
    1.  Verify that all pods in the NVIDIA GPU Operator namespace are running by running the following command:
        ```terminal
        $ oc get pods -n nvidia-gpu-operator
        ```

        All pods should show a `Running` or `Completed` status.
    1.  Label nodes with MIG-capable GPUs to enable MIG mode by running the following command:
        ```terminal
        $ oc label node $NODE_NAME nvidia.com/mig.config=all-enabled --overwrite
        ```

        Replace `$NODE_NAME` with the name of each node that has MIG-capable GPUs.

        :::important

        After applying the MIG label, the labeled nodes reboot to enable MIG mode. Wait for the nodes to come back online before proceeding.
        
        :::

    1.  Verify that the nodes have successfully enabled MIG mode by running the following command:
        ```terminal
        $ oc get nodes -l nvidia.com/mig.config=all-enabled
        ```
1.  Create a namespace for the DAS Operator:
    1.  Create the following `Namespace` custom resource (CR) that defines the `das-operator` namespace, and save the YAML in the `das-namespace.yaml` file:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: das-operator
          labels:
            name: das-operator
            openshift.io/cluster-monitoring: "true"
        ```
    1.  Create the namespace by running the following command:
        ```terminal
        $ oc create -f das-namespace.yaml
        ```
1.  Install the DAS Operator in the namespace you created in the previous step by creating the following objects:
    1.  Create the following `OperatorGroup` CR and save the YAML in the `das-operatorgroup.yaml` file:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          generateName: das-operator-
          name: das-operator
          namespace: das-operator
        ```
    1.  Create the `OperatorGroup` CR by running the following command:
        ```terminal
        $ oc create -f das-operatorgroup.yaml
        ```
    1.  Create the following `Subscription` CR and save the YAML in the `das-sub.yaml` file:
        ```yaml title="Example Subscription"
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: das-operator
          namespace: das-operator
        spec:
          channel: "stable"
          installPlanApproval: Automatic
          name: das-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the subscription object by running the following command:
        ```terminal
        $ oc create -f das-sub.yaml
        ```
    1.  Change to the `das-operator` project:
        ```terminal
        $ oc project das-operator
        ```
    1.  Create the following `DASOperator` CR and save the YAML in the `das-dasoperator.yaml` file:
        ```yaml title="Example DASOperator CR"
        apiVersion: inference.redhat.com/v1alpha1
        kind: DASOperator
        metadata:
          name: cluster (1)
          namespace: das-operator
        spec:
          managementState: Managed
          logLevel: Normal
          operatorLogLevel: Normal
        ```
        1.  The name of the `DASOperator` CR must be `cluster`.
    1.  Create the `dasoperator` CR by running the following command:
        ```terminal
        oc create -f das-dasoperator.yaml
        ```

**Verification**

*   Verify that the Operator deployment is successful by running the following command:
    ```terminal
    $ oc get pods
    ```
    ```terminal title="Example output"
    NAME                                    READY   STATUS    RESTARTS   AGE
    das-daemonset-6rsfd                     1/1     Running   0          5m16s
    das-daemonset-8qzgf                     1/1     Running   0          5m16s
    das-operator-5946478b47-cjfcp           1/1     Running   0          5m18s
    das-operator-5946478b47-npwmn           1/1     Running   0          5m18s
    das-operator-webhook-59949d4f85-5n9qt   1/1     Running   0          68s
    das-operator-webhook-59949d4f85-nbtdl   1/1     Running   0          68s
    das-scheduler-6cc59dbf96-4r85f          1/1     Running   0          68s
    das-scheduler-6cc59dbf96-bf6ml          1/1     Running   0          68s
    ```

    A successful deployment shows all pods with a `Running` status. The deployment includes:

    das-operator
    :   Main Operator controller pods

    das-operator-webhook
    :   Webhook server pods for mutating pod requests

    das-scheduler
    :   Scheduler plugin pods for MIG slice allocation

    das-daemonset
    :   Daemonset pods that run only on nodes with MIG-compatible GPUs

    :::note

    The `das-daemonset` pods only appear on nodes that have MIG-compatible GPU hardware. If you do not see any daemonset pods, verify that your cluster has nodes with supported GPU hardware and that the NVIDIA GPU Operator is properly configured.
    
    :::