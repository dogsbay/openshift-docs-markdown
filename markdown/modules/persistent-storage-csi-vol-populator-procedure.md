{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating prepopulated volumes using volume populators {id="persistent-storage-csi-vol-populator-procedure_{{ context }}"}

To create volumes that are automatically filled with data when provisioned, define a Custom Resource Definition (CRD) as a data source and reference it when creating the persistent volume claim (PVC). {._abstract}

The following procedure explains how to create a prepopulated PVC using the example `hellos.hello.example.com` CRD created previously. 

In this example, rather than using an actual data source, you are creating a file called "example.txt" that contains the string "Hello, world!" in the root directory of the volume. For a real-world implementation, you need to create your own volume populator.

**Prerequisites**

*   You are logged in to a running {{ product_title }} cluster.
*   There is an existing CRD for volume populators.
*   {{ product_title }} does not ship with any volume populators. You **must** create your own volume populator.

**Procedure**

1.  Create a Custom Resource (CR) instance of the `Hello` CRD with the text "Hello, World!" passed in as `fileContents` parameter by running the following command:
    ```terminal
    $ oc apply -f  - <<EOF
    apiVersion: hello.example.com/v1alpha1
    kind: Hello
    metadata:
      name: example-hello
    spec:
      fileName: example.txt
      fileContents: Hello, world!
    EOF
    ```
1.  Create a PVC that references the Hello CR similar to the following example file:
    ```yaml title="Example PVC YAML file"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: example-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 10Mi
      dataSourceRef:
        apiGroup: hello.example.com
        kind: Hello
        name: example-hello
      volumeMode: Filesystem
    ```
    *   `spec.dataSourceRef`: Specifies the data source for the PVC.
    *   `spec.dataSourceRef.name`: Specifies the name of the CR that you are using as the data source. In this example, it is 'example-hello'.

**Verification**

1.  After a few minutes, ensure that the PVC is created and in the `Bound` status by running the following command:
    ```terminal
    $ oc get pvc example-pvc -n hello
    ```

    In this example, the name of the PVC is `example-pvc`.
    ```terminal title="Example output"
    NAME          STATUS    VOLUME        CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    example-pvc   Bound     my-pv         10Mi       ReadWriteOnce  gp3-csi        <unset>                 14s
    ```
1.  Create a job that reads from the PVC to verify that the data source information was applied using the following example file:
    ```yaml title="Example job YAML file"
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: example-job
    spec:
      template:
        spec:
          containers:
            - name: example-container
              image: busybox:latest
              command:
                - cat
                - /mnt/example.txt
              volumeMounts:
                - name: vol
                  mountPath: /mnt
          restartPolicy: Never
          volumes:
            - name: vol
              persistentVolumeClaim:
                claimName: example-pvc
    ```
    *   `spec.template.spec.containers.command`: Specifies the location and name of the file with the "Hello, world!" text. In this example, the location is "/mnt/example.txt".
    *   `spec.template.spec.volumes.persistentVolumeClaim`: Specifies the name of the PVC you created in Step 2. In this example, it is `example-pvc`.
1.  Start the job by running the following command:
    ```terminal
    $ oc run example-job --image=busybox --command -- sleep 30 --restart=OnFailure
    ```
    ```terminal title="Example output"
    pod/example-job created
    ```
1.  Wait for the job, and all of its dependencies, to finish by running the following command:
    ```terminal
    $ oc wait --for=condition=Complete pod/example-job
    ```
1.  Verify the contents collected by the job by running the following command:
    ```terminal
    $ oc logs job/example-job
    ```
    ```terminal title="Example expected output"
    Hello, world!
    ```