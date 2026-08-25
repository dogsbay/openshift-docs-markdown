{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a non-uniform memory access (NUMA) aligned SR-IOV pod {id="nw-sriov-topology-manager_{{ context }}"}

You can create a NUMA aligned SR-IOV pod by restricting SR-IOV and the CPU resources allocated from the same NUMA node with `restricted` or `single-numa-node` Topology Manager policies. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have configured the CPU Manager policy to `static`. For more information on CPU Manager, see the "Additional resources" section.
*   You have configured the Topology Manager policy to `single-numa-node`.

    :::note

    When `single-numa-node` is unable to satisfy the request, you can configure the Topology Manager policy to `restricted`. For more flexible SR-IOV network resource scheduling, see _Excluding SR-IOV network topology during NUMA-aware scheduling_ in the _Additional resources_ section.
    
    :::


**Procedure**

1.  Create the following SR-IOV pod spec, and then save the YAML in the `<name>-sriov-pod.yaml` file. Replace `<name>` with a name for this pod.

    The following example shows an SR-IOV pod spec:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: sample-pod
      annotations:
        k8s.v1.cni.cncf.io/networks: <name>
    spec:
      containers:
      - name: sample-container
        image: <image>
        command: ["sleep", "infinity"]
        resources:
          limits:
            memory: "1Gi"
            cpu: "2"
          requests:
            memory: "1Gi"
            cpu: "2"
    ```
    *   `<name>` specifies the name of the SR-IOV network attachment definition CR.
    *   `<image>` specifies the name of the `sample-pod` image.
    *   To create the SR-IOV pod with guaranteed QoS, set `memory limits` equal to `memory requests`.
    *   To create the SR-IOV pod with guaranteed QoS, set `cpu limits` equal to `cpu requests`.
1.  Create the sample SR-IOV pod by running the following command:
    ```terminal
    $ oc create -f <filename>
    ```
    *   `<filename>` specifies the name of the file you created in the earlier step.
1.  Confirm that the `sample-pod` is configured with guaranteed QoS.
    ```terminal
    $ oc describe pod sample-pod
    ```
1.  Confirm that the `sample-pod` is allocated with exclusive CPUs.
    ```terminal
    $ oc exec sample-pod -- cat /sys/fs/cgroup/cpuset/cpuset.cpus
    ```
1.  Confirm that the SR-IOV device and CPUs that are allocated for the `sample-pod` are on the same NUMA node.
    ```terminal
    $ oc exec sample-pod -- cat /sys/fs/cgroup/cpuset/cpuset.cpus
    ```