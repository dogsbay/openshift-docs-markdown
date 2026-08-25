{%- set _mod_docs_content_type = "REFERENCE" %}
# Available dynamic provisioning plugins {id="available-plug-ins_{{ context }}"}

Provisioner plugins automatically create storage resources on-demand by connecting to your cloud provider’s API. This lets you dynamically provision persistent volumes (PVs) without manual intervention, adapting to your cluster’s storage needs as they arise. {._abstract}


:::important

Any chosen provisioner plugin also requires configuration for the relevant cloud, host, or third-party provider as in the relevant documentation.

:::


<table>
<thead>
<tr>
  <th>Storage type</th>
  <th>Provisioner plugin name</th>
  <th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ rh_openstack_first }} Cinder</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td><code>kubernetes.io/cinder</code></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ rh_openstack }} Manila Container Storage Interface (CSI)</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td><code>manila.csi.openstack.org</code></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>After being installed, the OpenStack Manila CSI Driver Operator and ManilaDriver automatically create the required storage classes for all available Manila share types needed for dynamic provisioning.</td>{% endif %}
</tr>
<tr>
  <td>Amazon Elastic Block Store (Amazon EBS)</td>
  <td><code>ebs.csi.aws.com</code></td>
  <td>For dynamic provisioning when using multiple clusters in different zones, tag each node with <code>Key=kubernetes.io/cluster/<cluster_name>,Value=<cluster_id></code> where <code><cluster_name></code> and <code><cluster_id></code> are unique per cluster.</td>
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Azure Disk</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td><code>kubernetes.io/azure-disk</code></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Azure File</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td><code>kubernetes.io/azure-file</code></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>The <code>persistent-volume-binder</code> service account requires permissions to create</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>GCE Persistent Disk (gcePD)</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td><code>kubernetes.io/gce-pd</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>In multi-zone configurations, it is advisable to run one {{ product_title }} cluster per GCE project to avoid persistent volumes (PVs) from being created in zones where no node exists in the current cluster.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>{{ ibm_power_server_name }} Block</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td><code>powervs.csi.ibm.com</code></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>After installation, the {{ ibm_power_server_name }} Block CSI Driver Operator and {{ ibm_power_server_name }} Block CSI Driver automatically create the required storage classes for dynamic provisioning.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>VMware vSphere</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td><code>kubernetes.io/vsphere-volume</code></td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td></td>{% endif %}
</tr>
</tbody>
</table>