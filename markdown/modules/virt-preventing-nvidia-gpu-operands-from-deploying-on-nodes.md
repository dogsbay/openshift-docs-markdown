{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preventing NVIDIA GPU operands from deploying on nodes {id="virt-preventing-nvidia-gpu-operands-from-deploying-on-nodes_{{ context }}"}

If you use the [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/openshift/contents.html) in your cluster, you can apply the `nvidia.com/gpu.deploy.operands=false` label to nodes that you do not want to configure for GPU or vGPU operands. This prevents the creation of the pods that configure GPU or vGPU operands and terminates existing pods. {._abstract}

**Prerequisites**

*   The {{ oc_first }} is installed.

**Procedure**

*   Label the node by running the following command:

{% if not (openshift_rosa or openshift_dedicated) %}
    ```terminal
    $ oc label node <node_name> nvidia.com/gpu.deploy.operands=false
    ```

    where:

    `<node_name>`
    :   Specifies the name of a node where you do not want to install the NVIDIA GPU operands.
{% endif %}

{% if openshift_rosa or openshift_dedicated %}
    ```terminal
    $ rosa edit machinepool --cluster=<cluster_name> <machinepool_ID> nvidia.com/gpu.deploy.operands=false
    ```
{% endif %}

**Verification**

1.  Verify that the label was added to the node by running the following command:
    ```terminal
    $ oc describe node <node_name>
    ```
1.  Optional: If GPU operands were previously deployed on the node, verify their removal.
    1.  Check the status of the pods in the `nvidia-gpu-operator` namespace by running the following command:
        ```terminal
        $ oc get pods -n nvidia-gpu-operator
        ```

        Example output:
        ```terminal
        NAME                             READY   STATUS        RESTARTS   AGE
        gpu-operator-59469b8c5c-hw9wj    1/1     Running       0          8d
        nvidia-sandbox-validator-7hx98   1/1     Running       0          8d
        nvidia-sandbox-validator-hdb7p   1/1     Running       0          8d
        nvidia-sandbox-validator-kxwj7   1/1     Terminating   0          9d
        nvidia-vfio-manager-7w9fs        1/1     Running       0          8d
        nvidia-vfio-manager-866pz        1/1     Running       0          8d
        nvidia-vfio-manager-zqtck        1/1     Terminating   0          9d
        ```
    1.  Monitor the pod status until the pods with `Terminating` status are removed:
        ```terminal
        $ oc get pods -n nvidia-gpu-operator
        ```

        Example output:
        ```terminal
        NAME                             READY   STATUS    RESTARTS   AGE
        gpu-operator-59469b8c5c-hw9wj    1/1     Running   0          8d
        nvidia-sandbox-validator-7hx98   1/1     Running   0          8d
        nvidia-sandbox-validator-hdb7p   1/1     Running   0          8d
        nvidia-vfio-manager-7w9fs        1/1     Running   0          8d
        nvidia-vfio-manager-866pz        1/1     Running   0          8d
        ```