{%- set _mod_docs_content_type = "REFERENCE" %}
# CSI drivers supported by {{ product_title }} {id="persistent-storage-csi-drivers-supported_{{ context }}"}

{{ product_title }} installs several CSI drivers by default, automatically deploying the driver Operator, driver, and storage class for supported backends. Default drivers provide enhanced features beyond in-tree plugins. Some drivers, such as AWS EFS and GCP Filestore, require manual installation. {._abstract}

To create CSI-provisioned persistent volumes that mount to these supported storage assets, {{ product_title }} installs the necessary CSI driver Operator, the CSI driver, and the required storage class by default. For more details about the default namespace of the Operator and driver, see the documentation for the specific CSI Driver Operator.


:::important

The AWS EFS CSI driver is not installed by default, and must be installed manually. For instructions about installing the AWS EFS CSI driver, see "Setting up the AWS Elastic File Service CSI Driver Operator".

:::


The following table describes the CSI drivers that are
{%- if not openshift_dedicated %}
installed with {{ product_title }},
{%- endif %}
supported by {{ product_title }}, and which CSI features they support, such as volume snapshots and resize.

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::important

If your CSI driver is not listed in the following table, you must follow the installation instructions provided by your CSI storage vendor to use their supported CSI features.

:::


For a list of third-party-certified CSI drivers, see the "Red Hat ecosystem portal".

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_aro %}
In addition to the drivers listed in the following table, {{ product_title }} functions with CSI drivers from third-party storage vendors. Red Hat does not oversee third-party provisioners or the connected CSI drivers and the vendors fully control source code, deployment, operation, and Kubernetes compatibility. These volume provisioners are considered customer-managed and the respective vendors are responsible for providing support. For more information, see the "Shared responsibilities for {{ product_title }}"".
{% endif %}

**Supported CSI drivers and features in {{ product_title }}**

<table>
<thead>
<tr>
  <th>CSI driver</th>
  <th>CSI volume snapshots</th>
  <th>CSI volume group snapshots <sup>[1]</sup></th>
  <th>CSI cloning</th>
  <th>CSI resize</th>
  <th>Inline ephemeral volumes</th>
  <th>User namespaces</th>
</tr>
</thead>
<tbody>
<tr>
  <td>AWS EBS</td>
  <td>✅</td>
  <td></td>
  <td></td>
  <td>✅</td>
  <td></td>
  <td>✅</td>
</tr>
<tr>
  <td>AWS EFS</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>Google Compute Platform (GCP) persistent disk (PD)</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[2]</sup></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>GCP Filestore</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ ibm_power_server_name }} Block</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ ibm_cloud_name }} Block</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[3]</sup></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[3]</sup></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  <td>{{ lvms }}</td>
  <td>✅</td>
  <td></td>
  <td>✅</td>
  <td>✅</td>
  <td></td>
  <td>✅</td>
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Microsoft Azure Disk</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Microsoft Azure Stack Hub</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Microsoft Azure File</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>OpenStack Cinder</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ rh_storage }}</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅ <sup>[4]</sup></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>OpenStack Manila</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>CIFS/SMB</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>VMware vSphere</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[5]</sup></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[6]</sup></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅<sup>[7]</sup></td>{% endif %}
</tr>
</tbody>
</table>

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
1.

{%- set FeatureName = "CSI volume group snapshots" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

2.

*   Cloning is not supported on hyperdisk-balanced disks with storage pools.

3.

*   Does not support offline snapshots or resize. Volume must be attached to a running pod.

4.

*   RBD supports user namespaces; CephFS does not.

5.

*   Requires VMware vSphere version 8.0 Update 1 or later, or VMware vSphere Foundation (VVF) 9, or VMware Cloud Foundation (VCF) 9, for both vCenter Server and ESXi.
*   Does not support fileshare volumes.

6.

*   Online expansion is supported from VMware vSphere version 8.0 Update 1 and later, or VVF 9, or VCF 9.

7.

*   File persistent volumes (PVs), such as vSAN file service, do not support user namespaces.
{%- endif %}