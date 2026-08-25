{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure requirements for installing {{ product_title }} on {{ ibm_power_vc_name }} {id="installation-ibm-powervc-infra-requirements_{{ context }}"}

To support an {{ product_title }} installation by using the installation program, you need to prepare your {{ ibm_power_vc_name }} environment. {._abstract}

## {{ ibm_power_vc_name }} account privilege requirements {id="installation-ibm-powervc-infra-requirements-account_{{ context }}"}

When installing {{ product_title }} on {{ ibm_power_vc_name }} by using the installation program, you must use an administrative account to ensure that you have all required permissions.

## {{ ibm_power_vc_name }} image requirements {id="installation-ibm-powervc-infra-requirements-image_{{ context }}"}
You must import a {{ op_system_first }} image. This can be found by using the installation program.

```terminal
$ openshift-install coreos print-stream-json | jq -r '.architectures.ppc64le.artifacts.openstack' | jq -r '.formats."qcow2.gz".disk.location'
```

After downloading the image from the resultant URL, you can import the image into {{ ibm_power_vc_name }} by using the `powervc-image-import` tool.

## Networking requirements {id="installation-ibm-powervc-infra-requirements-networking_{{ context }}"}

## {{ ibm_power_vc_name }} network {id="_ibm_power_vc_name_network"}
Installation requires at least one PowerVC network. Ideally the network should be dedicated to your {{ product_title }} cluster and not shared with other workloads.

IBM recommends that the network is set as a DHCP network in {{ ibm_power_vc_name }}. You must have a DHCP server set up to assign addresses for this network. When using this type of network, {{ ibm_power_vc_name }} is not aware of the IP address that is assigned to the created servers.

## DNS records {id="_dns_records"}
DNS records pointing to a `LoadBalancer` service are required for installation. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the cluster base domain that you specify when you install the cluster. A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

**Required DNS records**

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
  <td>API VIP</td>
  <td><code>api.&lt;cluster_name&gt;.&lt;base_domain&gt;.</code></td>
  <td>This DNS A/AAAA or CNAME (Canonical Name) record must point to the load balancer for the cluster. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
<tr>
  <td>API VIP</td>
  <td><code>api-int.&lt;cluster_name&gt;.&lt;base_domain&gt;.</code></td>
  <td>This DNS A/AAAA or CNAME (Canonical Name) record must point to the load balancer for the cluster. This record must be resolvable by all the nodes within the cluster.</td>
</tr>
<tr>
  <td>Ingress VIP</td>
  <td><code>*.apps.&lt;cluster_name&gt;.&lt;base_domain&gt;.</code></td>
  <td>A wildcard DNS A/AAAA or CNAME record that points to the load balancer that targets the machines that run the Ingress router pods, which are the compute nodes by default. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
</tbody>
</table>