{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating automated etcd backups {id="creating-automated-etcd-backups_{{ context }}"}

You can enable automated etcd backups for your cluster by applying a `FeatureGate` and backup custom resources (CRs). {._abstract}

{%- set FeatureName = "Automating etcd backups" %}
{% include "./snippets/technology-preview.md" %}


:::warning

Enabling the `TechPreviewNoUpgrade` feature set on your cluster prevents minor version updates. The `TechPreviewNoUpgrade` feature set cannot be disabled. Do not enable this feature set on production clusters.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the {{ oc_first }}.

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
1.  Apply the CR by running the following command:
    ```terminal
    $ oc apply -f enable-tech-preview-no-upgrade.yaml
    ```

    Applying the `FeatureGate` enables the automated backup APIs. It takes time for the related APIs to become available.
1.  Verify that the custom resource definition (CRD) was created by running the following command:
    ```terminal
    $ oc get crd | grep backup
    ```
    ```terminal title="Example output"
    backups.config.openshift.io 2023-10-25T13:32:43Z
    etcdbackups.operator.openshift.io 2023-10-25T13:32:04Z
    ```