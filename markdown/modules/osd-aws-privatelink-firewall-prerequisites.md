{%- set _mod_docs_content_type = "REFERENCE" -%}
{% if openshift_rosa %}
# Firewall AllowList requirements for {{ product_title }} clusters using STS {id="rosa-classic-firewall-prerequisites_{{ context }}"}

You must AllowList several URLs to download required packages and tools for your cluster.  {._abstract}


:::important

Only {{ product_title }} clusters deployed with PrivateLink can use a firewall to control egress traffic.

:::

{% endif %}
{% if openshift_dedicated %}
# Firewall AllowList requirements {id="osd-aws-privatelink-firewall-prerequisites_{{ context }}"}

If you are using a firewall to control egress traffic from {{ product_title }}, you must configure your firewall to grant access to the certain domain and port combinations below. {{ product_title }} requires this access to provide a fully managed OpenShift service.
{% endif %} {._abstract}

***Domains for installation packages and tools***

<table>
<thead>
<tr>
  <th>Domain</th>
  <th>Port</th>
  <th>Function</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>registry.redhat.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn01.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn02.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn03.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn04.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn05.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>cdn06.quay.io</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>sso.redhat.com</code></td>
  <td>443</td>
  <td>Required. The <code>https://console.redhat.com/openshift</code> site uses authentication from <code>sso.redhat.com</code> to download the pull secret and use Red&#160;Hat SaaS solutions to facilitate monitoring of your subscriptions, cluster inventory, chargeback reporting, and so on.</td>
</tr>
<tr>
  <td><code>quay-registry.s3.amazonaws.com</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>quayio-production-s3.s3.amazonaws.com</code></td>
  <td>443</td>
  <td>Provides core container images.</td>
</tr>
<tr>
  <td><code>registry.access.redhat.com</code></td>
  <td>443</td>
  <td>Hosts all the container images that are stored on the Red&#160;Hat Ecosytem Catalog. Additionally, the registry provides access to the <code>odo</code> CLI tool that helps developers build on OpenShift and Kubernetes.</td>
</tr>
<tr>
  <td><code>access.redhat.com</code></td>
  <td>443</td>
  <td>Required. Hosts a signature store that a container client requires for verifying images when pulling them from <code>registry.access.redhat.com</code>.</td>
</tr>
<tr>
  <td><code>registry.connect.redhat.com</code></td>
  <td>443</td>
  <td>Required for all third-party images and certified Operators.</td>
</tr>
<tr>
  <td><code>console.redhat.com</code></td>
  <td>443</td>
  <td>Required. Allows interactions between the cluster and OpenShift Console Manager to enable functionality, such as scheduling upgrades.</td>
</tr>
<tr>
  <td><code>sso.redhat.com</code></td>
  <td>443</td>
  <td>The <code>https://console.redhat.com/openshift</code> site uses authentication from <code>sso.redhat.com</code>.</td>
</tr>
<tr>
  <td><code>pull.q1w2.quay.rhcloud.com</code></td>
  <td>443</td>
  <td>Provides core container images as a fallback when quay.io is not available.</td>
</tr>
<tr>
  <td><code>catalog.redhat.com</code></td>
  <td>443</td>
  <td>The <code>registry.access.redhat.com</code> and <code>https://registry.redhat.io</code> sites redirect through <code>catalog.redhat.com</code>.</td>
</tr>
<tr>
  <td><code>oidc.op1.openshiftapps.com</code></td>
  <td>443</td>
  <td>Used by {{ product_title }}  for STS implementation with managed OIDC configuration.</td>
</tr>
<tr>
  {% if openshift_rosa %}<td><code>api.openshiftusgov.com</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>goalert-api.goalert-prod.appsrefrp01ugw1.p1.openshiftusgov.com</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>splunk.y0j2v8m5s2h4t0v.jciv.p1.openshiftusgov.com</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>ocm-prod.rosa-public-nlb.appsrefrp01ugw1.p1.openshiftusgov.com</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
</tbody>
</table>

***Domains for telemetry***

<table>
<thead>
<tr>
  <th>Domain</th>
  <th>Port</th>
  <th>Function</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>cert-api.access.redhat.com</code></td>
  <td>443</td>
  <td>Required for telemetry.</td>
