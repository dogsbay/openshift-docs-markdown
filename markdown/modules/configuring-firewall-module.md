{% if context == "installing-oci-agent-based-installer" %}
{%- set oci_agent = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring your firewall for {{ product_title }} {id="configuring-firewall-module_{{ context }}"}

Before you install {{ product_title }}, you must configure your firewall to grant access to the sites that {{ product_title }} requires. {._abstract}

{% if not oci_agent %}
There are no special configuration considerations for services running on only controller nodes compared to compute nodes.
{% endif %}

{% if oci_agent %}
For a disconnected environment, you must mirror content from both Red&#160;Hat and Oracle. This environment requires that you create firewall rules to expose your firewall to specific ports and registries.
{% endif %}


:::note

If your environment has a dedicated load balancer in front of your {{ product_title }} cluster, review the allowlists between your firewall and load balancer to prevent unwanted network restrictions to your cluster.

:::


**Procedure**

1.  Allowlist the following container registry URLs for cluster installation and upgrades:
    | URL | Port | Function |
    | --- | --- | --- |
    | `registry.redhat.io` | 443 | Provides core container images |
    | `access.redhat.com` | 443 | Hosts a signature store that a container client requires for verifying images pulled from `registry.access.redhat.com`. In a firewall environment, ensure that this resource is on the allowlist. |
    | `registry.access.redhat.com` | 443 | Hosts all the container images that are stored on the Red Hat Ecosystem Catalog, including core container images. |
    | `quay.io` | 443 | Provides core container images |
    | `cdn.quay.io` | 443 | Provides core container images |
    | `cdn01.quay.io` | 443 | Provides core container images |
    | `cdn02.quay.io` | 443 | Provides core container images |
    | `cdn03.quay.io` | 443 | Provides core container images |
    | `cdn04.quay.io` | 443 | Provides core container images |
    | `cdn05.quay.io` | 443 | Provides core container images |
    | `cdn06.quay.io` | 443 | Provides core container images |
    | `icr.io` | 443 | Provides IBM Cloud Pak container images. This domain is only required if you use IBM Cloud Paks. |
    | `cp.icr.io` | 443 | Provides IBM Cloud Pak container images. This domain is only required if you use IBM Cloud Paks. |
    *   You can use the wildcard `*.quay.io` instead of `cdn.quay.io` and `cdn0[1-6].quay.io` in your allowlist.
    *   You can use the wildcard `*.access.redhat.com` to simplify the configuration and ensure that all subdomains, including `registry.access.redhat.com`, are allowed.
    *   When adding a site such as `quay.io` to your allowlist, do not add a wildcard entry such as `*.quay.io` to your denylist. In most cases, image registries use a content delivery network (CDN) to serve images. If a firewall blocks access, image downloads are denied when the initial download request redirects to a hostname such as `cdn01.quay.io`.
1.  Allowlist the following URLs to enable cluster access, authentication, and updates:
    | URL | Port | Function |
    | --- | --- | --- |
    | `*.apps.<cluster_name>.<base_domain>` | 443 | Allowlist these URLs to enable cluster access, authentication, and updates. |
    | `api.openshift.com` | 443 | API endpoint for cluster tokens and update checks. |
    | `console.redhat.com` | 443 | Authentication service for cluster tokens. |
    | `sso.redhat.com` | 443 | The `https://console.redhat.com` site uses authentication from `sso.redhat.com` |

    For egress traffic, Operators require route access to perform health checks to establish a connection for reaching endpoints. The authentication and web console Operators connect to two routes to verify functionality. Cluster administrators who do not want to allow `*.apps.<cluster_name>.<base_domain>`, must allow the following routes:
    *   `oauth-openshift.apps.<cluster_name>.<base_domain>`
    *   `canary-openshift-ingress-canary.apps.<cluster_name>.<base_domain>`
    *   `console-openshift-console.apps.<cluster_name>.<base_domain>`, or the hostname
    that is specified in the `spec.route.hostname` field of the
    `consoles.operator/cluster` object if the field is not empty.
1.  Allowlist the following registry URLs that host related artifacts for cluster installation and upgrades, such as installation content, release images, and client tools:
    | URL | Port | Function |
    | --- | --- | --- |
    | `mirror.openshift.com` | 443 | Required to access mirrored installation content and images. This site is also a source of release image signatures, although the Cluster Version Operator needs only a single functioning source. |
    | `quayio-production-s3.s3.amazonaws.com` | 443 | Required to access Quay image content in AWS. |
    | `rhcos.mirror.openshift.com` | 443 | Required to download {{ op_system_first }} images. |
    | `storage.googleapis.com/openshift-release` | 443 | A source of release image signatures, although the Cluster Version Operator needs only a single functioning source. |
1.  Set your firewall’s allowlist to include any site that provides resources for a language or framework that your builds require.
1.  If you do not disable Telemetry, you must grant access to the following URLs to access Telemetry and {{ red_hat_lightspeed }}:
    | URL | Port | Function |
    | --- | --- | --- |
    | `cert-api.access.redhat.com` | 443 | Required for Telemetry |
    | `api.access.redhat.com` | 443 | Required for Telemetry |
    | `infogw.api.openshift.com` | 443 | Required for Telemetry |
    | `console.redhat.com` | 443 | Required for Telemetry and for `insights-operator` |

{% if oci_agent %}
1.  Set your firewall’s allowlist to include the following registry URLs:
    | URL | Port | Function |
    | --- | --- | --- |
    | `api.openshift.com` | 443 | Required both for your cluster token and to check if updates are available for the cluster. |
    | `rhcos.mirror.openshift.com` | 443 | Required to download {{ op_system_first }} images. |
1.  Set your firewall’s allowlist to include the following external URLs. Each repository URL hosts {{ oci }} containers. Consider mirroring images to as few repositories as possible to reduce any performance issues.
    | URL | Port | Function |
    | --- | --- | --- |
    | `k8s.gcr.io` | port | A Kubernetes registry that hosts container images for a community-based image registry. This image registry is hosted on a custom Google Container Registry (GCR) domain. |
    | `ghcr.io` | port | A GitHub image registry where you can store and manage Open Container Initiative images. Requires an access token to publish, install, and delete private, internal, and public packages. |
    | `storage.googleapis.com` | 443 | A source of release image signatures, although the Cluster Version Operator needs only a single functioning source. |
    | `registry.k8s.io` | port | Replaces the `k8s.gcr.io` image registry because the `k8s.gcr.io` image registry does not support other platforms and vendors. |
{% endif %}

{% if not oci_agent %}
1.  If you use {{ alibaba }}, {{ aws_first }}, {{ azure_first }}, or {{ gcp_first }} to host your cluster, you must grant access to the URLs that offer the cloud provider API and DNS for that cloud:
<table>
<thead>
<tr>
  <th>Cloud</th>
  <th>URL</th>
  <th>Port</th>
  <th>Function</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Alibaba</td>
  <td><code>*.aliyuncs.com</code></td>
  <td>443</td>
  <td>Required to access Alibaba Cloud services and resources. Review the <a href="https://github.com/aliyun/alibaba-cloud-sdk-go/blob/master/sdk/endpoints/endpoints_config.go?spm=a2c4g.11186623.0.0.47875873ciGnC8&file=endpoints_config.go">Alibaba endpoints_config.go file</a> to find the exact endpoints to allow for the regions that you use.<br><br>.17+</td>
</tr>
<tr>
  <td>AWS</td>
  <td><code>aws.amazon.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
</tr>
<tr>
  <td><code>*.amazonaws.com</code><br><br>Alternatively, if you choose to not use a wildcard for AWS APIs, you must include the following URLs in your allowlist:</td>
  <td>443</td>
  <td>Required to access AWS services and resources. Review the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">AWS Service Endpoints</a> in the AWS documentation to find the exact endpoints to allow for the regions that you use.</td>
  <td><code>ec2.amazonaws.com</code></td>
</tr>
<tr>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>events.amazonaws.com</code></td>
  <td>443</td>
</tr>
<tr>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>iam.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
</tr>
<tr>
  <td><code>route53.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>*.s3.amazonaws.com</code></td>
</tr>
<tr>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>*.s3.<aws_region>.amazonaws.com</code></td>
  <td>443</td>
</tr>
<tr>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>*.s3.dualstack.<aws_region>.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
</tr>
<tr>
  <td><code>sts.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>sts.<aws_region>.amazonaws.com</code></td>
</tr>
<tr>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>tagging.us-east-1.amazonaws.com</code></td>
  <td>443</td>
</tr>
<tr>
  <td>Used to install and manage clusters in an AWS environment. This endpoint is always <code>us-east-1</code>, regardless of the region the cluster is deployed in.</td>
  <td><code>ec2.<aws_region>.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
</tr>
<tr>
  <td><code>elasticloadbalancing.<aws_region>.amazonaws.com</code></td>
  <td>443</td>
  <td>Used to install and manage clusters in an AWS environment.</td>
  <td><code>servicequotas.<aws_region>.amazonaws.com</code></td>
</tr>
<tr>
  <td>443</td>
  <td>Required. Used to confirm quotas for deploying the service.</td>
  <td><code>tagging.<aws_region>.amazonaws.com</code></td>
  <td>443</td>
</tr>
<tr>
  <td>Allows the assignment of metadata about AWS resources in the form of tags.</td>
  <td><code>*.cloudfront.net</code></td>
  <td>443</td>
  <td>Used to provide access to CloudFront. If you use the AWS Security Token Service (STS) and the private S3 bucket, you must provide access to CloudFront.<br><br>.2+</td>
</tr>
<tr>
  <td>GCP</td>
  <td><code>*.googleapis.com</code></td>
  <td>443</td>
  <td>Required to access {{ gcp_short }} services and resources. Review <a href="https://cloud.google.com/endpoints/">Cloud Endpoints</a> in the {{ gcp_short }} documentation to find the endpoints to allow for your APIs.</td>
</tr>
<tr>
  <td><code>accounts.google.com</code></td>
  <td>443</td>
  <td>Required to access your {{ gcp_short }} account.<br><br>.3+</td>
  <td>Microsoft Azure</td>
</tr>
<tr>
  <td><code>management.azure.com</code></td>
  <td>443</td>
  <td>Required to access Microsoft Azure services and resources. Review the <a href="https://docs.microsoft.com/en-us/rest/api/azure/">Microsoft Azure REST API reference</a> in the Microsoft Azure documentation to find the endpoints to allow for your APIs.</td>
  <td><code>*.blob.core.windows.net</code></td>
</tr>
<tr>
  <td>443</td>
  <td>Required to download Ignition files.</td>
  <td><code>login.microsoftonline.com</code></td>
  <td>443</td>
</tr>
<tr>
  <td>Required to access Microsoft Azure services and resources. Review the <a href="https://docs.microsoft.com/en-us/rest/api/azure/">Azure REST API reference</a> in the Microsoft Azure documentation to find the endpoints to allow for your APIs.</td>
</tr>
</tbody>
</table>
1.  Allowlist the following URL for optional third-party content:
    | URL | Port | Function |
    | --- | --- | --- |
    | `registry.connect.redhat.com` | 443 | Required for all third-party images and certified operators. |
1.  If you use a default Red Hat Network Time Protocol (NTP) server, allow the following URLs. NTP operates on User Datagram Protocol (UDP) port 123, so this port must be opened on the firewall. 
    | URL | Port | Function |
    | --- | --- | --- |
    | `1.rhel.pool.ntp.org` | 123 | Provides NTP services for time synchronization. |
    | `2.rhel.pool.ntp.org` | 123 | Provides NTP services for time synchronization. |
    | `3.rhel.pool.ntp.org` | 123 | Provides NTP services for time synchronization. |

    :::note

    If you do not use a default Red Hat NTP server, verify the NTP server for your platform and allow it in your firewall.
    
    :::

{% endif %}

{% if context == "installing-oci-agent-based-installer" %}
{%- set oci_agent = false -%}
{% endif %}