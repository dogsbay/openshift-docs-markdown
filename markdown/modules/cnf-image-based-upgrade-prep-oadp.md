{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ oadp_short }} ConfigMap objects for the image-based upgrade with {{ lcao }} {id="cnf-image-based-upgrade-prep-oadp_{{ context }}"}

Create your {{ oadp_short }} resources that are used to back up and restore your resources during the upgrade. {._abstract}

**Prerequisites**

*   You have generated a seed image from a compatible seed cluster.
*   You have created {{ oadp_short }} backup and restore resources.
*   You have created a separate partition on the target cluster for the container images that is shared between stateroots. For more information, see "Configuring a shared container partition for the image-based upgrade".
*   You have deployed a version of {{ lcao }} that is compatible with the version used with the seed image.
*   You have installed the {{ oadp_short }} Operator, the `DataProtectionApplication` CR, and its secret on the target cluster.
*   You have created an S3-compatible storage solution and a ready-to-use bucket with proper credentials configured. For more information, see "About installing {{ oadp_short }}".

**Procedure**

1.  Create the {{ oadp_short }} `Backup` and `Restore` CRs for platform artifacts in the same namespace where the {{ oadp_short }} Operator is installed, which is `openshift-adp`.
    1.  If the target cluster is managed by {{ rh_rhacm }}, add the following `PlatformBackupRestore.yaml` file for backing up and restoring {{ rh_rhacm }} artifacts:
        {% include "./snippets/ibu-PlatformBackupRestore.md" %}
    1.  If you created persistent volumes on your cluster through {{ lvms }}, add the following `PlatformBackupRestoreLvms.yaml` file for {{ lvms }} artifacts:
        {% include "./snippets/ibu-PlatformBackupRestoreLvms.md" %}
1.  If you need to restore applications after the upgrade, create the {{ oadp_short }} `Backup` and `Restore` CRs for your application in the `openshift-adp` namespace.
    1.  Create the {{ oadp_short }} CRs for cluster-scoped application artifacts in the `openshift-adp` namespace, for example:
        {% include "./snippets/ibu-ApplicationClusterScopedBackupRestore.md" %}
    1.  Create the {{ oadp_short }} CRs for your namespace-scoped application artifacts.
        When using LSO, see the following example {{ oadp_short }} CRs:

        {% include "./snippets/ibu-ApplicationBackupRestoreLso.md" %}

        When using {{ lvms }}, see the following example {{ oadp_short }} CRs:

        {% include "./snippets/ibu-ApplicationBackupRestoreLvms.md" %}


        :::important

        The same version of the applications must function on both the current and the target release of {{ product_title }}.
        
        :::

1.  Create the `ConfigMap` object for your {{ oadp_short }} CRs by running the following command:
    ```terminal
    $ oc create configmap oadp-cm-example --from-file=example-oadp-resources.yaml=<path_to_oadp_crs> -n openshift-adp
    ```
1.  Patch the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc patch imagebasedupgrades.lca.openshift.io upgrade \
      -p='{"spec": {"oadpContent": [{"name": "oadp-cm-example", "namespace": "openshift-adp"}]}}' \
      --type=merge -n openshift-lifecycle-agent
    ```