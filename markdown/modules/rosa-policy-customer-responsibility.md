{%- set _mod_docs_content_type = "CONCEPT" %}
# Additional customer responsibilities for data and applications {id="rosa-policy-customer-responsibility_{{ context }}"}

The customer is responsible for the applications, workloads, and data that they deploy to Red&#160;Hat
OpenShift Service on AWS. However, Red&#160;Hat and AWS provide various tools to help the customer
manage data and applications on the platform.

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Red&#160;Hat and AWS</th>
  <th>Customer responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Customer data</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Maintain platform-level standards for data encryption as defined by industry security and</li></ul>compliance standards.<ul><li>Provide OpenShift components to help manage application data, such as secrets.</li><li>Enable integration with data services such as</li></ul>Amazon RDS to store and manage data outside of the cluster and/or AWS.<br><br><strong>AWS</strong><br><br><ul><li>Provide Amazon RDS to allow customers to store and manage data outside of the cluster and/or AWS.</li></ul></td>
  <td><ul><li>Maintain responsibility for all customer data stored on the platform and how customer applications consume and expose this data.</li></ul></td>
</tr>
<tr>
  <td>Customer applications</td>
  <td><strong>Red&#160;Hat</strong><br><br><ul><li>Provision clusters with OpenShift components installed so that customers can access the OpenShift and Kubernetes APIs to deploy and manage containerized applications.</li><li>Create clusters with image pull secrets so that customer deployments can pull images from the Red&#160;Hat Container Catalog registry.</li><li>Provide access to OpenShift APIs that a customer can use to set up Operators to add community, third-party, and Red&#160;Hat services to the cluster.</li><li>Provide storage classes and plugins to support persistent volumes for use with customer applications.</li><li>Provide a container image registry so customers can securely store application container images on the cluster to deploy and manage applications.</li></ul><strong>AWS</strong><br><br><ul><li>Provide Amazon EBS to support persistent volumes for use with customer applications.</li><li>Provide Amazon S3 to support Red&#160;Hat provisioning of the container image registry.</li></ul></td>
  <td><ul><li>Maintain responsibility for customer and third-party applications, data, and their complete lifecycle.</li><li>If a customer adds Red&#160;Hat, community, third-party, their own, or other services to the cluster by using Operators or external images, the customer is responsible for these services and for working with the appropriate provider, including Red&#160;Hat, to troubleshoot any issues.</li><li>Use the provided tools and features to configure and deploy; keep up to date; set up resource requests and limits; size the cluster to have enough resources to run apps; set up permissions; integrate with other services; manage any image streams or templates that the customer deploys; externally serve; save, back up, and restore data; and otherwise manage their highly available and resilient workloads.</li><li>Maintain responsibility for monitoring the applications run on {{ product_title }}, including</li></ul>installing and operating software to gather metrics, create alerts, and protect secrets in the application.</td>
</tr>
</tbody>
</table>