{%- set _mod_docs_content_type = "PROCEDURE" %}

# Restoring the 3scale API Management operator, secrets, and APIManager {id="restoring-the-3scale-api-management-operator-secrets-and-apimanager_{{ context }}"}

Restore the Red&#160;Hat 3scale API Management operator resources, including the `Secret` and APIManager custom resources (CRs). This helps you to recover your 3scale operator configuration on the same or a different cluster. {._abstract}

**Prerequisites**

*   You backed up the 3scale operator.
*   You backed up the MySQL and Redis databases.
*   You are restoring the database on the same cluster, where it was backed up. 

    If you are restoring the operator to a different cluster that you backed up from, install and configure {{ oadp_short }} with `nodeAgent` enabled on the destination cluster. Ensure that the {{ oadp_short }} configuration is same as it was on the source cluster.

**Procedure**

1.  Delete the 3scale operator custom resource definitions (CRDs) along with the `threescale` namespace by running the following command:
    ```terminal
    $ oc delete project threescale
    ```
    ```terminal
    "threescale" project deleted successfully
    ```
1.  Create a YAML file with the following configuration to restore the 3scale operator:

```yaml
apiVersion: velero.io/v1
kind: Restore
metadata:
  name: operator-installation-restore
  namespace: openshift-adp
spec:
  backupName: operator-install-backup
  excludedResources:
  - nodes
  - events
  - events.events.k8s.io
  - backups.velero.io
  - restores.velero.io
  - resticrepositories.velero.io
  - csinodes.storage.k8s.io
  - volumeattachments.storage.k8s.io
  - backuprepositories.velero.io
  itemOperationTimeout: 4h0m0s
```

where:


`operator-install-backup`
:   Specifies the name of the backup to restore the 3scale operator.

1.  Restore the 3scale operator by running the following command:
    ```terminal
    $ oc create -f restore.yaml
    ```

```terminal
restore.velerio.io/operator-installation-restore created
```

1.  Manually create the `s3-credentials` `Secret` object by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    ---
    apiVersion: v1
    kind: Secret
    metadata:
          name: s3-credentials
          namespace: threescale
    stringData:
      AWS_ACCESS_KEY_ID: <ID_123456>
      AWS_SECRET_ACCESS_KEY: <ID_98765544>
      AWS_BUCKET: <mybucket.example.com>
      AWS_REGION: <us-east-1>
    type: Opaque
    EOF
    ```

    where:

    `<AWS_ACCESS_KEY_ID>`
    :   Specifies your AWS credentials ID.

    `<AWS_SECRET_ACCESS_KEY>`
    :   Specifies your AWS credentials KEY.

    `<mybucket.example.com>`
    :   Specifies your target bucket name.

    `<us-east-1>`
    :   Specifies the AWS region of your bucket.

1.  Scale down the 3scale operator by running the following command:
    ```terminal
    $ oc scale deployment threescale-operator-controller-manager-v2 --replicas=0 -n threescale
    ```
    ```terminal
    deployment.apps/threescale-operator-controller-manager-v2 scaled
    ```
1.  Create a YAML file with the following configuration to restore the `Secret`:
    ```yaml
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: operator-resources-secrets
      namespace: openshift-adp
    spec:
      backupName: operator-resources-secrets
      excludedResources:
      - nodes
      - events
      - events.events.k8s.io
      - backups.velero.io
      - restores.velero.io
      - resticrepositories.velero.io
      - csinodes.storage.k8s.io
      - volumeattachments.storage.k8s.io
      - backuprepositories.velero.io
      itemOperationTimeout: 4h0m0s
    ```

    where:

    `operator-resources-secrets`
    :   Specifies the name of the backup to restore the `Secret`.

1.  Restore the `Secret` by running the following command:
    ```terminal
    $ oc create -f restore-secrets.yaml
    ```
    ```terminal
    restore.velerio.io/operator-resources-secrets created
    ```
1.  Create a YAML file with the following configuration to restore APIManager:
    ```yaml title="Example restore-apimanager.yaml file"
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: operator-resources-apim
      namespace: openshift-adp
    spec:
      backupName: operator-resources-apim
      excludedResources:
      - nodes
      - events
      - events.events.k8s.io
      - backups.velero.io
      - restores.velero.io
      - resticrepositories.velero.io
      - csinodes.storage.k8s.io
      - volumeattachments.storage.k8s.io
      - backuprepositories.velero.io
      itemOperationTimeout: 4h0m0s
    ```

    where:

    `operator-resources-apim`
    :   Specifies the name of the backup to restore the APIManager.

    `excludedResources`
    :   Specifies the resources that you do not want to restore.

1.  Restore the APIManager by running the following command:
    ```terminal
    $ oc create -f restore-apimanager.yaml
    ```
    ```terminal
    restore.velerio.io/operator-resources-apim created
    ```
1.  Scale up the 3scale operator by running the following command:
    ```terminal
    $ oc scale deployment threescale-operator-controller-manager-v2 --replicas=1 -n threescale
    ```
    ```terminal
    deployment.apps/threescale-operator-controller-manager-v2 scaled
    ```