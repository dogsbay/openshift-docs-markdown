{%- set _mod_docs_content_type = "REFERENCE" %}
# Cloud platforms {id="virt-cloud-platforms_{{ context }}"}

{{ VirtProductName }} is compatible with various public cloud platforms. Each platform has specific storage options available. {._abstract}

<table>
<thead>
<tr>
  <th>Vendor</th>
  <th>Status</th>
  <th>Storage</th>
  <th>Resources</th>
</tr>
</thead>
<tbody>
<tr>
  <td>{{ aws_first }}</td>
  <td>GA</td>
  <td><ul><li>Elastic Block Store (EBS)</li><li>{{ odf_first }}</li><li>Portworx</li><li>FSx (NetApp)</li></ul></td>
  <td><ul><li>See "Installing a cluster on {{ aws_short }} with customizations" in the Additional resources section.</li></ul></td>
</tr>
<tr>
  <td>{{ product_rosa }} (ROSA)</td>
  <td>GA</td>
  <td><ul><li>EBS</li><li>Portworx</li><li>FSx (Q3)</li><li>{{ odf_short }}</li></ul></td>
  <td><ul><li><a href="https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/virtualization/index">{{ VirtProductName }}</a> in the {{ product_rosa }} documentation</li><li><a href="https://docs.aws.amazon.com/rosa/latest/userguide/what-is-rosa.html">What is {{ product_rosa }}?</a> in the {{ aws_short }} documentation</li></ul></td>
</tr>
<tr>
  <td>{{ oci_first_no_rt }}</td>
  <td>GA</td>
  <td><ul><li>{{ oci }} native storage</li></ul></td>
  <td><ul><li><a href="https://access.redhat.com/articles/7118050">{{ VirtProductName }} and {{ oci_first_no_rt }} known issues and limitations</a> in the Red&#160;Hat Knowledgebase</li><li><a href="https://github.com/oracle-quickstart/oci-openshift/blob/main/docs/openshift-virtualization.md">Installing {{ VirtProductName }} on {{ oci }}</a> in the <code>oracle-quickstart/oci-openshift</code> GitHub repository</li></ul></td>
</tr>
<tr>
  <td>Azure Red&#160;Hat OpenShift (ARO)</td>
  <td>GA</td>
  <td><ul><li>{{ odf_short }}</li></ul></td>
  <td><ul><li><a href="https://learn.microsoft.com/en-us/azure/openshift/howto-create-openshift-virtualization">{{ VirtProductName }} for Azure Red Hat OpenShift (preview)</a> in the Microsoft documentation</li></ul></td>
</tr>
<tr>
  <td>{{ gcp_first }}</td>
  <td>GA, as of {{ VirtProductName }} 4.21.1</td>
  <td><ul><li>{{ gcp_short }} native storage</li><li>{{ gcp_short }} NetApp Volumes (GCNV); requires {{ VirtProductName }} 4.21.2 or later</li></ul></td>
  <td><ul><li><a href="https://access.redhat.com/articles/7139046">Storage configuration for {{ VirtProductName }} {{ product_version }}.x on {{ gcp_full }}</a> in the Red&#160;Hat Knowledgebase</li><li><a href="https://access.redhat.com/articles/7139682">{{ VirtProductName }} on {{ gcp_full }}: Known issues and limitations</a> in the Red&#160;Hat Knowledgebase</li><li><a href="https://access.redhat.com/articles/7141472">Storage configuration for {{ VirtProductName }} with GCNV</a> in the Red&#160;Hat Knowledgebase</li><li><a href="https://access.redhat.com/articles/7141471">{{ VirtProductName }} with GCNV: Known errors and limitations</a> in the Red&#160;Hat Knowledgebase</li></ul></td>
</tr>
</tbody>
</table>

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
Bare-metal instances or servers offered by other cloud providers are not supported.
{% endif %}


:::tip

For platform-specific networking information, see "Networking overview" in the Additional resources section.

:::