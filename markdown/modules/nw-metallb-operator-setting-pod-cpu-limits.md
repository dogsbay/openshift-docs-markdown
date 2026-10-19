{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring pod CPU limits in a MetalLB deployment {id="nw-metallb-operator-setting-pod-CPU-limits_{{ context }}"}

To manage compute resources on nodes running MetalLB in {{ product_title }}, you can assign CPU limits to the `controller` and `speaker` pods in the `MetalLB` custom resource. This ensures that all pods on the node have the necessary compute resources to manage workloads and cluster housekeeping. {._abstract}

**Prerequisites**

*   You are logged in as a user with `cluster-admin` privileges.
*   You have installed the MetalLB Operator.

**Procedure**

1.  Create a `MetalLB` custom resource file, such as `CPULimits.yaml`, to specify the `cpu` value for the `controller` and `speaker` pods: 
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: MetalLB
    metadata:
      name: metallb
      namespace: metallb-system
    spec:
      logLevel: debug
      controllerConfig:
        resources:
          limits:
            cpu: "200m"
      speakerConfig:
        resources:
          limits:
            cpu: "300m"
    ```
1.  Apply the `MetalLB` custom resource configuration:
    ```bash
    $ oc apply -f CPULimits.yaml
    ```

**Verification**

*   To view compute resources for a pod, run the following command, replacing `<pod_name>` with your target pod:
    ```bash
    $ oc describe pod <pod_name>
    ```