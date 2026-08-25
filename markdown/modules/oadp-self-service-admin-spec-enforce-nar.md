{%- set _mod_docs_content_type = "REFERENCE" %}
# Self-Service administrator spec enforcement for NAR {id="oadp-self-service-admin-spec-enforce-nar_{{ context }}"}

Enforce specific fields in `NonAdminRestore` (NAR) custom resource (CR) to control timeout settings, resource policies, label selectors, persistent volume restoration, and node port configurations used by namespace administrators. This helps you maintain restore standards. {._abstract}

You can enforce the following fields for a NAR CR:

*   `itemOperationTimeout`
*   `uploaderConfig`
*   `includedResources`
*   `excludedResources`
*   `restoreStatus`
*   `includeClusterResources`
*   `labelSelector`
*   `orLabelSelectors`
*   `restorePVs`
*   `preserveNodePorts`