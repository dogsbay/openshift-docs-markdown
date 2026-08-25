{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring your cluster with multi-architecture compute machines {id="multi-architecture-configuring-your-cluster_{{ context }}"}

To create a cluster with multi-architecture compute machines with different installation options and platforms, see the documentation references. {._abstract}

**Cluster with multi-architecture compute machine installation options**

<table>
<thead>
<tr>
  <th>Documentation section</th>
  <th>Platform</th>
  <th>User-provisioned installation</th>
  <th>Installer-provisioned installation</th>
  <th>Control Plane</th>
  <th>Compute node</th>
</tr>
</thead>
<tbody>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on Azure"</td>
  <td>Microsoft Azure</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td><code>aarch64</code> or <code>x86_64</code></td>
  <td><code>aarch64</code>, <code>x86_64</code></td>
</tr>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on AWS"</td>
  <td>Amazon Web Services (AWS)</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td><code>aarch64</code> or <code>x86_64</code></td>
  <td><code>aarch64</code>, <code>x86_64</code></td>
</tr>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on {{ gcp_short }}"</td>
  <td>{{ gcp_first }}</td>
  <td></td>
  <td>&#10003;</td>
  <td><code>aarch64</code> or <code>x86_64</code></td>
  <td><code>aarch64</code>, <code>x86_64</code></td>
</tr>
<tr>
  <td rowspan="3">"Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}"</td>
  <td>Bare metal</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td><code>aarch64</code> or <code>x86_64</code></td>
  <td><code>aarch64</code>, <code>x86_64</code></td>
</tr>
<tr>
  <td>{{ ibm_power_title }}</td>
  <td>&#10003;</td>
  <td></td>
  <td><code>x86_64</code> or <code>ppc64le</code></td>
  <td><code>x86_64</code>, <code>ppc64le</code></td>
</tr>
<tr>
  <td>{{ ibm_z_title }}</td>
  <td>&#10003;</td>
  <td></td>
  <td><code>x86_64</code> or <code>s390x</code></td>
  <td><code>x86_64</code>, <code>s390x</code></td>
</tr>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with z/VM"</td>
  <td>{{ ibm_z_name }} and {{ ibm_linuxone_name }}</td>
  <td>&#10003;</td>
  <td></td>
  <td><code>x86_64</code>, <code>s390x</code></td>
  <td><code>x86_64</code>, <code>s390x</code></td>
</tr>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with {{ op_system_base }} KVM"</td>
  <td>{{ ibm_z_name }} and {{ ibm_linuxone_name }}</td>
  <td>&#10003;</td>
  <td></td>
  <td><code>x86_64</code>, <code>s390x</code></td>
  <td><code>x86_64</code>, <code>s390x</code></td>
</tr>
<tr>
  <td>"Creating a cluster with multi-architecture compute machines on {{ ibm_power_name }}"</td>
  <td>{{ ibm_power_name }}</td>
  <td>&#10003;</td>
  <td></td>
  <td><code>x86_64</code></td>
  <td><code>x86_64</code>, <code>ppc64le</code></td>
</tr>
</tbody>
</table>