{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a default {{ product_title }} cluster with the web console {id="rosa-classic-create-a-default-red-hat-openshift-on-aws-classic-architecture-cluster-with-the-web_{{ context }}"}

Create a {{ product_title }} cluster by using {{ cluster_manager_first }} on the {{ hybrid_console_url }}. After you create your cluster, you can grant user access, deploy your application, revoke user access, and delete your cluster. {._abstract}


:::note

If you are looking for a comprehensive getting started guide for {{ product_title }}, see the comprehensive guide to getting started with {{ product_title }}.

:::


You can create a cluster that uses AWS Security Token Service (STS).

![{{ product_title }}](/images/291_OpenShift_on_AWS_Intro_1122_docs.png)

**Additional resources**
{._additional-resources}

*   [Comprehensive guide to getting started with {{ product_title }}](/rosa_getting_started/rosa-getting-started#rosa-getting-started)
*   [Installing {{ product_title }} interactive walkthrough](https://www.redhat.com/en/products/interactive-walkthrough/install-rosa)
*   [Using the AWS Security Token Service](/rosa_architecture/rosa-understanding#rosa-understanding-aws-sts_rosa-understanding)
*   [Account-wide IAM role and policy reference](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies_rosa-sts-about-iam-resources)
*   [Understanding the auto and manual deployment modes](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-understanding-deployment-modes_rosa-sts-creating-a-cluster-with-customizations)
*   [{{ product_title }} update life cycle](/rosa_architecture/rosa_policy_service_definition/rosa-life-cycle#rosa-life-cycle)
*   [Accessing a cluster through the web console](/rosa_getting_started/rosa-quickstart-guide-ui#rosa-getting-started-access-cluster-web-console_rosa-quickstart-guide-ui)
*   [Configuring identity providers for STS](/rosa_install_access_delete_clusters/rosa-sts-config-identity-providers#rosa-sts-config-identity-providers)
*   [Cluster administration role](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-cluster-admin-role_rosa-service-definition)
*   [Customer administrator user](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-customer-admin-user_rosa-service-definition)
*   [Adding services to a cluster using the {{ cluster_manager }} console](/adding_service_cluster/adding-service#adding-service)
*   [Managing compute nodes](/rosa_cluster_admin/rosa_nodes/rosa-managing-worker-nodes#rosa-managing-worker-nodes)
*   [Preparing to configure the user workload monitoring stack](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#preparing-to-configure-the-monitoring-stack-uwm)
*   [Understanding the {{ product_title }} with STS deployment workflow](/rosa_planning/rosa-sts-aws-prereqs#rosa-sts-overview-of-the-deployment-workflow)
*   [Understanding the {{ product_title }} deployment workflow](/rosa_install_access_delete_clusters/rosa_getting_started_iam/rosa-getting-started-workflow#rosa-understanding-the-deployment-workflow)
*   [Upgrading {{ product_title }} Classic clusters](/upgrading/rosa-upgrading-sts#rosa-upgrading-sts)
*   [Creating a {{ product_title }} cluster with STS using the default options](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/install_rosa_classic_clusters/rosa-sts-creating-a-cluster-quickly)
*   [Troubleshooting {{ product_title }} cluster installations](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/support/troubleshooting)
*   [Getting support for {{ product_title }}](https://access.redhat.com/support/)