{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling feature sets using the CLI {id="nodes-cluster-enabling-features-cli_{{ context }}"}

You can use the {{ oc_first }} to enable feature sets for all of the nodes in a cluster by editing the `FeatureGate` custom resource (CR). Completing this task enables non-default features in your cluster. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Edit the `FeatureGate` CR named `cluster`:
    ```terminal
    $ oc edit featuregate cluster
    ```

    :::warning

    Enabling the `TechPreviewNoUpgrade` feature set on your cluster cannot be undone and prevents minor version updates. You should not enable this feature set on production clusters.
    
    :::

    ```yaml title="Sample FeatureGate custom resource"
    apiVersion: config.openshift.io/v1
    kind: FeatureGate
    metadata:
      name: cluster
    # ...
    spec:
      featureSet: TechPreviewNoUpgrade
    ```

    where:

    `metadata.name`
    :   Specifies the name of the `FeatureGate` CR. This must be `cluster`.


    `spec.featureSet`
    :   Specifies the feature set that you want to enable:
        *   `TechPreviewNoUpgrade` enables specific Technology Preview features.

    After you save the changes, new machine configs are created, the machine config pools are updated, and scheduling on each node is disabled while the change is being applied.

**Verification**

{% include "./snippets/nodes-cluster-enabling-features-verification.md" %}