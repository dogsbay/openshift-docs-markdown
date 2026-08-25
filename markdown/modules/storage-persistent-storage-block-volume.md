{%- set _mod_docs_content_type = "REFERENCE" %}
# Block volume support {id="block-volume-support_{{ context }}"}

Raw block volumes are filesystem-free storage that applications access directly for improved performance. Specify `volumeMode: Block` in persistent volumes and claims, and configure privileged containers. Storage provider support varies: static only, dynamic only, both, or none. {._abstract}


:::important

Pods using raw block volumes must be configured to allow privileged containers.

:::


The following table displays which volume plugins support block volumes.

***Block volume support***

<table>
<thead>
<tr>
  <th>Volume Plugin</th>
  <th>Manually provisioned</th>
  <th>Dynamically provisioned</th>
  <th>Fully supported</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Amazon Elastic Block Store (Amazon EBS)</td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
</tr>
<tr>
  <td>Amazon Elastic File Storage (Amazon EFS)</td>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Azure Disk</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Azure File</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Cinder</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Fibre Channel</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>GCP</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>HostPath</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>IBM Cloud Block Storage volume</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>iSCSI</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>Local volume</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  <td>LVM Storage</td>
</tr>
<tr>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>NFS</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>{{ rh_storage_first }}</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>CIFS/SMB</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>VMware vSphere</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
</tbody>
</table>

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{%- set FeatureName = "Using any of the block volumes that can be provisioned manually, but are not provided as fully supported," %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}
{% endif %}