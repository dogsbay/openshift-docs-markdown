{%- set _mod_docs_content_type = "CONCEPT" %}
# Access your {{ product_title }} cluster {id="rosa-classic-access-your-red-hat-openshift-on-aws-classic-architecture-cluster_{{ context }}"}

It is recommended that you access your {{ product_title }} cluster by using an identity provider (IDP) account. However, the cluster administrator who created the cluster can access it by using the quick access procedure. {._abstract}

This document describes how to access a cluster and set up an IDP by using the {{ rosa_cli_first }}. Alternatively, you can create an IDP account by using {{ cluster_manager }} console.

**Additional resources**
{._additional-resources}

*   [Cluster administration role](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-cluster-admin-role_rosa-service-definition)
*   [Customer administrator user](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-customer-admin-user_rosa-service-definition)
*   [Configuring identity providers using {{ cluster_manager_first }} console](/rosa_install_access_delete_clusters/rosa-sts-config-identity-providers#rosa-sts-config-identity-providers)
*   [Understanding the ROSA with STS deployment workflow](/rosa_getting_started/rosa-sts-getting-started-workflow#rosa-sts-understanding-the-deployment-workflow)
*   [Adding notification contacts](/rosa_cluster_admin/rosa-cluster-notifications#add-notification-contact_rosa-cluster-notifications)