{%- set _mod_docs_content_type = "REFERENCE" %}
# Informational resources {id="informational-resources_{{ context }}"}

Review the informational resources that you can use to retrieve information about an {{ product_title }} cluster. {._abstract}

You use these resources to retrieve information about the cluster. Some configurations might require you to edit these resources directly.

<table>
<thead>
<tr>
  <th>Resource name</th>
  <th>Instance name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>clusterversion.config.openshift.io</code></td>
  <td><code>version</code></td>
  <td>In {{ product_title }} {{ product_version }}, you must not customize the <code>ClusterVersion</code>resource for production clusters. Instead, follow the process to<a href="/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console">update a cluster</a>.</td>
</tr>
<tr>
  <td><code>dns.config.openshift.io</code></td>
  <td><code>cluster</code></td>
  <td>You cannot modify the DNS settings for your cluster. You can<a href="/networking/networking_operators/dns-operator#nw-dns-operator-status_dns-operator">check the DNS Operator status</a>.</td>
</tr>
<tr>
  <td><code>infrastructure.config.openshift.io</code></td>
  <td><code>cluster</code></td>
  <td>Configuration details allowing the cluster to interact with its cloud provider.</td>
</tr>
<tr>
  <td><code>network.config.openshift.io</code></td>
  <td><code>cluster</code></td>
  <td>You cannot modify your cluster networking after installation. To customize your network, follow the process to<a href="/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations">customize networking during installation</a>.</td>
</tr>
</tbody>
</table>