{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure {id="cloud-experts-key-features-rosa-infrastructure_{{ context }}"}

{{ product_title }} uses several different cloud services such as virtual machines, storage, and load balancers. This section covers infrastructure components, credential methods, storage, networking, monitoring, and other infrastructure-related features. {._abstract}

## Infrastructure {id="_infrastructure"}
{{ product_title }} uses several different cloud services such as virtual machines, storage, and load balancers. You can see a defined list on the AWS prerequisites page in the _Additional resources_.

## Credential methods {id="_credential_methods"}
There are two credential methods to grant Red&#160;Hat the permissions needed to perform the required actions in your AWS account: AWS with STS or an IAM user with admin permissions. AWS with STS is the preferred method, and the IAM user method will eventually be deprecated. AWS with STS better aligns with the principles of least privilege and secure practices in cloud service resource management.

## Prerequisite permission or failure errors {id="_prerequisite_permission_or_failure_errors"}
Check for a newer version of the {{ rosa_cli }}. Every release of the {{ rosa_cli }} is located in two places: [Github](https://github.com/openshift/rosa/releases) and the [Red&#160;Hat signed binary releases](https://www.openshift.com/products/rosa/download).

## Storage {id="_storage"}
See the _Additional resources_ for the Storage documentation. OpenShift includes the CSI driver for AWS EFS.

## Using a VPC {id="_using_a_vpc"}
At installation you can select to deploy to an existing VPC or bring your own VPC. You can then select the required subnets and provide a valid CIDR range that encompasses the subnets for the installation program when using those subnets.

{{ product_title }} allows multiple clusters to share the same VPC. The number of clusters on one VPC is limited by the remaining AWS resource quota and CIDR ranges that cannot overlap.

## Network plugin {id="_network_plugin"}
{{ product_title }} uses the OpenShift OVN-Kubernetes default CNI network provider.

## Cross-namespace networking {id="_cross-namespace_networking"}
Cluster admins can customize, and deny, cross-namespace on a project basis using NetworkPolicy objects. Refer to  for more information.

## Using Prometheus and Grafana {id="_using_prometheus_and_grafana"}
You can use Prometheus and Grafana to monitor containers and manage capacity using OpenShift User Workload Monitoring. This is a check-box option in the {{ cluster_manager_url }}.

## Audit logs output from the cluster control-plane {id="_audit_logs_output_from_the_cluster_control-plane"}
If the Cluster Logging Operator Add-on has been added to the cluster then audit logs are available through CloudWatch. If it has not, then a support request would allow you to request some audit logs. Small targeted and time-boxed logs can be requested for export and sent to a customer. The selection of audit logs available are at the discretion of SRE in the category of platform security and compliance. Requests for exports of a cluster’s entirety of logs will be rejected.

## AWS Permissions Boundary {id="_aws_permissions_boundary"}
You can use an AWS Permissions Boundary around the policies for your cluster.

## AMI {id="_ami"}
{{ product_title }} worker nodes use a different AMI from OSD and OpenShift Container Platform. Control Plane and Infra node AMIs are common across products in the same version.

## Cluster backups {id="_cluster_backups"}
{{ product_title }} STS clusters do not have backups. Users must have their own backup policies for applications and data.

## Custom domain {id="_custom_domain"}
You can define a custom domain for your applications.

## {{ product_title }} domain certificates {id="_product_title_domain_certificates"}
Red&#160;Hat infrastructure (Hive) manages certificate rotation for default application ingress.

## Disconnected environments {id="_disconnected_environments"}
{{ product_title }} does not support an air-gapped, disconnected environment. The {{ product_title }} cluster must have egress to the internet to access our registry, S3, and send metrics. The service requires a number of egress endpoints.
Ingress can be limited to a PrivateLink for Red&#160;Hat SREs and a VPN for customer access.