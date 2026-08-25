{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running {{ js_operator }} with {{ kueue_name }} {id="kueue-running-jobset_{{ context }}"}

You can add and run {{ js_operator }} to your existing frameworks. {._abstract}

**Prerequisites**

*   {{ kueue_name }} using the {{ kueue_op }} is installed.
*   {{ js_operator }} is installed.
*   The {{ cert_manager_operator }} is installed.
*   The `namespace` where `JobSet` will be created is labeled using `kueue.openshift.io/managed=true`.
*   Ensure that the following objects have been configured:
    *   `ClusterQueue`
    *   `ResourceFlavor`
    *   `LocalQueue`
    *   `Namespace`

**Procedure**

1.  Create a file named `jobset.yaml`.
    ```yaml title="Example of a JobSet"
    apiVersion: jobset.x-k8s.io/v1alpha2
    kind: JobSet
    metadata:
      name: jobset
      namespace: my-namespace
    spec:
      replicatedJobs:
        - name: workers
          replicas: 1
          template:
            spec:
              parallelism: 3
              completions: 3
              backoffLimit: 1
              template:
                spec:
                  containers:
                    - name: sleep
                      image: busybox
                      resources:
                        requests:
                          cpu: 200m
                          memory: "200Mi"
                      command:
                        - sleep
                      args:
                        - 220s
        - name: driver
          template:
            spec:
              parallelism: 1
              completions: 1
              backoffLimit: 0
              template:
                spec:
                  containers:
                    - name: sleep
                      image: busybox
                      resources:
                        requests:
                          cpu: 200m
                          memory: "200Mi"
                      command:
                        - sleep
                      args:
                        - 220s
    ```
1.  Specify the target local queue in the `metadata.labels` section of the `JobSet` configuration.
    ```yaml
    metadata:
      labels:
        kueue.x-k8s.io/queue-name: <local-queue-name>
    ```
1.  Apply the JobSet configuration by running the following command: 
    ```terminal
    $ oc apply -f jobset.yaml
    ```