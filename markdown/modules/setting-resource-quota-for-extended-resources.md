{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting resource quota for extended resources {id="setting-resource-quota-for-extended-resources_{{ context }}"}

Configure extended resources, such as GPUs, in a resource quota file and apply it to a project to enforce strict capacity limits and prevent pods from exceeding available capacity. {._abstract}

Overcommitment of resources is not allowed for extended resources, so you must specify `requests` and `limits` for the same extended resource in a quota. Currently, only quota items with the prefix `requests.` is allowed for extended resources. The following is an example scenario of how to set resource quota for the GPU resource `nvidia.com/gpu`.

**Procedure**

1.  Determine how many GPUs are available on a node in your cluster. For example:
    ```terminal
    # oc describe node ip-172-31-27-209.us-west-2.compute.internal | egrep 'Capacity|Allocatable|gpu'
    ```
    ```terminal title="Example output"
                        openshift.com/gpu-accelerator=true
    Capacity:
     nvidia.com/gpu:  2
    Allocatable:
     nvidia.com/gpu:  2
      nvidia.com/gpu  0           0
    ```

    In this example, 2 GPUs are available.
1.  Create a `ResourceQuota` object to set a quota in the namespace `nvidia`. In this example, the quota is `1`:
    ```terminal title="Example output"
    apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: gpu-quota
      namespace: nvidia
    spec:
      hard:
        requests.nvidia.com/gpu: 1
    ```
1.  Create the quota:
    ```terminal
    # oc create -f gpu-quota.yaml
    ```
    ```terminal title="Example output"
    resourcequota/gpu-quota created
    ```
1.  Verify that the namespace has the correct quota set:
    ```terminal
    # oc describe quota gpu-quota -n nvidia
    ```
    ```terminal title="Example output"
    Name:                    gpu-quota
    Namespace:               nvidia
    Resource                 Used  Hard
    --------                 ----  ----
    requests.nvidia.com/gpu  0     1
    ```
1.  Define a pod that asks for a single GPU. The following example definition file is called `gpu-pod.yaml`:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      generateName: gpu-pod-
      namespace: nvidia
    spec:
      restartPolicy: OnFailure
      containers:
      - name: rhel7-gpu-pod
        image: rhel7
        env:
          - name: NVIDIA_VISIBLE_DEVICES
            value: all
          - name: NVIDIA_DRIVER_CAPABILITIES
            value: "compute,utility"
          - name: NVIDIA_REQUIRE_CUDA
            value: "cuda>=5.0"
        command: ["sleep"]
        args: ["infinity"]
        resources:
          limits:
            nvidia.com/gpu: 1
    ```
1.  Create the pod:
    ```terminal
    # oc create -f gpu-pod.yaml
    ```
1.  Verify that the pod is running:
    ```terminal
    # oc get pods
    ```
    ```terminal title="Example output"
    NAME              READY     STATUS      RESTARTS   AGE
    gpu-pod-s46h7     1/1       Running     0          1m
    ```
1.  Verify that the quota `Used` counter is correct:
    ```terminal
    # oc describe quota gpu-quota -n nvidia
    ```
    ```terminal title="Example output"
    Name:                    gpu-quota
    Namespace:               nvidia
    Resource                 Used  Hard
    --------                 ----  ----
    requests.nvidia.com/gpu  1     1
    ```
1.  Attempt to create a second GPU pod in the `nvidia` namespace. This is technically available on the node because it has 2 GPUs:
    ```terminal
    # oc create -f gpu-pod.yaml
    ```
    ```terminal title="Example output"
    Error from server (Forbidden): error when creating "gpu-pod.yaml": pods "gpu-pod-f7z2w" is forbidden: exceeded quota: gpu-quota, requested: requests.nvidia.com/gpu=1, used: requests.nvidia.com/gpu=1, limited: requests.nvidia.com/gpu=1
    ```

    This **Forbidden** error message is expected because you have a quota of 1 GPU and this pod tried to allocate a second GPU, which exceeds its quota.