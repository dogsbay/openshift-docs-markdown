{%- set _mod_docs_content_type = "CONCEPT" %}
# An introduction to namespaced SriovNetwork resources {id="introduction-to-namespaced-sriovnetwork-resources_{{ context }}"}

SR-IOV networks can be created and managed directly within application namespaces. This capability provides application owners with fine-grained control over network configurations, simplifying their workflow. {._abstract}

This approach offers several key advantages that enhance the user experience:

*   Increased Autonomy and Control: Application owners gain direct control over their network configurations, eliminating the need for a cluster administrator to create `SriovNetwork` objects on their behalf.
*   Enhanced Security: By allowing users to manage resources within their own namespaces, the feature improves security and provides better separation between applications. This also helps avoid the unintentional incorrect configuration of other applications' NetworkAttachmentDefinition objects.
*   Simplified Permissions: Managing `SriovNetwork` resources directly in their own namespaces simplifies user permissions. This streamlines the workflow and reduces the operational burden for developers.