{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OADP Operator and providing the IAM role {id="installing-oadp-rosa-sts_{{ context }}"}

Install {{ oadp_first }} on clusters with {{ aws_short }} {{ sts_short }}. AWS Security Token Service (AWS STS) is a global web service that provides short-term credentials for IAM or federated users. {{ product_title }} with {{ sts_short }} is the recommended credential mode. {._abstract}


:::important

Restic is unsupported.

Kopia file system backup (FSB) is supported when backing up file systems that do not support Container Storage Interface (CSI) snapshots.

Example file systems include the following:

*   Amazon Elastic File System (EFS)
*   Network File System (NFS)
*   `emptyDir` volumes
*   Local volumes

{% if not (openshift_rosa or openshift_rosa_hcp) %}
For backing up volumes, OADP on ROSA with {{ aws_short }} {{ sts_short }} recommends native snapshots and Container Storage Interface (CSI) snapshots. Data Mover backups are supported, but can be slower than native snapshots.

In an Amazon ROSA cluster that uses STS authentication, restoring backed-up data in a different {{ aws_short }} region is not supported.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
For backing up volumes on clusters with {{ aws_short }} {{ sts_short }}, OADP recommends native snapshots and Container Storage Interface (CSI) snapshots. Data Mover backups are supported, but can be slower than native snapshots.

In a {{ product_title }} cluster that uses STS authentication, restoring backed-up data in a different {{ aws_short }} region is not supported.
{% endif %}

:::


**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   An {{ product_title }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   A {{ product_title }}
{%- endif %}
cluster with the required access and tokens. For instructions, see the previous procedure _Preparing AWS credentials for OADP_. If you plan to use two different clusters for backing up and restoring, you must prepare {{ aws_short }} credentials, including `ROLE_ARN`, for each cluster.

**Procedure**

1.  Create
    {%- if not (openshift_rosa or openshift_rosa_hcp) %}
    an {{ product_title }}
    {%- endif %}
    {%- if openshift_rosa or openshift_rosa_hcp %}
    a {{ product_title }}
    {%- endif %}
    secret from your {{ aws_short }} token file by entering the following commands:
    1.  Create the credentials file:
        ```terminal
        $ cat <<EOF > ${SCRATCH}/credentials
          [default]
          role_arn = ${ROLE_ARN}
          web_identity_token_file = /var/run/secrets/openshift/serviceaccount/token
          region = <aws_region>
        EOF
        ```

Replace `<aws_region>` with the AWS region to use for the {{ sts_short }} endpoint.

1.  Create a namespace for OADP:
    ```terminal
    $ oc create namespace openshift-adp
    ```
1.  Create the {{ product_title }} secret:
    ```terminal
    $ oc -n openshift-adp create secret generic cloud-credentials \
      --from-file=${SCRATCH}/credentials
    ```

    :::note

    In {{ product_title }} versions 4.15 and later, the OADP Operator supports a new standardized {{ sts_short }} workflow through the Operator Lifecycle Manager (OLM) and Cloud Credentials Operator (CCO). In this workflow, you do not need to create the above secret, you only need to supply the role ARN during the installation of OLM-managed operators using the {{ product_title }} web console, for more information see _Installing from software catalog using the web console_.

    The preceding secret is created automatically by CCO.
    
    :::

    1.  Install the OADP Operator:
1.  In the {{ product_title }} web console, browse to **Ecosystem** → **Software Catalog**.
1.  Search for the **OADP Operator**.
1.  In the **role_ARN** field, paste the role_arn that you created previously and click **Install**.
    1.  Create {{ aws_short }} cloud storage using your {{ aws_short }} credentials by entering the following command:
        ```terminal
        $ cat << EOF | oc create -f -
          apiVersion: oadp.openshift.io/v1alpha1
          kind: CloudStorage
          metadata:
            name: ${CLUSTER_NAME}-oadp
            namespace: openshift-adp
          spec:
            creationSecret:
              key: credentials
              name: cloud-credentials
            enableSharedConfig: true
            name: ${CLUSTER_NAME}-oadp
            provider: aws
            region: $REGION
        EOF
        ```
    1.  Check your application’s storage default storage class by entering the following command:
        ```terminal
        $ oc get pvc -n <namespace>
        ```

        ```terminal
        NAME     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
        applog   Bound    pvc-351791ae-b6ab-4e8b-88a4-30f73caf5ef8   1Gi        RWO            gp3-csi        4d19h
        mysql    Bound    pvc-16b8e009-a20a-4379-accc-bc81fedd0621   1Gi        RWO            gp3-csi        4d19h
        ```
    1.  Get the storage class by running the following command:
        ```terminal
        $ oc get storageclass
        ```

        ```terminal
        NAME                PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
        gp2                 kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   true                   4d21h
        gp2-csi             ebs.csi.aws.com         Delete          WaitForFirstConsumer   true                   4d21h
        gp3                 ebs.csi.aws.com         Delete          WaitForFirstConsumer   true                   4d21h
        gp3-csi (default)   ebs.csi.aws.com         Delete          WaitForFirstConsumer   true                   4d21h
        ```

        :::note

        The following storage classes will work:

        *   gp3-csi
        *   gp2-csi
        *   gp3
        *   gp2
        
        :::


        If the application or applications that are being backed up are all using persistent volumes (PVs) with Container Storage Interface (CSI), it is advisable to include the CSI plugin in the OADP DPA configuration.
    1.  Create the `DataProtectionApplication` resource to configure the connection to the storage where the backups and volume snapshots are stored:
1.  If you are using only CSI volumes, deploy a Data Protection Application by entering the following command:
    ```terminal
    $ cat << EOF | oc create -f -
      apiVersion: oadp.openshift.io/v1alpha1
      kind: DataProtectionApplication
      metadata:
        name: ${CLUSTER_NAME}-dpa
        namespace: openshift-adp
      spec:
        backupImages: true
        features:
          dataMover:
            enable: false
        backupLocations:
        - bucket:
            cloudStorageRef:
              name: ${CLUSTER_NAME}-oadp
            credential:
              key: credentials
              name: cloud-credentials
            prefix: velero
            default: true
            config:
              region: ${REGION}
        configuration:
          velero:
            defaultPlugins:
            - openshift
            - aws
            - csi
          nodeAgent:
            enable: false
            uploaderType: kopia
    EOF
    ```

    where:
{% if not (openshift_rosa or openshift_rosa_hcp) %}

    `backupImages`
    :   ROSA supports internal image backup. Set this field to `false` if you do not want to use image backup.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}

    `backupImages`
    :   {{ product_title }} supports internal image backup. Set this field to `false` if you do not want to use image backup.
{%- endif %}

    `nodeAgent`
    :   See the important note regarding the `nodeAgent` attribute at the end of this procedure.

    `uploaderType`
    :   Specifies the type of uploader. The built-in Data Mover uses Kopia as the default uploader mechanism regardless of the value of the `uploaderType` field.

1.  If you are using CSI or non-CSI volumes, deploy a Data Protection Application by entering the following command:
    ```terminal
    $ cat << EOF | oc create -f -
      apiVersion: oadp.openshift.io/v1alpha1
      kind: DataProtectionApplication
      metadata:
        name: ${CLUSTER_NAME}-dpa
        namespace: openshift-adp
      spec:
        backupImages: true
        backupLocations:
        - bucket:
            cloudStorageRef:
              name: ${CLUSTER_NAME}-oadp
            credential:
              key: credentials
              name: cloud-credentials
            prefix: velero
            default: true
            config:
              region: ${REGION}
        configuration:
          velero:
            defaultPlugins:
            - openshift
            - aws
          nodeAgent:
            enable: false
            uploaderType: restic
        snapshotLocations:
          - velero:
              config:
                credentialsFile: /tmp/credentials/openshift-adp/cloud-credentials-credentials
                enableSharedConfig: "true"
                profile: default
                region: ${REGION}
              provider: aws
    EOF
    ```

    where:
{% if not (openshift_rosa or openshift_rosa_hcp) %}

    `backupImages`
    :   ROSA supports internal image backup. Set this field to `false` if you do not want to use image backup.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}

    `backupImages`
    :   {{ product_title }} supports internal image backup. Set this field to `false` if you do not want to use image backup.
{%- endif %}

    `nodeAgent`
    :   See the important note regarding the `nodeAgent` attribute at the end of this procedure.

    `credentialsFile`
    :   Specifies the mounted location of the bucket credential on the pod.

    `enableSharedConfig`
    :   Specifies whether the `snapshotLocations` can share or reuse the credential defined for the bucket.

    `profile`
    :   Specifies the profile name set in the {{ aws_short }} credentials file.

    `region`
    :   Specifies your {{ aws_short }} region. This must be the same as the cluster region.
    You are now ready to back up and restore {{ product_title }} applications, as described in _Backing up applications_.


:::important

The `enable` parameter of `restic` is set to `false` in this configuration, because OADP does not support Restic in
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
ROSA
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
environments.

:::


If you want to use two different clusters for backing up and restoring, the two clusters must have the same {{ aws_short }} S3 storage names in both the cloud storage CR and the OADP `DataProtectionApplication` configuration.