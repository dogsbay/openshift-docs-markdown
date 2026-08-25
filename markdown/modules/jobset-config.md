{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a JobSet {id="js-config_{{ context }}"}

You can use the {{ js_operator }} to deploy a JobSet to manage and run large-scale, coordinated workloads. {._abstract}

**Prerequisites**

*   You have installed the {{ js_operator }}.
*   You have a cluster with available NVIDIA GPUs.

**Procedure**

1.  Create a new project by running the following command:
    ```terminal
    $ oc new-project <my_namespace>
    ```
1.  Create a file named `jobset.yaml`:
    ```yaml
    apiVersion: jobset.x-k8s.io/v1alpha2
    kind: JobSet
    metadata:
      name: pytorch
    spec:
      replicatedJobs:
      - name: workers
        template:
          spec:
            parallelism: 3
            completions: 3
            backoffLimit: 0
            template:
              spec:
                imagePullSecrets:
                  - name: my-registry-secret
                initContainers:
                  - name: prepare
                    image: docker.io/alpine/git:v2.52.0
                    args: ['clone', 'https://github.com/pytorch/examples']
                    volumeMounts:
                      - name: workdir
                        mountPath: /git
                containers:
                  - name: pytorch
                    image: docker.io/pytorch/pytorch:2.10.0-cuda13.0-cudnn9-runtime
                    resources:
                      limits:
                        nvidia.com/gpu: "1"
                      requests:
                        nvidia.com/gpu: "1"
                    ports:
                    - containerPort: 4321
                    env:
                    - name: MASTER_ADDR
                      value: "pytorch-workers-0-0.pytorch"
                    - name: MASTER_PORT
                      value: "4321"
                    - name: RANK
                      valueFrom:
                        fieldRef:
                          fieldPath: metadata.annotations['batch.kubernetes.io/job-completion-index']
                    - name: PYTHONUNBUFFERED
                      value: "0"
                    command:
                    - /bin/sh
                    - -c
                    - |
                      cd examples/distributed/ddp-tutorial-series
                      torchrun --nproc_per_node=1 --nnodes=3 --rdzv_id=100 --rdzv_backend=c10d --rdzv_endpoint=$MASTER_ADDR:$MASTER_PORT multinode.py 1000 100
                    volumeMounts:
                      - name: workdir
                        mountPath: /workspace
                volumes:
                  - name: workdir
                    emptyDir: {}
    ```

    where:

    `spec.replicatedJobs.template.spec.parallelism`
    :   Specifies the number of pods running at the same time.

    `spec.replicatedJobs.template.spec.completions`
    :   Specifies the total number of pods that must finish successfully for the job to be marked complete.
1.  Apply the JobSet configuration by running the following command:
    ```terminal
    $ oc apply -f jobset.yaml
    ```

**Verification**

*   Verify that pods were started by running the following command:
    ```terminal
    $ oc get pods -n <my_namespace>
    ```
    ```terminal title="Example output"
    NAME                        READY   STATUS    RESTARTS   AGE
    pytorch-workers-0-0-2lzwt   1/1     Running   0          2m17s
    pytorch-workers-0-1-g2lrv   1/1     Running   0          2m17s
    pytorch-workers-0-2-dpljq   1/1     Running   0          2m17s
    ```