{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a default {{ product_title }} cluster {id="rosa-classic-create-a-default-red-hat-openshift-on-aws-classic-architecture-cluster_{{ context }}"}

Create a {{ product_title }} cluster, grant user access, deploy your first application, revoke user access, and delete your cluster. {._abstract}


:::note

If you need a quick start guide, see the {{ product_title }} quick start guide.

:::


You can create a {{ product_title }} cluster that uses AWS Security Token Service (STS).

**Additional resources**
{._additional-resources}

*   [{{ product_title }} quick start guide](/rosa_getting_started/rosa-quickstart-guide-ui#rosa-quickstart-guide-ui)
*   [Using the AWS Security Token Service](/rosa_architecture/rosa-understanding#rosa-understanding-aws-sts_rosa-understanding)
*   [Creating a {{ product_title }} cluster without AWS STS](/rosa_install_access_delete_clusters/rosa_getting_started_iam/rosa-creating-cluster#rosa-creating-cluster)
*   [Creating an AWS `PrivateLink` cluster on {{ product_title }}](/rosa_install_access_delete_clusters/rosa-aws-privatelink-creating-cluster#rosa-aws-privatelink-creating-cluster)
*   [Account-wide IAM role and policy reference](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies_rosa-sts-about-iam-resources)
*   [Understanding the auto and manual deployment modes](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-understanding-deployment-modes_rosa-sts-creating-a-cluster-with-customizations)
*   [{{ product_title }} update life cycle](/rosa_architecture/rosa_policy_service_definition/rosa-life-cycle#rosa-life-cycle)
*   [Accessing a cluster through the web console](/rosa_getting_started/rosa-getting-started#rosa-getting-started-access-cluster-web-console_rosa-getting-started)
*   [Configuring identity providers for STS](/rosa_install_access_delete_clusters/rosa-sts-config-identity-providers#rosa-sts-config-identity-providers)
*   [Cluster administration role](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-cluster-admin-role_rosa-service-definition)
*   [Customer administrator user](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-customer-admin-user_rosa-service-definition)
*   [Adding services to a cluster using the {{ cluster_manager }} console](/adding_service_cluster/adding-service#adding-service)
*   [Managing compute nodes](/rosa_cluster_admin/rosa_nodes/rosa-managing-worker-nodes#rosa-managing-worker-nodes)
*   [Preparing to configure the user workload monitoring stack](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#preparing-to-configure-the-monitoring-stack-uwm)
*   [Understanding the {{ product_title }} with STS deployment workflow](/rosa_planning/rosa-sts-aws-prereqs#rosa-sts-overview-of-the-deployment-workflow)
*   [Understanding the {{ product_title }} deployment workflow](/rosa_install_access_delete_clusters/rosa_getting_started_iam/rosa-getting-started-workflow#rosa-understanding-the-deployment-workflow)
*   [Upgrading {{ product_title }} Classic clusters](/upgrading/rosa-upgrading-sts#rosa-upgrading-sts)