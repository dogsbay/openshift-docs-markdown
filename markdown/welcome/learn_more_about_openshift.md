---
title: Learn more about OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Learn more about {{ product_title }} {id="learn_more_about_openshift"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "welcome-personas" %}

To better use {{ product_title }}, you should first learn about and better understand how {{ product_title }} functions.

You can use the following sections to find content to help you learn about {{ product_title }}.


Learning and support
:   | Learn about {{ product_title }} | Optional additional resources |
    | --- | --- |
    | [What’s new in {{ product_title }}](https://www.openshift.com/learn/whats-new) | [OpenShift blog](https://www.openshift.com/blog?hsLang=en-us) |
    | [{{ product_title }} Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift) | [{{ product_title }} life cycle](https://access.redhat.com/support/policy/updates/openshift#ocp4_phases) |
    | [OpenShift Interactive Learning Portal](https://learn.openshift.com/?extIdCarryOver=true&sc_cid=701f2000001Css5AAC) | [OpenShift Knowledgebase articles](https://access.redhat.com/articles/4217411) |
    | [Getting Support](/support/getting-support#getting-support) | [Gathering data about your cluster](/support/gathering-cluster-data#gathering-data) |


Architecture
:   | Learn about {{ product_title }} | Optional additional resources |
    | --- | --- |
    | [Enterprise Kubernetes with OpenShift](https://www.openshift.com/blog/enterprise-kubernetes-with-openshift-part-one?extIdCarryOver=true&sc_cid=701f2000001Css5AAC) | [Tested platforms](https://access.redhat.com/articles/4128421) |
    | [Architecture](/architecture/architecture#architecture) | [Security and compliance](/security/container_security/security-understanding#understanding-security) |
    | [Networking](/networking/networking_overview/understanding-networking#understanding-networking) | [OVN-Kubernetes architecture](/networking/ovn_kubernetes_network_provider/ovn-kubernetes-architecture-assembly#ovn-kubernetes-architecture-con) |
    | [Backup and restore](/backup_and_restore/index#backup-restore-overview) | [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#scenario-2-restoring-cluster-state) |


Installation
:   Explore the following {{ product_title }} installation tasks:
    | Learn about installation on {{ product_title }} | Optional additional resources |
    | --- | --- |
    | [{{ product_title }} installation overview](/installing/overview/index#ocp-installation-overview) | [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing) |
    | [Installing a cluster in FIPS mode](/installing/overview/installing-fips#installing-fips-mode_installing-fips) | [About FIPS compliance](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-installer-fips-compliance_preparing-to-install-with-agent-based-installer) |


Other cluster installer tasks
:   | Learn about other installer tasks on {{ product_title }} | Optional additional resources |
    | --- | --- |
    | [Troubleshooting installation issues](/installing/validation_and_troubleshooting/installing-troubleshooting#installing-troubleshooting) | [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation) |
    | [Install {{ rh_storage_first }}](/storage/persistent_storage/persistent-storage-ocs#red-hat-openshift-data-foundation) | [{{ image_mode_os_lower }}](/machine_configuration/mco-coreos-layering#mco-coreos-layering) |


Install a cluster in a restricted network
<table>
<thead>
<tr>
  <th>Learn about installing in a restricted network</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/disconnected/index#index">About disconnected installation mirroring</a></td>
  <td>If your cluster uses user-provisioned infrastructure, and the cluster does not have full access to the internet, you must mirror the {{ product_title }} installation images.<br><br><ul><li><a href="/installing/installing_aws/upi/installing-restricted-networks-aws#installing-restricted-networks-aws">{{ aws_first }}</a></li><li><a href="/installing/installing_gcp/installing-restricted-networks-gcp#installing-restricted-networks-gcp">{{ gcp_short }}</a></li><li><a href="/installing/installing_vsphere/upi/installing-restricted-networks-vsphere#installing-restricted-networks-vsphere">{{ vmw_short }}</a></li><li><a href="/installing/installing_ibm_cloud/installing-ibm-cloud-restricted#installing-ibm-cloud-restricted">{{ ibm_cloud_name }}</a></li><li><a href="/installing/installing_ibm_z/preparing-to-install-on-ibm-z#preparing-to-install-on-ibm-z">{{ ibm_z_name }} and {{ ibm_linuxone_name }}</a></li><li><a href="/installing/installing_ibm_power/installing-restricted-networks-ibm-power#installing-restricted-networks-ibm-power">{{ ibm_power_name }}</a></li><li><a href="/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal">bare metal</a></li></ul></td>
</tr>
</tbody>
</table>


Install a cluster in an existing network
:   | Learn about installing in a restricted network | Optional additional resources |
    | --- | --- |
    | If you use an existing Virtual Private Cloud (VPC) in [{{ aws_first }}](/installing/installing_aws/ipi/installing-aws-vpc#installing-aws-vpc) or [{{ gcp_short }}](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc) or an existing [VNet](/installing/installing_azure/ipi/installing-azure-vnet#installing-azure-vnet) on Microsoft Azure, you can install a cluster | [Installing a cluster on {{ gcp_short }} into a shared VPC](/installing/installing_gcp/installing-gcp-shared-vpc#installation-gcp-shared-vpc-prerequisites_installing-gcp-shared-vpc) |


Cluster administration
<table>
<thead>
<tr>
  <th>Learn about {{ product_title }} cluster activities</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/architecture/architecture#architecture-overview-architecture">Understand {{ product_title }} management</a></td>
  <td><ul><li><a href="/machine_management/index#machine-api-overview_overview-of-machine-management">Machine API</a></li><li><a href="/architecture/control-plane#operators-overview_control-plane">Operators</a></li><li><a href="/etcd/etcd-overview#etc-overview">etcd</a></li></ul></td>
</tr>
<tr>
  <td><a href="/installing/overview/cluster-capabilities#enabling-cluster-capabilities_cluster-capabilities">Enable cluster capabilities</a></td>
  <td><a href="/installing/overview/cluster-capabilities#explanation_of_capabilities_cluster-capabilities">Optional cluster capabilities in {{ product_title }} {{ product_version }}</a></td>
</tr>
</tbody>
</table>


Managing cluster components
<table>
<thead>
<tr>
  <th>Learn about managing cluster components</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Manage <a href="/machine_management/index#machine-mgmt-intro-managing-compute_overview-of-machine-management">compute</a> and <a href="/machine_management/index#machine-mgmt-intro-managing-control-plane_overview-of-machine-management">control plane</a> machines with machine sets</td>
  <td><a href="/machine_management/deploying-machine-health-checks#deploying-machine-health-checks">Deploy machine health checks</a></td>
</tr>
<tr>
  <td><a href="/machine_management/applying-autoscaling#applying-autoscaling">Apply autoscaling to an {{ product_title }} cluster</a></td>
  <td><a href="/nodes/pods/nodes-pods-priority#nodes-pods-priority">Including pod priority in pod scheduling decisions</a></td>
</tr>
<tr>
  <td><a href="/registry/index#registry-overview">Manage container registries</a></td>
  <td><a href="https://access.redhat.com/documentation/en-us/red_hat_quay/">{{ quay }}</a></td>
</tr>
<tr>
  <td><a href="/authentication/understanding-authentication#understanding-authentication">Manage users and groups</a></td>
  <td><a href="/authentication/impersonating-system-admin#impersonating-system-admin">Impersonating the system:admin user</a></td>
</tr>
<tr>
  <td><a href="/authentication/understanding-authentication#understanding-authentication">Manage authentication</a></td>
  <td><a href="/authentication/understanding-identity-provider#supported-identity-providers_understanding-identity-provider">Supported identity providers</a></td>
</tr>
<tr>
  <td>Manage <a href="/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress">Ingress</a>, <a href="/security/certificates/api-server#api-server-certificates">API server</a>, and <a href="/security/certificates/service-serving-certificate#add-service-serving">Service</a> certificates</td>
  <td><a href="/networking/network_security/network-policy-apis#network-policy-apis">Network security</a></td>
</tr>
<tr>
  <td><a href="/networking/networking_overview/understanding-networking#understanding-networking">Manage networking</a></td>
  <td><ul><li><a href="/networking/networking_operators/cluster-network-operator#nw-cluster-network-operator_cluster-network-operator">Cluster Network Operator</a></li><li><a href="/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks">Multiple network interfaces</a></li><li><a href="/networking/network_security/network_policy/about-network-policy#about-network-policy">Network policy</a></li></ul></td>
</tr>
<tr>
  <td><a href="/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog">Manage Operators</a></td>
  <td><a href="/operators/user/olm-creating-apps-from-installed-operators#olm-creating-apps-from-installed-operators">Creating applications from installed Operators</a></td>
</tr>
</tbody>
</table>


Changing cluster components
<table>
<thead>
<tr>
  <th>Learn more about changing cluster components</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/updating/understanding_updates/intro-to-updates#intro-to-updates">Introduction to OpenShift updates</a></td>
  <td><ul><li><a href="/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console">Updating a cluster using the web console</a></li><li><a href="/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli">Updating using the CLI</a></li><li><a href="/disconnected/updating/index#about-disconnected-updates">Using the OpenShift Update Service in a disconnected environment</a></li></ul></td>
</tr>
<tr>
  <td><a href="/operators/understanding/crds/crd-extending-api-with-crds#crd-extending-api-with-crds">Use custom resource definitions (CRDs) to modify the cluster</a></td>
  <td><ul><li><a href="/operators/understanding/crds/crd-extending-api-with-crds#crd-creating-custom-resources-definition_crd-extending-api-with-crds">Create a CRD</a></li><li><a href="/operators/understanding/crds/crd-managing-resources-from-crds#crd-managing-resources-from-crds">Manage resources from CRDs</a></li></ul></td>
</tr>
<tr>
  <td><a href="/applications/quotas/quotas-setting-per-project#quotas-setting-per-project">Set resource quotas</a></td>
  <td><a href="/applications/quotas/quotas-setting-across-multiple-projects#quotas-setting-across-multiple-projects">Resource quotas across multiple projects</a></td>
</tr>
<tr>
  <td><a href="/applications/pruning-objects#pruning-objects">Prune and reclaim resources</a></td>
  <td><a href="/cicd/builds/advanced-build-operations#builds-build-pruning-advanced-build-operations">Performing advanced builds</a></td>
</tr>
<tr>
  <td><a href="/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#scaling-cluster-monitoring-operator">Scale</a> and <a href="/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator">tune</a> clusters</td>
  <td><a href="/scalability_and_performance/index#scalability-and-performance-overview">{{ product_title }} scalability and performance</a></td>
</tr>
</tbody>
</table>


Observe a cluster
<table>
<thead>
<tr>
  <th>Learn about {{ product_title }}</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="https://docs.redhat.com/en/documentation/red_hat_openshift_distributed_tracing_platform/latest/html/release_notes_for_the_distributed_tracing_platform/distr-tracing-rn">Release notes for the {{ DTProductName }}</a></td>
  <td><a href="https://docs.redhat.com/en/documentation/red_hat_openshift_distributed_tracing_platform/latest">{{ DTProductName }}</a></td>
</tr>
<tr>
  <td><a href="https://docs.redhat.com/en/documentation/red_hat_build_of_opentelemetry/latest/html/installing_red_hat_build_of_opentelemetry/install-otel">Red Hat build of OpenTelemetry</a></td>
  <td><a href="https://docs.redhat.com/en/documentation/red_hat_build_of_opentelemetry/latest/html/receiving_telemetry/otel-receiving-telemetry#otel-receiving-telemetry-from-multiple-clusters_otel-receiving-telemetry">Receiving telemetry data from multiple clusters</a></td>
</tr>
<tr>
  <td><a href="/observability/network_observability/network-observability-overview#network-observability-overview">About Network Observability</a></td>
  <td><ul><li><a href="/observability/network_observability/metrics-alerts-dashboards#metrics-alerts-dashboards_metrics-alerts-dashboards">Using metrics with dashboards and alerts</a></li><li><a href="/observability/network_observability/observing-network-traffic#network-observability-trafficflow_nw-observe-network-traffic">Observing the network traffic from the Traffic flows view</a></li></ul></td>
</tr>
<tr>
  <td><a href="https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring">About {{ product_title }} monitoring</a></td>
  <td><ul><li><a href="/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring_about-remote-health-monitoring">Remote health monitoring</a></li><li><a href="https://docs.redhat.com/en/documentation/power_monitoring_for_red_hat_openshift/latest/html/about_power_monitoring/about-power-monitoring">{{ PM_title_c }} (Technology Preview)</a></li></ul></td>
</tr>
</tbody>
</table>


Storage activities
<table>
<thead>
<tr>
  <th>Learn about {{ product_title }}</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/storage/index#storage-types">Storage types</a></td>
  <td><ul><li><a href="/storage/understanding-persistent-storage#understanding-persistent-storage">Persistent storage</a></li><li><a href="/storage/understanding-ephemeral-storage#understanding-ephemeral-storage">Ephemeral storage</a></li></ul></td>
</tr>
</tbody>
</table>


Application Site Reliability Engineer (App SRE)
:   | Learn about {{ product_title }} | Optional additional resources |
    | --- | --- |
    | [Building applications overview](/applications/index#building-applications-overview) | [Projects](/applications/projects/working-with-projects#working-with-projects) |
    | [Operators](/operators/understanding/olm-what-operators-are#olm-what-operators-are) | [Cluster Operator reference](/operators/operator-reference#cluster-operator-reference) |


Developing applications
:   {{ product_title }} is a platform for developing and deploying containerized applications. Read the following {{ product_title }} documentation, so that you can better understand {{ product_title }} functions:
<table>
<thead>
<tr>
  <th>Learn about application development in {{ product_title }}</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="https://developers.redhat.com/products/openshift/getting-started#assembly-field-sections-13455">Getting started with OpenShift for developers (interactive tutorial)</a></td>
  <td><ul><li><a href="/architecture/understanding-development#understanding-development">Understanding {{ product_title }} development</a></li><li><a href="/applications/projects/working-with-projects#working-with-projects">Working with projects</a></li><li><a href="/applications/deployments/what-deployments-are#what-deployments-are">Create deployments</a></li></ul></td>
</tr>
<tr>
  <td><a href="https://developers.redhat.com/">Red Hat Developers site</a></td>
  <td><a href="/cicd/builds/understanding-image-builds#understanding-image-builds">Understanding image builds</a></td>
</tr>
<tr>
  <td><a href="https://developers.redhat.com/products/openshift-dev-spaces/overview">{{ openshift_dev_spaces_productname }} (formerly Red Hat CodeReady Workspaces)</a></td>
  <td><a href="/operators/understanding/olm-what-operators-are#olm-what-operators-are">Operators</a></td>
</tr>
<tr>
  <td><a href="/openshift_images/index#overview-of-images">Create container images</a></td>
  <td><a href="/openshift_images/managing_images/managing-images-overview#managing-images-overview">Managing images overview</a></td>
</tr>
<tr>
  <td><a href="https://odo.dev/docs/introduction/"><code>odo</code></a></td>
  <td><a href="/cli_reference/odo-important-update#odo-important_update">Developer-focused CLI</a></td>
</tr>
<tr>
  <td><a href="/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-topology_viewing-application-composition-using-topology-view">Viewing application composition using the Topology view</a></td>
  <td><a href="/applications/odc-exporting-applications#odc-exporting-applications">Exporting applications</a></td>
</tr>
<tr>
  <td><a href="https://docs.openshift.com/pipelines/1.15/about/understanding-openshift-pipelines.html">Understanding {{ pipelines_shortname }}</a></td>
  <td><a href="https://docs.openshift.com/pipelines/latest/create/creating-applications-with-cicd-pipelines.html">Create CI/CD Pipelines</a></td>
</tr>
<tr>
  <td><a href="https://docs.openshift.com/gitops/latest/declarative_clusterconfig/configuring-an-openshift-cluster-by-deploying-an-application-with-cluster-configurations.html">Configuring an OpenShift cluster by deploying an application with cluster configurations</a></td>
  <td><ul><li><a href="/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations">Controlling pod placement using node taints</a></li><li><a href="/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets">Creating infrastructure machine sets</a></li></ul></td>
</tr>
</tbody>
</table>


{{ hcp_capital }}
<table>
<thead>
<tr>
  <th>Learn about {{ hcp }}</th>
  <th>Optional additional resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/hosted_control_planes/index#hosted-control-planes-overview">Hosted control planes overview</a></td>
  <td><a href="/hosted_control_planes/index#hosted-control-planes-version-support_hcp-overview">Versioning for {{ hcp }}</a></td>
</tr>
<tr>
  <td>Preparing to deploy</td>
  <td><ul><li><a href="/hosted_control_planes/hcp-prepare/hcp-requirements#hcp-requirements">Requirements for {{ hcp }}</a></li><li><a href="/hosted_control_planes/hcp-prepare/hcp-sizing-guidance#hcp-sizing-guidance">Sizing guidance for {{ hcp }}</a></li><li><a href="/hosted_control_planes/hcp-prepare/hcp-override-resource-util#hcp-override-resource-util">Overriding resource utilization measurements</a></li><li><a href="/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli">Installing the {{ hcp }} command-line interface</a></li><li><a href="/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-distribute-workloads">Distributing hosted cluster workloads</a></li><li><a href="/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-disable">Enabling or disabling the {{ hcp }} feature</a></li></ul></td>
</tr>
<tr>
  <td>Deploying {{ hcp }}</td>
  <td><ul><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-virt#hcp-deploy-virt">Deploying {{ hcp }} on {{ VirtProductName }}</a></li><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-deploy-aws">Deploying {{ hcp }} on {{ aws_short }}</a></li><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-deploy-bm">Deploying {{ hcp }} on bare metal</a></li><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-non-bm#hcp-deploy-non-bm">Deploying {{ hcp }} on non-bare-metal agent machines</a></li><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-ibmz#hcp-deploy-ibmz">Deploying {{ hcp }} on {{ ibm_z_title }}</a></li><li><a href="/hosted_control_planes/hcp-deploy/hcp-deploy-ibm-power#hcp-deploy-ibm-power">Deploying {{ hcp }} on {{ ibm_power_title }}</a></li></ul></td>
</tr>
<tr>
  <td>Deploying {{ hcp }} in a disconnected environment</td>
  <td><ul><li><a href="/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-deploy-dc-bm">Deploying {{ hcp }} on bare metal in a disconnected environment</a></li><li><a href="/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-virt#hcp-deploy-dc-virt">Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment</a></li></ul></td>
</tr>
<tr>
  <td><a href="/hosted_control_planes/hcp-troubleshooting#hcp-troubleshooting">Troubleshooting {{ hcp }}</a></td>
  <td><a href="/hosted_control_planes/hcp-troubleshooting#hosted-control-planes-troubleshooting_hcp-troubleshooting">Gathering information to troubleshoot {{ hcp }}</a></td>
</tr>
</tbody>
</table>