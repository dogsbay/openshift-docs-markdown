{%- set _mod_docs_content_type = "PROCEDURE" %}
# Back up and restore a workload {id="cloud-experts-deploy-api-data-protection-perform-backup_{{ context }}"}

Back up and restore a workload to verify that {{ oadp_full }} is working correctly on your cluster. {._abstract}


:::note

The following sample `hello-world` application has no attached persistent volumes. Either Data Protection Application (DPA) configuration will work.

:::


**Procedure**

1.  Create a workload to back up:
    1.  Create a namespace by running:
        ```terminal
        $ oc create namespace hello-world
        ```
    1.  Create an application by running:
        ```terminal
        $ oc new-app -n hello-world --image=docker.io/openshift/hello-openshift
        ```
1.  Expose the route:
    ```terminal
    $ oc expose service/hello-openshift -n hello-world
    ```
1.  Check that the application is working:
    ```terminal
    $ curl `oc get route/hello-openshift -n hello-world -o jsonpath='{.spec.host}'`
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```
1.  Back up the workload:
    ```terminal
    $ cat << EOF | oc create -f -
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
     name: hello-world
     namespace: openshift-adp
    spec:
     includedNamespaces:
     - hello-world
     storageLocation: ${CLUSTER_NAME}-dpa-1
     ttl: 720h0m0s
    EOF
    ```
1.  Wait until the backup is done:
    ```terminal
    $ watch "oc -n openshift-adp get backup hello-world -o json | jq .status"
    ```
    ```JSON title="Example output"
    {
     "completionTimestamp": "2022-09-07T22:20:44Z",
     "expiration": "2022-10-07T22:20:22Z",
     "formatVersion": "1.1.0",
     "phase": "Completed",
     "progress": {
       "itemsBackedUp": 58,
       "totalItems": 58
     },
     "startTimestamp": "2022-09-07T22:20:22Z",
     "version": 1
    }
    ```
1.  Delete the demo workload:
    ```terminal
    $ oc delete ns hello-world
    ```
1.  Restore from the backup:
    ```terminal
    $ cat << EOF | oc create -f -
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
     name: hello-world
     namespace: openshift-adp
    spec:
     backupName: hello-world
    EOF
    ```
1.  Wait for the restore to finish:
    ```terminal
    $ watch "oc -n openshift-adp get restore hello-world -o json | jq .status"
    ```
    ```JSON title="Example output"
    {
     "completionTimestamp": "2022-09-07T22:25:47Z",
     "phase": "Completed",
     "progress": {
       "itemsRestored": 38,
       "totalItems": 38
     },
     "startTimestamp": "2022-09-07T22:25:28Z",
     "warnings": 9
    }
    ```
1.  Check that the workload is restored:
    ```terminal
    $ oc -n hello-world get pods
    ```
    ```terminal title="Example output"
    NAME                              READY   STATUS    RESTARTS   AGE
    hello-openshift-9f885f7c6-kdjpj   1/1     Running   0          90s
    ```
    ```terminal
    $ curl `oc get route/hello-openshift -n hello-world -o jsonpath='{.spec.host}'`
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```