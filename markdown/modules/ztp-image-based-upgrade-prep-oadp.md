{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ oadp_short }} resources for the image-based upgrade with {{ ztp }} {id="ztp-image-based-upgrade-prep-oadp_{{ context }}"}

Prepare your {{ oadp_short }} resources to restore your application after an upgrade. {._abstract}

**Prerequisites**

*   You have provisioned one or more managed clusters with {{ ztp }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have generated a seed image from a compatible seed cluster.
*   You have created a separate partition on the target cluster for the container images that is shared between stateroots. For more information, see "Configuring a shared container partition between ostree stateroots when using {{ ztp }}".
*   You have deployed a version of {{ lcao }} that is compatible with the version used with the seed image.
*   You have installed the {{ oadp_short }} Operator, the `DataProtectionApplication` CR, and its secret on the target cluster.
*   You have created an S3-compatible storage solution and a ready-to-use bucket with proper credentials configured. For more information, see "Installing and configuring the {{ oadp_short }} Operator with {{ ztp }}".
*   The `openshift-adp` namespace for the OADP `ConfigMap` object must exist on all managed clusters and the hub for the OADP `ConfigMap` to be generated and copied to the clusters.

**Procedure**

1.  Ensure that your Git repository that you use with the ArgoCD policies application contains the following directory structure:
    ```terminal
    ├── source-crs/
    │   ├── ibu/
    │   │    ├── ImageBasedUpgrade.yaml
    │   │    ├── PlatformBackupRestore.yaml
    │   │    ├── PlatformBackupRestoreLvms.yaml
    │   │    ├── PlatformBackupRestoreWithIBGU.yaml
    ├── ...
    ├── kustomization.yaml
    ```

    The `source-crs/ibu/PlatformBackupRestoreWithIBGU.yaml` file is provided in the ZTP container image.

    **PlatformBackupRestoreWithIBGU.yaml**

    {% include "./snippets/ibu-PlatformBackupRestoreWithIBGU.md" %}


    :::note

    If you perform the image-based upgrade directly on managed clusters, use the `PlatformBackupRestore.yaml` file.
    
    :::


    If you use {{ lvms }} to create persistent volumes, you can use the `source-crs/ibu/PlatformBackupRestoreLvms.yaml` provided in the ZTP container image to back up your {{ lvms }} resources.

    **PlatformBackupRestoreLvms.yaml**

    {% include "./snippets/ibu-PlatformBackupRestoreLvms.md" %}
1.  If you need to restore applications after the upgrade, create the {{ oadp_short }} `Backup` and `Restore` CRs for your application in the `openshift-adp` namespace:
    1.  Create the {{ oadp_short }} CRs for cluster-scoped application artifacts in the `openshift-adp` namespace:

        **Example {{ oadp_short }} CRs for cluster-scoped application artifacts for LSO and {{ LVMS }}**

        {% include "./snippets/ibu-ApplicationClusterScopedBackupRestore.md" %}
    1.  Create the {{ oadp_short }} CRs for your namespace-scoped application artifacts in the `source-crs/custom-crs` directory:

        **Example {{ oadp_short }} CRs namespace-scoped application artifacts when LSO is used**

        {% include "./snippets/ibu-ApplicationBackupRestoreLso.md" %}

        **Example {{ oadp_short }} CRs namespace-scoped application artifacts when {{ lvms }} is used**

        {% include "./snippets/ibu-ApplicationBackupRestoreLvms.md" %}


        :::important

        The same version of the applications must function on both the current and the target release of {{ product_title }}.
        
        :::

1.  Create a `kustomization.yaml` with the following content:
    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization

    configMapGenerator:
    - files:
      - source-crs/ibu/PlatformBackupRestoreWithIBGU.yaml
      #- source-crs/custom-crs/ApplicationClusterScopedBackupRestore.yaml
      #- source-crs/custom-crs/ApplicationApplicationBackupRestoreLso.yaml
      name: oadp-cm
      namespace: openshift-adp
    generatorOptions:
      disableNameSuffixHash: true
    ```

    where:

    `configMapGenerator`
    :   Creates the `oadp-cm` `ConfigMap` object on the hub cluster with `Backup` and `Restore` CRs.


`namespace: openshift-adp`
:   The namespace must exist on all managed clusters and the hub for the OADP `ConfigMap` to be generated and copied to the clusters.

1.  Push the changes to your Git repository.