{%- set _mod_docs_content_type = "REFERENCE" %}
# DataProtectionApplication CR examples by storage provider {id="oadp-dpa-configuration-by-provider_{{ context }}"}

Configure the `DataProtectionApplication` (DPA) custom resource (CR) for your storage provider. The following examples show the DPA manifest for each supported provider with the relevant configuration parameters. {._abstract}

The following parameters are common across all provider configurations:


`namespace`
:   Specifies the default namespace for OADP which is `openshift-adp`. The namespace is a variable and is configurable.

`openshift`
:   Specifies that the `openshift` plugin is mandatory.

`resourceTimeout`
:   Specifies how many minutes to wait for several Velero resources such as Velero CRD availability, volumeSnapshot deletion, and backup repository availability, before timeout occurs. The default is 10m.

`nodeAgent`
:   Specifies the administrative agent that routes the administrative requests to servers.

`enable`
:   Set this value to `true` if you want to enable `nodeAgent` and perform File System Backup.

`uploaderType`
:   Specifies the uploader type. Enter `kopia` or `restic` as your uploader. You cannot change the selection after the installation. For the Built-in DataMover you must use Kopia. The `nodeAgent` deploys a daemon set, which means that the `nodeAgent` pods run on each working node. You can configure File System Backup by adding `spec.defaultVolumesToFsBackup: true` to the `Backup` CR.

`nodeSelector`
:   Specifies the nodes on which Kopia or Restic are available. By default, Kopia or Restic run on all nodes.

`bucket`
:   Specifies a bucket as the backup storage location. If the bucket is not a dedicated bucket for Velero backups, you must specify a prefix.

`prefix`
:   Specifies a prefix for Velero backups, for example, `velero`, if the bucket is used for multiple purposes.

The following sections provide DPA configuration examples and provider-specific parameters for each supported storage provider.


{{ aws_first }}
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
      configuration:
        velero:
          defaultPlugins:
            - openshift
            - aws
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - name: default
          velero:
            provider: aws
            default: true
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
            config:
              region: <region>
              profile: "default"
              s3ForcePathStyle: "true"
              s3Url: <s3_url>
            credential:
              key: cloud
              name: cloud-credentials
      snapshotLocations:
        - name: default
          velero:
            provider: aws
            config:
              region: <region>
              profile: "default"
            credential:
              key: cloud
              name: cloud-credentials
    ```

`s3ForcePathStyle`
:   Specifies whether to force path style URLs for S3 objects (Boolean). Not Required for AWS S3. Required only for S3 compatible storage.

`s3Url`
:   Specifies the URL of the object store that you are using to store backups. Not required for AWS S3. Required only for S3 compatible storage.

`name`
:   Specifies the name of the `Secret` object that you created. If you do not specify this value, the default name, `cloud-credentials`, is used. If you specify a custom name, the custom name is used for the backup location.

`snapshotLocations`
:   Specifies a snapshot location, unless you use CSI snapshots or a File System Backup (FSB) to back up PVs.

`region`
:   Specifies that the snapshot location must be in the same region as the PVs.


{{ ibm_cloud_title }}
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      namespace: openshift-adp
      name: <dpa_name>
    spec:
      configuration:
        velero:
          defaultPlugins:
          - openshift
          - aws
          - csi
      backupLocations:
        - velero:
            provider: aws
            default: true
            objectStorage:
              bucket: <bucket_name>
              prefix: velero
            config:
              insecureSkipTLSVerify: 'true'
              profile: default
              region: <region_name>
              s3ForcePathStyle: 'true'
              s3Url: <s3_url>
            credential:
              key: cloud
              name: cloud-credentials
    ```

`provider`
:   Specifies that the provider is `aws` when you use {{ ibm_cloud_title }} as a backup storage location.

`bucket`
:   Specifies the {{ ibm_cloud_object_storage }} bucket name.

`region`
:   Specifies the COS region name, for example, `eu-gb`.

`s3Url`
:   Specifies the S3 URL of the COS bucket. For example, `http://s3.eu-gb.cloud-object-storage.appdomain.cloud`. Here, `eu-gb` is the region name. Replace the region name according to your bucket region.

`name`
:   Specifies the name of the secret you created by using the access key and the secret access key from the `HMAC` credentials.


