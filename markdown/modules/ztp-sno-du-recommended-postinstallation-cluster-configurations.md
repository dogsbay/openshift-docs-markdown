{%- set _mod_docs_content_type = "CONCEPT" %}
# Recommended postinstallation cluster configurations {id="ztp-sno-post-install-time-cluster-config_{{ context }}"}

When the cluster installation is complete, the ZTP pipeline applies the following custom resources (CRs) that are required to run DU workloads. {._abstract}


:::note

In {{ ztp }} v4.10 and earlier, you configure UEFI secure boot with a `MachineConfig` CR. This is no longer required in {{ ztp }} v4.11 and later. In v4.11, you configure UEFI secure boot for {{ sno }} clusters by updating the `spec.nodes[].bootMode` field in the `ClusterInstance` CR that you use to install the cluster. For more information, see "Deploying a managed cluster with ClusterInstance and {{ ztp }}".

:::