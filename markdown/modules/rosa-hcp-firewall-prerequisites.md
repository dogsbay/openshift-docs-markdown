{%- set _mod_docs_content_type = "REFERENCE" %}
# Firewall prerequisites for {{ product_title }} {id="rosa-hcp-firewall-prerequisites_{{ context }}"}

If you are using a firewall to control egress traffic from {{ product_title }}, your Virtual Private Cloud (VPC) must be able to complete requests from the cluster to the Amazon S3 service, for example, via an Amazon S3 gateway. You must also configure your firewall to grant access to the following domain and port combinations. {._abstract}

## Domains for installation packages and tools {id="_domains_for_installation_packages_and_tools"}
| Domain | Port | Function |
| --- | --- | --- |
| `quay.io` | 443 | Provides core container images. |
| `cdn01.quay.io` | 443 | Provides core container images. |
| `cdn02.quay.io` | 443 | Provides core container images. |
| `cdn03.quay.io` | 443 | Provides core container images. |
| `cdn04.quay.io` | 443 | Provides core container images. |
| `cdn05.quay.io` | 443 | Provides core container images. |
| `cdn06.quay.io` | 443 | Provides core container images. |
| `quayio-production-s3.s3.amazonaws.com` | 443 | Provides core container images. |
| `registry.redhat.io` | 443 | Provides core container images. |
| `registry.access.redhat.com` | 443 | Required. Hosts all the container images that are stored on the Red&#160;Hat Ecosytem Catalog. Additionally, the registry provides access to the `odo` CLI tool that helps developers build on OpenShift and Kubernetes. |
| `access.redhat.com` | 443 | Required. Hosts a signature store that a container client requires for verifying images when pulling them from `registry.access.redhat.com`. |
| `api.openshift.com` | 443 | Required. Used to check for available updates to the cluster. |
| `mirror.openshift.com` | 443 | Required. Used to access mirrored installation content and images. This site is also a source of release image signatures, although the Cluster Version Operator (CVO) needs only a single functioning source. |
| `api.openshiftusgov.com` | 443 | This is for GovCloud only. |

## Domains for telemetry {id="_domains_for_telemetry"}
| Domain | Port | Function |
| --- | --- | --- |
| `infogw.api.openshift.com` | 443 | Required for telemetry. |
| `console.redhat.com` | 443 | Required. Allows interactions between the cluster and OpenShift Console Manager to enable functionality, such as scheduling upgrades. |
| `sso.redhat.com` | 443 | Required. The `https://console.redhat.com/openshift` site uses authentication from `sso.redhat.com` to download the pull secret and use Red&#160;Hat SaaS solutions to facilitate monitoring of your subscriptions, cluster inventory, chargeback reporting, etc. |
| `console.openshiftusgov.com` | 443 | This is for GovCloud only. |
| `time-a-g.nist.gov` | 443 | This is for GovCloud only. |
| `time-a-wwv.nist.gov` | 443 | This is for GovCloud only. |
| `time-a-b.nist.gov` | 443 | This is for GovCloud only. |

Managed clusters require enabling telemetry to allow Red&#160;Hat to react more quickly to problems, better support the customers, and better understand how product upgrades impact clusters.
For more information about how remote health monitoring data is used by Red&#160;Hat, see _About remote health monitoring_ in the _Additional resources_ section.

## Domains for Amazon Web Services (AWS) APIs {id="_domains_for_amazon_web_services_aws_apis"}
| Domain | Port | Function |
| --- | --- | --- |
| `sts.<aws_region>.amazonaws.com` | 443 | Required. Used to access the AWS Secure Token Service (STS) regional endpoint. Ensure that you replace `<aws-region>` with the region that your cluster is deployed in. This can also be accomplished by configuring a private interface endpoint in your AWS Virtual Private Cloud (VPC) to the regional AWS STS endpoint. |

## Domains for your workload {id="_domains_for_your_workload"}

Your workload may require access to other sites that provide resources for programming languages or frameworks.

*   Allow access to sites that provide resources required by your builds.
*   Allow access to outbound URLs required for your workload, for example, [OpenShift Outbound URLs to Allow](https://access.redhat.com/solutions/2998411).

## Optional domains to enable third-party content {id="_optional_domains_to_enable_third-party_content"}
| Domain | Port | Function |
| --- | --- | --- |
| `registry.connect.redhat.com` | 443 | Optional. Required for all third-party-images and certified operators. |
| `rhc4tp-prod-z8cxf-image-registry-us-east-1-evenkyleffocxqvofrk.s3.dualstack.us-east-1.amazonaws.com` | 443 | Optional. Provides access to container images hosted on `registry.connect.redhat.com`. |
| `oso-rhc4tp-docker-registry.s3-us-west-2.amazonaws.com` | 443 | Optional. Required for Sonatype Nexus, F5 Big IP operators. |

## Outbound firewall rules for the {{ rosa_cli }} for clusters with egress zero {id="firewall-cli-bastion_{{ context }}"}

If you use a bastion host to connect to a private cluster with egress zero, you must add the following rules to your firewall so that it can connect and authenticate to the cluster.

| Domain | Port | From/To | Function |
| --- | --- | --- | --- |
| `sso.redhat.com` | 443 | ROSA CLI running on bastion host | The [OpenShift console](https://console.redhat.com/openshift) uses authentication from `sso.redhat.com` to download the pull secret and use Red Hat SaaS solutions to facilitate monitoring of your subscriptions, cluster inventory, chargeback reporting, etc. |
| `api.openshift.com` | 443 | ROSA CLI running on bastion host | Required for registering a {{ product_title }} cluster into {{ hybrid_console }}. |
| `iam.amazonaws.com` | 443 | ROSA CLI running on bastion host | Used for creating IAM roles and attaching permissions. |
| `servicequotas.<your region>.amazonaws.com` | 443 | ROSA CLI running on bastion host | Checks AWS quotas to ensure they satisfy ROSA installation requirements. Alternatively, you can create a VPC endpoint for servicequota service to avoid whitelisting this URL from your firewall. |
| `sts.<your region>.amazonaws.com` | 443 | ROSA CLI running on bastion host | Used to get short-lived token to access AWS service. Alternatively, you can create a VPC endpoint for STS service to avoid whitelisting this url from your firewall. |
| `ec2.<your region>.amazonaws.com` | 443 | ROSA CLI running on bastion host | Used to retrieve EC2 instance related information such as subnets. Alternatively, you can create a VPC endpoint for EC2 service to avoid whitelisting this URL from your firewall. |

## Outbound firewall rules from {{ hybrid_console }} for clusters with egress zero {id="firewall-hcm-bastion_{{ context }}"}
| Domain | Port | From/To | Function |
| --- | --- | --- | --- |
| `sts.<your region>.amazonaws.com` | 443 | {{ product_title }} cluster | Used to access the AWS Secure Token Service (STS) regional endpoint to retrieve a short-lived token to access AWS services. Alternatively, you can create a VPC endpoint for STS service to avoid whitelisting this URL from your firewall. |
| `console.redhat.com` | 443 | Any browser to access {{ hybrid_console }} | To manage a {{ product_title }} cluster from {{ hybrid_console_second }}. |
| `sso.redhat.com` | 443 | Any browser to access {{ hybrid_console }} | The [{{ hybrid_console }}](https://console.redhat.com/openshift) site uses authentication from `sso.redhat.com` to download the pull secret and use Red Hat SaaS solutions to facilitate monitoring of your subscriptions, cluster inventory, chargeback reporting, etc. |