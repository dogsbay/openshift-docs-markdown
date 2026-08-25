{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparation for SiteConfig CRs to ClusterInstance CRs migration {id="ztp-preparing-migrate-clusterinstance_{{ context }}"}

To prepare for the migration from `SiteConfig` CRs to `ClusterInstance` CRs, you must complete the following steps:

*   Delete the ArgoCD application in the target cluster.
*   Prepare the git repository by creating a directory for migrated clusters with the `ClusterInstance` CRs and associated resources.
*   Optionally, use the `siteconfig-converter` tool to convert existing `SiteConfig` CRs to `ClusterInstance` CRs at scale.