{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage an {{ product_title }} on Google Cloud cluster {id="osd-manage-a-red-hat-openshift-dedicated-on-google-cloud-cluster_{{ context }}"}

Follow this getting started document to create a {{ product_title }} cluster, grant user access, deploy your first application, and learn how to scale and delete your cluster. {._abstract}

For {{ product_title }} clusters deployed on {{ gcp_short }}, Red&#160;Hat recommends using {{ gcp_short }} Workload Identity Federation (WIF) as the authentication type for installing and interacting with the {{ product_title }} cluster deployed on {{ gcp_short }} because it provides enhanced security.

Red&#160;Hat also recommends creating an {{ product_title }} cluster deployed on {{ gcp_short }} in Private cluster mode with Private Service Connect (PSC) to manage and monitor a cluster to avoid all public ingress network traffic.

**Additional resources**
{._additional-resources}

*   [Adding services to a cluster using the {{ cluster_manager }} console](/adding_service_cluster/adding-service#adding-service)
*   [Creating a Workload Identity Federation configuration](/osd_gcp_clusters/creating-a-gcp-cluster-with-workload-identity-federation#create-wif-configuration)
*   [Private Service Connect overview](/osd_gcp_clusters/creating-a-gcp-psc-enabled-private-cluster#creating-a-gcp-psc-enabled-private-cluster)
*   [About machine pools](/osd_cluster_admin/osd_nodes/osd-nodes-machinepools-about#osd-machine-pools-about)
*   [Preparing to configure the user workload monitoring stack](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#preparing-to-configure-the-monitoring-stack-uwm)
*   [About autoscaling nodes on a cluster](/osd_cluster_admin/osd_nodes/osd-nodes-about-autoscaling-nodes#nodes-about-autoscaling-nodes)
*   [Customer administrator user](/osd_architecture/osd_policy/osd-service-definition#cluster-admin-user_osd-service-definition)
*   [Configuring identity providers](/authentication/sd-configuring-identity-providers#sd-configuring-identity-providers)
*   [{{ product_title }} update life cycle](/osd_architecture/osd_policy/osd-life-cycle#osd-life-cycle)
*   [{{ product_title }} cluster upgrades](/upgrading/osd-upgrades#osd-upgrades)