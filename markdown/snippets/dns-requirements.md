{%- set _mod_docs_content_type = "SNIPPET" %}
Clients access the {{ product_title }} cluster nodes over the `baremetal` network. A network administrator must configure a subdomain or subzone where the canonical name extension is the cluster name.

```text
<cluster_name>.<base_domain>
```

For example:

```text
test-cluster.example.com
```

{{ product_title }} includes functionality that uses cluster membership information to generate A/AAAA records. This resolves the node names to their IP addresses. After the nodes are registered with the API, the cluster can disperse node information without using CoreDNS-mDNS. This eliminates the network traffic associated with multicast DNS.

CoreDNS requires both TCP and UDP connections to the upstream DNS server to function correctly. Ensure the upstream DNS server can receive both TCP and UDP connections from {{ product_title }} cluster nodes.

In {{ product_title }} deployments, DNS name resolution is required for the following components:

*   The Kubernetes API
*   The {{ product_title }} application wildcard ingress API

A/AAAA records are used for name resolution and PTR records are used for reverse name resolution. {{ op_system_first }} uses the reverse records or DHCP to set the hostnames for all the nodes.

Installer-provisioned installation includes functionality that uses cluster membership information to generate A/AAAA records. This resolves the node names to their IP addresses. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the base domain that you specify in the `install-config.yaml` file. A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

***Required DNS records***

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Record</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Kubernetes API</td>
  <td><code>api.<cluster_name>.<base_domain>.</code></td>
  <td>An A/AAAA record and a PTR record identify the API load balancer. These records must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
<tr>
  <td>Routes</td>
  <td><code>*.apps.<cluster_name>.<base_domain>.</code></td>
  <td>The wildcard A/AAAA record refers to the application ingress load balancer. The application ingress load balancer targets the nodes that run the Ingress Controller pods. The Ingress Controller pods run on the worker nodes by default. These records must be resolvable by both clients external to the cluster and from all the nodes within the cluster.<br><br>For example, <code>console-openshift-console.apps.<cluster_name>.<base_domain></code> is used as a wildcard route to the {{ product_title }} console.</td>
</tr>
</tbody>
</table>


:::tip

You can use the `dig` command to verify DNS resolution.

:::