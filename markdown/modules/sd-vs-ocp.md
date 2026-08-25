{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding how {{ product_title }} differs from {{ OCP }} {id="sd-vs-ocp_{{ context }}"}

{{ product_title }} delivers the {{ OCP }} code base as an optimized, fully managed service that automates standard component configurations. {._abstract}

{{ product_title }} uses the same code base as {{ OCP }} but is installed in an opinionated way to be optimized for performance, scalability, and security. {{ product_title }} is a fully managed service; therefore, many of the {{ product_title }} components and settings that you manually set up in {{ OCP }} are set up for you by default.

Review the following differences between {{ product_title }} and a standard installation of {{ OCP }} on your own infrastructure:

<table>
<thead>
<tr>
  <th>{{ OCP }}</th>
  <th>{{ product_title }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The customer installs and configures {{ OCP }}.</td>
  <td></td>
</tr>
<tr>
  <td>Customers can choose their computing resources.</td>
  <td></td>
</tr>
<tr>
  <td>Customers have top-level administrative access to the infrastructure.</td>
  <td></td>
</tr>
<tr>
  <td>Customers can use all supported features and configuration settings available in {{ OCP }}.</td>
  <td>Some {{ OCP }} features and configuration settings might not be available or changeable in {{ product_title }}.</td>
</tr>
<tr>
  <td>You set up control plane components such as the API server and etcd on machines that get the <code>control</code> role. You can modify the control plane components, but are responsible for backing up, restoring, and making control plane data highly available.</td>
  <td>Red Hat sets up the control plane and manages the control plane components for you. The control plane is highly available.</td>
</tr>
<tr>
  <td>You are responsible for updating the underlying infrastructure for the control plane and worker nodes. You can use the OpenShift web console to update {{ OCP }} versions.</td>
  <td>Red&#160;Hat automatically notifies the customer when updates are available. You can manually or automatically schedule updates in {{ cluster_manager }}.</td>
</tr>
<tr>
  <td>Support is provided based on the terms of your Red Hat subscription or cloud provider.</td>
  <td>Engineered, operated, and supported by Red Hat with a 99.95% uptime SLA and 24x7 coverage. For details, see <a href="https://www.redhat.com/licenses/Appendix-4-Red-Hat-Online-Services-20230523.pdf">Red Hat Enterprise Agreement Appendix 4 (Online Subscription Services)</a>.</td>
</tr>
</tbody>
</table>