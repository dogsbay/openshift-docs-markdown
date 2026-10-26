{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the Data Protection Application {id="oadp-installing-dpa_{{ context }}"}

You install the Data Protection Application (DPA) by creating an instance of the `DataProtectionApplication` API. {._abstract}

**Prerequisites**

*   You must install the OADP Operator.
*   You must configure object storage as a backup location.
*   If you use snapshots to back up PVs, your cloud provider must support either a native snapshot API or Container Storage Interface (CSI) snapshots.
*   If the backup and snapshot locations use the same credentials, you must create a `Secret` with the default name for your storage provider: `cloud-credentials` for AWS, Multicloud Object Gateway (MCG), {{ rh_storage_first }} (ODF), {{ ibm_cloud_title }}, or KubeVirt; `cloud-credentials-azure` for Azure; or `cloud-credentials-gcp` for GCP.
*   If the backup and snapshot locations use different credentials, you must create two `Secrets`:
    *   `Secret` with a custom name for the backup location. You add this `Secret` to the `DataProtectionApplication` CR.
    *   `Secret` with another custom name for the snapshot location. You add this `Secret` to the `DataProtectionApplication` CR.


        :::note

        If you do not want to specify backup or snapshot locations during the installation, you can create a default `Secret` with an empty `credentials-velero` file. If there is no default `Secret`, the installation will fail.
        
        :::


**Procedure**

1.  Click **Ecosystem** → **Installed Operators** and select the OADP Operator.
1.  Under **Provided APIs**, click **Create instance** in the **DataProtectionApplication** box.
1.  Click **YAML View** and update the parameters of the `DataProtectionApplication` manifest for your storage provider.
1.  Click **Create**.

**Verification**

1.  Verify the installation by viewing the {{ oadp_first }} resources by running the following command:
    ```terminal
    $ oc get all -n openshift-adp
    ```
    ```
    NAME                                                     READY   STATUS    RESTARTS   AGE
    pod/oadp-operator-controller-manager-67d9494d47-6l8z8    2/2     Running   0          2m8s
    pod/node-agent-9cq4q                                     1/1     Running   0          94s
    pod/node-agent-m4lts                                     1/1     Running   0          94s
    pod/node-agent-pv4kr                                     1/1     Running   0          95s
    pod/velero-588db7f655-n842v                              1/1     Running   0          95s

    NAME                                                       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
    service/oadp-operator-controller-manager-metrics-service   ClusterIP   172.30.70.140    <none>        8443/TCP   2m8s
    service/openshift-adp-velero-metrics-svc                   ClusterIP   172.30.10.0      <none>        8085/TCP   8h

    NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    daemonset.apps/node-agent    3         3         3       3            3           <none>          96s

    NAME                                                READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/oadp-operator-controller-manager    1/1     1            1           2m9s
    deployment.apps/velero                              1/1     1            1           96s

    NAME                                                           DESIRED   CURRENT   READY   AGE
    replicaset.apps/oadp-operator-controller-manager-67d9494d47    1         1         1       2m9s
    replicaset.apps/velero-588db7f655                              1         1         1       96s
    ```
1.  Verify that the `DataProtectionApplication` (DPA) is reconciled by running the following command:
    ```terminal
    $ oc get dpa dpa-sample -n openshift-adp -o jsonpath='{.status}'
    ```
    ```yaml
    {"conditions":[{"lastTransitionTime":"2023-10-27T01:23:57Z","message":"Reconcile complete","reason":"Complete","status":"True","type":"Reconciled"}]}
    ```
1.  Verify the `type` is set to `Reconciled`.
1.  Verify the backup storage location and confirm that the `PHASE` is `Available` by running the following command:
    ```terminal
    $ oc get backupstoragelocations.velero.io -n openshift-adp
    ```
    ```yaml
    NAME           PHASE       LAST VALIDATED   AGE     DEFAULT
    dpa-sample-1   Available   1s               3d16h   true
    ```