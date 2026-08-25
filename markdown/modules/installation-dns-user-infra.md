{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# User-provisioned DNS requirements {id="installation-dns-user-infra_{{ context }}"}

In {{ product_title }} deployments, you must ensure that cluster components meet certain DNS name resolution criteria for internal communication, certificate validation, and automated node discovery purposes. {._abstract}

The following is a list of required cluster components:

*   The Kubernetes API
*   The {{ product_title }} application wildcard
*   The bootstrap and control plane machines
{%- if context != "installing-two-node-fencing" %}
*   The compute machines
{% endif %}

{% if context == "installing-two-node-fencing" %}
Reverse DNS resolution is also required for the Kubernetes API, the bootstrap machine, and the control plane machines.
{% endif %}

{% if context != "installing-two-node-fencing" %}
Reverse DNS resolution is also required for the Kubernetes API, the bootstrap machine, the control plane machines, and the compute machines.
{% endif %}

DNS A/AAAA or CNAME records are used for name resolution and PTR records are used for reverse name resolution. The reverse records are important because {{ op_system_first }} uses the reverse records to set the hostnames for all the nodes, unless the hostnames are provided by DHCP. Additionally, the reverse records are used to generate the certificate signing requests (CSR) that {{ product_title }} needs to operate.

{% if not (ibm_z or ibm_z_kvm) %}

:::note

It is recommended to use a DHCP server to provide the hostnames to each cluster node. See the _DHCP recommendations for user-provisioned infrastructure_ section for more information.

:::

{% endif %}

The following DNS records are required for a user-provisioned {{ product_title }} cluster and they must be in place before installation. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the base domain that you specify in the `install-config.yaml` file. A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

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
  <td>.2+a</td>
  <td>Kubernetes API</td>
  <td><code>api.<cluster_name>.<base_domain>.</code></td>
</tr>
<tr>
  <td>A DNS A/AAAA or CNAME record, and a DNS PTR record, to identify the API load balancer. These records must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
  <td><code>api-int.<cluster_name>.<base_domain>.</code></td>
  <td>A DNS A/AAAA or CNAME record, and a DNS PTR record, to internally identify the API load balancer. These records must be resolvable from all the nodes within the cluster.<dl><dt>Important</dt><dd>The API server must be able to resolve the worker nodes by the hostnamesthat are recorded in Kubernetes. If the API server cannot resolve the nodenames, then proxied API calls can fail, and you cannot retrieve logs from pods.</dd></dl></td>
</tr>
<tr>
  <td>Routes</td>
  <td><code>*.apps.<cluster_name>.<base_domain>.</code></td>
  <td>A wildcard DNS A/AAAA or CNAME record that refers to the application ingress load balancer. The application ingress load balancer targets the machines that run the Ingress Controller pods.ifeval::["{{ context }}" == "installing-two-node-fencing"]By default, the Ingress Controller pods run on compute nodes. In cluster topologies without dedicated compute nodes, such as two-node or three-node clusters, the control plane nodes also carry the worker label, so the Ingress pods are scheduled on the control plane nodes.ifeval::["{{ context }}" != "installing-two-node-fencing"]The Ingress Controller pods run on the compute machines by default.These records must be resolvable by both clients external to the cluster and from all the nodes within the cluster.<br><br>For example, <code>console-openshift-console.apps.<cluster_name>.<base_domain></code> is used as a wildcard route to the {{ product_title }} console.</td>
</tr>
<tr>
  <td>Bootstrap machine</td>
  <td><code>bootstrap.<cluster_name>.<base_domain>.</code></td>
  <td>A DNS A/AAAA or CNAME record, and a DNS PTR record, to identify the bootstrapmachine. These records must be resolvable by the nodes within the cluster.</td>
</tr>
<tr>
  <td>Control plane machines</td>
  <td><code><control_plane><n>.<cluster_name>.<base_domain>.</code></td>
  <td>DNS A/AAAA or CNAME records and DNS PTR records to identify each machinefor the control plane nodes. These records must be resolvable by the nodes within the cluster.<br><br>ifeval::["{{ context }}" != "installing-two-node-fencing"]</td>
</tr>
<tr>
  <td>Compute machines</td>
  <td><code><compute><n>.<cluster_name>.<base_domain>.</code></td>
  <td>DNS A/AAAA or CNAME records and DNS PTR records to identify each machinefor the worker nodes. These records must be resolvable by the nodes within the cluster.</td>
</tr>
</tbody>
</table>


:::note

In {{ product_title }} 4.4 and later, you do not need to specify etcd host and SRV records in your DNS configuration.

:::



:::tip

You can use the `dig` command to verify name and reverse name resolution. See the section on _Validating DNS resolution for user-provisioned infrastructure_ for detailed validation steps.

:::


{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}