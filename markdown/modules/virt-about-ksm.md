{%- set _mod_docs_content_type = "CONCEPT" %}
# About using {{ VirtProductName }} to activate KSM {id="virt-about-ksm_{{ context }}"}

You can configure {{ VirtProductName }} to activate kernel samepage merging (KSM) when nodes experience memory overload. {._abstract}

## Configuration methods {id="virt-ksm-configuration-methods"}

You can enable or disable the KSM activation feature for all nodes by using the {{ product_title }} web console or by editing the `HyperConverged` custom resource (CR). The `HyperConverged` CR supports more granular configuration.


CR configuration
:   <a name="virt-ksm-cr-configuration"></a>

    You can configure the KSM activation feature by editing the `spec.ksmConfiguration` stanza of the `HyperConverged` CR.
    *   You enable the feature and configure settings by editing the `ksmConfiguration` stanza.
    *   You disable the feature by deleting the `ksmConfiguration` stanza.
    *   You can allow {{ VirtProductName }} to enable KSM on only a subset of nodes by adding node selection syntax to the `ksmConfiguration.nodeLabelSelector` field.

    :::note


    Even if the KSM activation feature is disabled in {{ VirtProductName }}, an administrator can still enable KSM on nodes that support it.
    
    :::


## KSM node labels {id="virt-ksm-node-labels"}

{{ VirtProductName }} identifies nodes that are configured to support KSM and applies the following node labels:


`kubevirt.io/ksm-handler-managed: "false"`
:   This label is set to `"true"` when {{ VirtProductName }} activates KSM on a node that is experiencing memory overload. This label is not set to `"true"` if an administrator activates KSM.


`kubevirt.io/ksm-enabled: "false"`
:   This label is set to `"true"` when KSM is activated on a node, even if {{ VirtProductName }} did not activate KSM.

These labels are not applied to nodes that do not support KSM.