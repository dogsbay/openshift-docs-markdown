{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a workload on the DPU {id="nw-dpu-creating-a-sfc_{{ context }}"}

You can deploy network workloads directly on the DPU to improve performance, enhance security isolation, and reduce host CPU usage. {._abstract}

The DPU offloads network workloads, such as security functions or virtualized appliances, to improve performance, enhance security isolation, and free host CPU resources.

Follow this procedure to deploy a simple pod directly onto the DPU.

**Prerequisites**

*   Install the {{ oc_first }}.
*   An account with `cluster-admin` privileges.
*   Install the DPU Operator.

**Procedure**

1.  Save the following YAML file example as `dpu-pod.yaml`. This is an example of a simple pod that will be scheduled directly onto a DPU node by the Kubernetes default scheduler.
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: "my-network-function"
      namespace: openshift-dpu-operator
      annotations:
        k8s.v1.cni.cncf.io/networks: dpunfcni-conf, dpunfcni-conf
    spec:
      nodeSelector:
        dpu.config.openshift.io/dpuside: "dpu"
      containers:
        - name: "my-network-function"
          image: "quay.io/example-org/my-network-function:latest"
          resources:
            requests:
              openshift.io/dpu: "2"
            limits:
              openshift.io/dpu: "2"
          securityContext:
            privileged: true
            capabilities:
              drop:
                - ALL
              add:
                - NET_RAW
                - NET_ADMIN
    ```
    *   `metadata.name.annotations.k8s.v1.cni.cncf.io/networks`: The value `dpunfcni-conf` specifies the name of the `NetworkAttachmentDefinition` resource. The DPU Operator creates this resource during installation to configure the DPU networking.
    *   `spec.nodeSelector`: The `nodeSelector` is the primary mechanism for scheduling this workload. The DPU Operator creates and maintains the label: `dpu.config.openshift.io/dpuside: "dpu"`. This label ensures the pod is scheduled directly onto the DPU processing unit.
    *   `spec.containers.name`: The name of the container.
    *   `spec.containers.image`: The container image to pull and run.
1.  Create the pod by running the following command:
    ```terminal
    $ oc apply -f dpu-pod.yaml
    ```
1.  Verify the pod status by running the following command:
    ```bash
    $ oc get pods -n openshift-dpu-operator
    ```

    Ensure the pod’s status is `Running`.