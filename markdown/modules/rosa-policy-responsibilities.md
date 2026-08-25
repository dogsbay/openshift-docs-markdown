{%- set _mod_docs_content_type = "CONCEPT" %}
# Shared responsibilities for {{ product_title }} {id="rosa-policy-responsibilities_{{ context }}"}

While Red&#160;Hat and Amazon Web Services (AWS) manage the {{ product_title }} services, the customer shares certain responsibilities. The {{ product_title }} services are accessed remotely, hosted on public cloud resources, created in customer-owned AWS accounts, and have underlying platform and data security that is owned by Red&#160;Hat.


:::important

If the `cluster-admin` role is added to a user, see the responsibilities and exclusion notes in the [Red&#160;Hat Enterprise Agreement Appendix 4 (Online Subscription Services)](https://www.redhat.com/en/about/agreements).

:::


<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Incident and operations management</th>
  <th>Change management</th>
  <th>Access and identity authorization</th>
  <th>Security and regulation compliance</th>
  <th>Disaster recovery</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Customer data</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
</tr>
<tr>
  <td>Customer applications</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
</tr>
<tr>
  <td>Developer services</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
  <td>Customer</td>
</tr>
<tr>
  <td>Platform monitoring</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Logging</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Application networking</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Cluster networking</td>
  <td>Red Hat ^[1]^</td>
  <td>Red Hat and Customer ^[2]^</td>
  <td>Red Hat and Customer</td>
  <td>Red Hat ^[1]^</td>
  <td>Red Hat ^[1]^</td>
</tr>
<tr>
  <td>Virtual networking management</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat and Customer</td>
</tr>
<tr>
  <td>Virtual compute management (control plane, infrastructure and worker nodes)</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Cluster version</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Capacity management</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat and Customer</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>Virtual storage management</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
  <td>Red&#160;Hat</td>
</tr>
<tr>
  <td>AWS software (public AWS services)</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
</tr>
<tr>
  <td>Hardware/AWS global infrastructure</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
  <td>AWS</td>
</tr>
</tbody>
</table>

1.  If the customer chooses to use their own CNI plugin, the responsibility shifts to the customer.
1.  The customer must configure their firewall to grant access to the required OpenShift and AWS domains and ports before the cluster is provisioned. For more information, see "AWS firewall prerequisites".