{{ azure_first }}
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
      configuration:
        velero:
          defaultPlugins:
            - azure
            - openshift
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - velero:
            config:
              resourceGroup: <azure_resource_group>
              storageAccount: <azure_storage_account_id>
              subscriptionId: <azure_subscription_id>
            credential:
              key: cloud
              name: cloud-credentials-azure
            provider: azure
            default: true
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
      snapshotLocations:
        - velero:
            config:
              resourceGroup: <azure_resource_group>
              subscriptionId: <azure_subscription_id>
              incremental: "true"
            name: default
            provider: azure
            credential:
              key: cloud
              name: cloud-credentials-azure
    ```

`resourceGroup`
:   Specifies the Azure resource group.

`storageAccount`
:   Specifies the Azure storage account ID.

`subscriptionId`
:   Specifies the Azure subscription ID.

`name`
:   Specifies the name of the `Secret` object. If you do not specify this value, the default name, `cloud-credentials-azure`, is used. If you specify a custom name, the custom name is used for the backup location.

`snapshotLocations`
:   Specifies the snapshot location. You do not need to specify a snapshot location if you use CSI snapshots or Restic to back up PVs.


{{ gcp_first }}
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: <OPERATOR_INSTALL_NS>
    spec:
      configuration:
        velero:
          defaultPlugins:
            - gcp
            - openshift
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - velero:
            provider: gcp
            default: true
            credential:
              key: cloud
              name: cloud-credentials-gcp
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
      snapshotLocations:
        - velero:
            provider: gcp
            default: true
            config:
              project: <project>
              snapshotLocation: us-west1
            credential:
              key: cloud
              name: cloud-credentials-gcp
      backupImages: true
    ```

`key`
:   Specifies the secret key that contains credentials. For Google workload identity federation cloud authentication use `service_account.json`.

`name`
:   Specifies the secret name that contains credentials. If you do not specify this value, the default name, `cloud-credentials-gcp`, is used.

`snapshotLocations`
:   Specifies a snapshot location, unless you use CSI snapshots or Restic to back up PVs.

`snapshotLocation`
:   Specifies that the snapshot location must be in the same region as the PVs.

`backupImages`
:   Specifies that Google workload identity federation supports internal image backup. Set this field to `false` if you do not want to use image backup.


MCG (Multicloud Object Gateway)
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
      configuration:
        velero:
          defaultPlugins:
            - aws
            - openshift
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - velero:
            config:
              profile: "default"
              region: <region_name>
              s3Url: <url>
              insecureSkipTLSVerify: "true"
              s3ForcePathStyle: "true"
            provider: aws
            default: true
            credential:
              key: cloud
              name: cloud-credentials
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```

`aws`
:   Specifies that an object store plugin corresponding to your storage locations is required. For all S3 providers, the required plugin is `aws`. For {{ azure_short }} and {{ gcp_short }} object stores, the `azure` or `gcp` plugin is required.

`region`
:   Specifies the region, following the naming convention of the documentation of your object storage server.

`s3Url`
:   Specifies the URL of the S3 endpoint.

`name`
:   Specifies the name of the `Secret` object that you created. If you do not specify this value, the default name, `cloud-credentials`, is used. If you specify a custom name, the custom name is used for the backup location.


{{ rh_storage_first }} (ODF)
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
      configuration:
        velero:
          defaultPlugins:
            - aws
            - kubevirt
            - csi
            - openshift
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - velero:
            provider: aws
            default: true
            credential:
              key: cloud
              name: <default_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```

`aws`
:   Specifies that an object store plugin corresponding to your storage locations is required. For all S3 providers, the required plugin is `aws`. For {{ azure_short }} and {{ gcp_short }} object stores, the `azure` or `gcp` plugin is required.

`kubevirt`
:   Optional: The `kubevirt` plugin is used with {{ VirtProductName }}.

`csi`
:   Specifies the `csi` default plugin if you use CSI snapshots to back up PVs. The `csi` plugin uses the [Velero CSI beta snapshot APIs](https://{{ velero_domain }}/docs/main/csi/). You do not need to configure a snapshot location.

`provider`
:   Specifies the backup provider.

`name`
:   Specifies the correct default name for the `Secret`, for example, `cloud-credentials-gcp`, if you use a default plugin for the backup provider. If specifying a custom name, then the custom name is used for the backup location. If you do not specify a `Secret` name, the default name is used.


KubeVirt ({{ VirtProductName }})
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
      configuration:
        velero:
          defaultPlugins:
            - kubevirt
            - gcp
            - csi
            - openshift
          resourceTimeout: 10m
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            nodeSelector: <node_selector>
      backupLocations:
        - velero:
            provider: gcp
            default: true
            credential:
              key: cloud
              name: <default_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```

`kubevirt`
:   Specifies that the `kubevirt` plugin is mandatory for {{ VirtProductName }}.

`gcp`
:   Specifies the plugin for the backup provider, for example, `gcp`, if it exists.

`csi`
:   Specifies that the `csi` plugin is mandatory for backing up PVs with CSI snapshots. The `csi` plugin uses the [Velero CSI beta snapshot APIs](https://{{ velero_domain }}/docs/main/csi/). You do not need to configure a snapshot location.

`provider`
:   Specifies the backup provider.

`name`
:   Specifies the correct default name for the `Secret`, for example, `cloud-credentials-gcp`, if you use a default plugin for the backup provider. If specifying a custom name, then the custom name is used for the backup location. If you do not specify a `Secret` name, the default name is used.