</tr>
<tr>
  <td><code>api.access.redhat.com</code></td>
  <td>443</td>
  <td>Required for telemetry.</td>
</tr>
<tr>
  <td><code>infogw.api.openshift.com</code></td>
  <td>443</td>
  <td>Required for telemetry.</td>
</tr>
<tr>
  <td><code>console.redhat.com</code></td>
  <td>443</td>
  <td>Required for telemetry and {{ red_hat_lightspeed }}.</td>
</tr>
<tr>
  <td><code>observatorium-mst.api.openshift.com</code></td>
  <td>443</td>
  <td>Required for managed OpenShift-specific telemetry.</td>
</tr>
<tr>
  <td><code>observatorium.api.openshift.com</code></td>
  <td>443</td>
  <td>Required for managed OpenShift-specific telemetry.</td>
</tr>
<tr>
  {% if openshift_rosa %}<td><code>console.openshiftusgov.com</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>time-a-g.nist.gov</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>time-a-wwv.nist.gov</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>time-a-b.nist.gov</code></td>{% endif %}
  {% if openshift_rosa %}<td>443</td>{% endif %}
  {% if openshift_rosa %}<td>This is for GovCloud only.</td>{% endif %}
</tr>
</tbody>
</table>

Managed clusters require enabling telemetry to allow Red&#160;Hat to react more quickly to problems, better support the customers, and better understand how product upgrades impact clusters. For more information about how remote health monitoring data is used by Red&#160;Hat, see _About remote health monitoring_ in the _Additional resources_ section.

**Domains for Amazon Web Services (AWS) APIs**

| Domain | Port | Function |
| --- | --- | --- |
| `.amazonaws.com` | 443 | Required to access AWS services and resources. |

Alternatively, if you choose to not use a wildcard for Amazon Web Services (AWS) APIs, you must allowlist the following URLs:

| Domain | Port | Function |
| --- | --- | --- |
| `ec2.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `events.<aws_region>.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `iam.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `route53.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `sts.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment, for clusters configured to use the global endpoint for AWS STS. |
| `sts.<aws_region>.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment, for clusters configured to use regionalized endpoints for AWS STS. See [AWS STS regionalized endpoints](https://docs.aws.amazon.com/sdkref/latest/guide/feature-sts-regionalized-endpoints.html) for more information. |
| `tagging.us-east-1.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. This endpoint is always us-east-1, regardless of the region the cluster is deployed in. |
| `ec2.<aws_region>.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `elasticloadbalancing.<aws_region>.amazonaws.com` | 443 | Used to install and manage clusters in an AWS environment. |
| `tagging.<aws_region>.amazonaws.com` | 443 | Allows the assignment of metadata about AWS resources in the form of tags. |

**Domains for OpenShift**

| Domain | Port | Function |
| --- | --- | --- |
| `mirror.openshift.com` | 443 | Used to access mirrored installation content and images. This site is also a source of release image signatures. |
| `api.openshift.com` | 443 | Used to check if updates are available for the cluster. |

**Domains for your Site Reliability Engineering (SRE) and management**

| Domain | Port | Function |
| --- | --- | --- |
| `api.pagerduty.com` | 443 | This alerting service is used by the in-cluster alertmanager to send alerts notifying Red&#160;Hat SRE of an event to take action on. |
| `events.pagerduty.com` | 443 | This alerting service is used by the in-cluster alertmanager to send alerts notifying Red&#160;Hat SRE of an event to take action on. |
| `api.deadmanssnitch.com` | 443 | Alerting service used by {{ product_title }} to send periodic pings that indicate whether the cluster is available and running. |
| `nosnch.in` | 443 | Alerting service used by {{ product_title }} to send periodic pings that indicate whether the cluster is available and running. |
| `http-inputs-osdsecuritylogs.splunkcloud.com` | 443 | Required. Used by the `splunk-forwarder-operator` as a logging forwarding endpoint to be used by Red&#160;Hat SRE for log-based alerting. |
| `sftp.access.redhat.com` (Recommended) | 22 | The SFTP server used by `must-gather-operator` to upload diagnostic logs to help troubleshoot issues with the cluster. |