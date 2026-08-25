{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying a JobSet coordinator {id="js-coordinator_{{ context }}"}

To manage communication between JobSet pods, you can assign a specific JobSet coordinator pod. This ensures that your distributed workloads can reference a stable network endpoint as a central point of coordination for task synchronization and data exchange. {._abstract}

**Prerequisites**

*   You have installed the {{ js_operator }}.

**Procedure**

1.  Create a new namespace by running the following command.
    ```terminal
    $ oc new-project <new_namespace>
    ```
1.  Create a YAML file called `jobset-coordinator.yaml`:
    ```yaml title="Example YAML file"
    apiVersion: jobset.x-k8s.io/v1alpha2
    kind: JobSet
    metadata:
      name: coordinator
    spec:
      coordinator:
        replicatedJob: driver
        jobIndex: 0
        podIndex: 0
      replicatedJobs:
      - name: workers
        template:
          spec:
            parallelism: <pods_running_number>
            completions: <pods_finish_number>
            backoffLimit: 0
            template:
              spec:
                containers:
                - name: worker
                  env:
                    - name: COORDINATOR_ENDPOINT
                      valueFrom:
                        fieldRef:
                          fieldPath: metadata.labels['jobset.sigs.k8s.io/coordinator']
                  image: quay.io/nginx/nginx-unprivileged:1.29-alpine
                  command: [ "/bin/sh", "-c" ]
                  args:
                    - |
                      while ! curl -s "${COORDINATOR_ENDPOINT}:8080" | grep Welcome; do
                        sleep 3
                      done
                      sleep 100
      - name: driver
        template:
          spec:
            parallelism: <pods_running_number>
            completions: <pods_finish_number>
            backoffLimit: 0
            template:
              spec:
                containers:
                - name: driver
                  image: quay.io/nginx/nginx-unprivileged:1.29-alpine
                ports:
                  - containerPort: 8080
                    protocol: TCP
    ```

    where:

    `<pods_running_number>`
    :   Specifies the number of pods running at the same time.

    `<pods_finish_number>`
    :   Specifies the total number of pods that must finish successfully for the job to be marked complete.
1.  Apply the `jobset-coordinator.yaml` file by running the following command:
    ```terminal
    $ oc apply -f jobset-coordinator.yaml
    ```

**Verification**

*   Verify that pods were created by running the following command:
    ```terminal
    $ oc get pods -n <new_namespace>
    ```
    ```terminal title="Example output"
    NAME                            READY   STATUS              RESTARTS   AGE
    coordinator-driver-0-0-svgk7    1/1     Running             0          67s
    coordinator-workers-0-0-57jvg   1/1     Running             0          67s
    coordinator-workers-0-1-mghvx   1/1     Running             0          67s
    coordinator-workers-0-2-7cnvv   1/1     Running             0          67s
    ```