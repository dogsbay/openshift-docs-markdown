{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating automated etcd backups {id="creating-automated-etcd-backups_{{ context }}"}

Enable automated etcd backups so your cluster can create single and recurring backups through the Backup API. {._abstract}

The automated backup feature for etcd supports both recurring and single backups. Recurring backups create a cron job that starts a single backup each time the job triggers.

{%- set FeatureName = "Automating etcd backups" %}
{% include "./snippets/technology-preview.md" %}


:::warning

Enabling the `TechPreviewNoUpgrade` feature set on your cluster prevents minor version updates. The `TechPreviewNoUpgrade` feature set cannot be disabled. Do not enable this feature set on production clusters.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the OpenShift CLI (`oc`).

**Procedure**

1.  Create a `FeatureGate` custom resource (CR) file named `enable-tech-preview-no-upgrade.yaml` with the following contents:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: FeatureGate
    metadata:
      name: cluster
    spec:
      featureSet: TechPreviewNoUpgrade
    ```
1.  Apply the CR and enable automated backups:
    ```terminal
    $ oc apply -f enable-tech-preview-no-upgrade.yaml
    ```
1.  It takes time to enable the related APIs. Verify the creation of the custom resource definition (CRD) by running the following command:
    ```terminal
    $ oc get crd | grep backup
    ```
    ```terminal title="Example output"
    backups.config.openshift.io 2023-10-25T13:32:43Z
    etcdbackups.operator.openshift.io 2023-10-25T13:32:04Z
    ```