{%- set _mod_docs_content_type = "CONCEPT" %}
# Recommended cluster install manifests {id="ztp-sno-install-time-cluster-config_{{ context }}"}

The ZTP pipeline applies the following custom resources (CRs) during cluster installation. These configuration CRs ensure that the cluster meets the feature and performance requirements necessary for running a vDU application. {._abstract}


:::note

When using the {{ ztp }} plugin and `ClusterInstance` CRs for cluster deployment, the following `MachineConfig` CRs are included by default.

:::


Use the `ClusterInstance` `extraManifestRefs` to alter the CRs that are included by default. For more information, see "Advanced managed cluster configuration with ClusterInstance CRs".