{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up an application using {{ oadp_short }} and {{ odf_short }} {id="oadp-usecase-backup-odf_{{ context }}"}

In this use case, you back up an application by using {{ oadp_short }} and store the backup in an object storage provided by {{ odf_first }}. {._abstract}

*   You create an object bucket claim (OBC) to configure the backup storage location. You use {{ odf_short }} to configure an Amazon S3-compatible object storage bucket. {{ odf_short }} provides MultiCloud Object Gateway (NooBaa MCG) and Ceph Object Gateway, also known as RADOS Gateway (RGW), object storage service. In this use case, you use NooBaa MCG as the backup storage location.
*   You use the NooBaa MCG service with {{ oadp_short }} by using the `aws` provider plugin.
*   You configure the Data Protection Application (DPA) with the backup storage location (BSL).
*   You create a backup custom resource (CR) and specify the application namespace to back up.
*   You create and verify the backup.

**Prerequisites**

*   You installed the {{ oadp_short }} Operator.
*   You installed the {{ odf_short }} Operator.
*   You have an application with a database running in a separate namespace.

**Procedure**

1.  Create an OBC manifest file to request a NooBaa MCG bucket as shown in the following example:
    ```yaml
    apiVersion: objectbucket.io/v1alpha1
    kind: ObjectBucketClaim
    metadata:
      name: test-obc
      namespace: openshift-adp
    spec:
      storageClassName: openshift-storage.noobaa.io
      generateBucketName: test-backup-bucket
    ```

    where:

    `test-obc`
    :   Specifies the name of the object bucket claim.

    `test-backup-bucket`
    :   Specifies the name of the bucket.

1.  Create the OBC by running the following command:
    ```terminal
    $ oc create -f <obc_file_name>
    ```

    where:

    `<obc_file_name>`
    :   Specifies the file name of the object bucket claim manifest.

1.  When you create an OBC, {{ odf_short }} creates a `secret` and a `config map` with the same name as the object bucket claim. The `secret` has the bucket credentials, and the `config map` has information to access the bucket. To get the bucket name and bucket host from the generated config map, run the following command:
    ```terminal
    $ oc extract --to=- cm/test-obc
    ```

    `test-obc` is the name of the OBC.
    ```terminal title="Example output"
    # BUCKET_NAME
    backup-c20...41fd
    # BUCKET_PORT
    443
    # BUCKET_REGION

    # BUCKET_SUBREGION

    # BUCKET_HOST
    s3.openshift-storage.svc
    ```
1.  To get the bucket credentials from the generated `secret`, run the following command:
    ```terminal
    $ oc extract --to=- secret/test-obc
    ```
    ```terminal title="Example output"
    # AWS_ACCESS_KEY_ID
    ebYR....xLNMc
    # AWS_SECRET_ACCESS_KEY
    YXf...+NaCkdyC3QPym
    ```
1.  Get the public URL for the S3 endpoint from the s3 route in the `openshift-storage` namespace by running the following command:
    ```terminal
    $ oc get route s3 -n openshift-storage
    ```
1.  Create a `cloud-credentials` file with the object bucket credentials as shown in the following command:
    ```terminal
    [default]
    aws_access_key_id=<AWS_ACCESS_KEY_ID>
    aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
    ```
1.  Create the `cloud-credentials` secret with the `cloud-credentials` file content as shown in the following command:
    ```terminal
    $ oc create secret generic \
      cloud-credentials \
      -n openshift-adp \
      --from-file cloud=cloud-credentials
    ```
1.  Configure the Data Protection Application (DPA) as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: oadp-backup
      namespace: openshift-adp
    spec:
      configuration:
        nodeAgent:
          enable: true
          uploaderType: kopia
        velero:
          defaultPlugins:
            - aws
            - openshift
            - csi
          defaultSnapshotMoveData: true
      backupLocations:
        - velero:
            config:
              profile: "default"
              region: noobaa
              s3Url: https://s3.openshift-storage.svc
              s3ForcePathStyle: "true"
              insecureSkipTLSVerify: "true"
            provider: aws
            default: true
            credential:
              key: cloud
              name:  cloud-credentials
            objectStorage:
              bucket: <bucket_name>
              prefix: oadp
    ```

    where:

    `defaultSnapshotMoveData`
    :   Set to `true` to use the {{ oadp_short }} Data Mover to enable movement of Container Storage Interface (CSI) snapshots to a remote object storage.

    `s3Url`
    :   Specifies the S3 URL of {{ odf_short }} storage.

    `<bucket_name>`
    :   Specifies the bucket name.

1.  Create the DPA by running the following command:
    ```terminal
    $ oc apply -f <dpa_filename>
    ```
1.  Verify that the DPA is created successfully by running the following command. In the example output, you can see the `status` object has `type` field set to `Reconciled`. This means, the DPA is successfully created.
    ```terminal
    $ oc get dpa -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    items:
    - apiVersion: oadp.openshift.io/v1alpha1
      kind: DataProtectionApplication
      metadata:
        namespace: openshift-adp
        #...#
      spec:
        backupLocations:
        - velero:
            config:
              #...#
      status:
        conditions:
        - lastTransitionTime: "20....9:54:02Z"
          message: Reconcile complete
          reason: Complete
          status: "True"
          type: Reconciled
    kind: List
    metadata:
      resourceVersion: ""
    ```
1.  Verify that the backup storage location (BSL) is available by running the following command:
    ```terminal
    $ oc get backupstoragelocations.velero.io -n openshift-adp
    ```
    ```terminal title="Example output"
    NAME           PHASE       LAST VALIDATED   AGE   DEFAULT
    dpa-sample-1   Available   3s               15s   true
    ```
1.  Configure a backup CR as shown in the following example:
    ```yaml
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
      name: test-backup
      namespace: openshift-adp
    spec:
      includedNamespaces:
      - <application_namespace>
    ```

    where:

    `<application_namespace>`
    :   Specifies the namespace for the application to back up.

1.  Create the backup CR by running the following command:
    ```terminal
    $ oc apply -f <backup_cr_filename>
    ```

**Verification**

*   Verify that the backup object is in the `Completed` phase by running the following command. For more details, see the example output.
    ```terminal
    $ oc describe backup test-backup -n openshift-adp
    ```
    ```terminal title="Example output"
    Name:         test-backup
    Namespace:    openshift-adp
    # ....#
    Status:
      Backup Item Operations Attempted:  1
      Backup Item Operations Completed:  1
      Completion Timestamp:              2024-09-25T10:17:01Z
      Expiration:                        2024-10-25T10:16:31Z
      Format Version:                    1.1.0
      Hook Status:
      Phase:  Completed
      Progress:
        Items Backed Up:  34
        Total Items:      34
      Start Timestamp:    2024-09-25T10:16:31Z
      Version:            1
    Events:               <none>
    ```