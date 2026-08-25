{%- set _mod_docs_content_type = "CONCEPT" %}
# Platform "none" DNS requirements {id="agent-install-dns-none_{{ context }}"}

In {{ product_title }} deployments, DNS name resolution is required for several components. {._abstract}

The following components need DNS name resolution:

*   The Kubernetes API
*   The {{ product_title }} application wildcard
*   The control plane and compute machines

Reverse DNS resolution is also required for the Kubernetes API, the control plane machines, and the compute machines.

DNS A/AAAA or CNAME records are used for name resolution and PTR records are used for reverse name resolution. The reverse records are important because {{ op_system_first }} uses the reverse records to set the hostnames for all the nodes, unless the hostnames are provided by DHCP. Additionally, the reverse records are used to generate the certificate signing requests (CSR) that {{ product_title }} needs to operate.


:::note

It is recommended to use a DHCP server to provide the hostnames to each cluster node.

:::


The following DNS records are required for an {{ product_title }} cluster using the platform `none` option and they must be in place before installation. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the base domain that you specify in the `install-config.yaml` file. A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

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
  <td>A wildcard DNS A/AAAA or CNAME record that refers to the application ingress load balancer. The application ingress load balancer targets the machines that run the Ingress Controller pods. The Ingress Controller pods run on the compute machines by default. These records must be resolvable by both clients external to the cluster and from all the nodes within the cluster.<br><br>For example, <code>console-openshift-console.apps.<cluster_name>.<base_domain></code> is used as a wildcard route to the {{ product_title }} console.</td>
</tr>
<tr>
  <td>Control plane machines</td>
  <td><code><master><n>.<cluster_name>.<base_domain>.</code></td>
  <td>DNS A/AAAA or CNAME records and DNS PTR records to identify each machinefor the control plane nodes. These records must be resolvable by the nodes within the cluster.</td>
</tr>
<tr>
  <td>Compute machines</td>
  <td><code><worker><n>.<cluster_name>.<base_domain>.</code></td>
  <td>DNS A/AAAA or CNAME records and DNS PTR records to identify each machinefor the worker nodes. These records must be resolvable by the nodes within the cluster.</td>
</tr>
</tbody>
</table>


:::note

In {{ product_title }} 4.4 and later, you do not need to specify etcd host and SRV records in your DNS configuration.

:::



:::tip

You can use the `dig` command to verify name and reverse name resolution.

:::


## Example DNS configuration for platform "none" clusters {id="agent-install-dns-none-example_{{ context }}"}

This section provides A and PTR record configuration samples that meet the DNS requirements for deploying {{ product_title }} using the platform `none` option. The samples are not meant to provide advice for choosing one DNS solution over another.

In the examples, the cluster name is `ocp4` and the base domain is `example.com`.


Example DNS A record configuration for a platform "none" cluster

:   The following example is a BIND zone file that shows sample A records for name resolution in a cluster using the platform `none` option.

```text title="Sample DNS zone database"
$TTL 1W
@	IN	SOA	ns1.example.com.	root (
			2019070700	; serial
			3H		; refresh (3 hours)
			30M		; retry (30 minutes)
			2W		; expiry (2 weeks)
			1W )		; minimum (1 week)
	IN	NS	ns1.example.com.
	IN	MX 10	smtp.example.com.
;
;
ns1.example.com.		IN	A	192.168.1.5
smtp.example.com.		IN	A	192.168.1.5
;
helper.example.com.		IN	A	192.168.1.5
helper.ocp4.example.com.	IN	A	192.168.1.5
;
api.ocp4.example.com.		IN	A	192.168.1.5
api-int.ocp4.example.com.	IN	A	192.168.1.5
;
*.apps.ocp4.example.com.	IN	A	192.168.1.5
;
master0.ocp4.example.com.	IN	A	192.168.1.97
master1.ocp4.example.com.	IN	A	192.168.1.98
master2.ocp4.example.com.	IN	A	192.168.1.99
;
worker0.ocp4.example.com.	IN	A	192.168.1.11
worker1.ocp4.example.com.	IN	A	192.168.1.7
;
;EOF
```
where:


`api.ocp4.example.com.`
:   Provides name resolution for the Kubernetes API. The record refers to the IP address of the API load balancer.

`api-int.ocp4.example.com.`
:   Provides name resolution for the Kubernetes API. The record refers to the IP address of the API load balancer and is used for internal cluster communications.

`*.apps.ocp4.example.com.`
:   Provides name resolution for the wildcard routes. The record refers to the IP address of the application ingress load balancer. The application ingress load balancer targets the machines that run the Ingress Controller pods. The Ingress Controller pods run on the compute machines by default.

    :::note


    In the example, the same load balancer is used for the Kubernetes API and application ingress traffic. In production scenarios, you can deploy the API and application ingress load balancers separately so that you can scale the load balancer infrastructure for each in isolation.
    
    :::


`master0.ocp4.example.com.`-`master2.ocp4.example.com.`
:   Provides name resolution for the control plane machines.

`worker0.ocp4.example.com.`-`worker1.ocp4.example.com.`
:   Provides name resolution for the compute machines.


Example DNS PTR record configuration for a platform "none" cluster

:   The following example BIND zone file shows sample PTR records for reverse name resolution in a cluster using the platform `none` option.

```text title="Sample DNS zone database for reverse records"
$TTL 1W
@	IN	SOA	ns1.example.com.	root (
			2019070700	; serial
			3H		; refresh (3 hours)
			30M		; retry (30 minutes)
			2W		; expiry (2 weeks)
			1W )		; minimum (1 week)
	IN	NS	ns1.example.com.
;
5.1.168.192.in-addr.arpa.	IN	PTR	api.ocp4.example.com.
5.1.168.192.in-addr.arpa.	IN	PTR	api-int.ocp4.example.com.
;
97.1.168.192.in-addr.arpa.	IN	PTR	master0.ocp4.example.com.
98.1.168.192.in-addr.arpa.	IN	PTR	master1.ocp4.example.com.
99.1.168.192.in-addr.arpa.	IN	PTR	master2.ocp4.example.com.
;
11.1.168.192.in-addr.arpa.	IN	PTR	worker0.ocp4.example.com.
7.1.168.192.in-addr.arpa.	IN	PTR	worker1.ocp4.example.com.
;
;EOF
```
where:


`api.ocp4.example.com.`
:   Provides reverse DNS resolution for the Kubernetes API. The PTR record refers to the record name of the API load balancer.

`api-int.ocp4.example.com.`
:   Provides reverse DNS resolution for the Kubernetes API. The PTR record refers to the record name of the API load balancer and is used for internal cluster communications.

`master0.ocp4.example.com.`-`master2.ocp4.example.com.`
:   Provides reverse DNS resolution for the control plane machines.

`worker0.ocp4.example.com.`-`worker1.ocp4.example.com.`
:   Provides reverse DNS resolution for the compute machines.


:::note

A PTR record is not required for the {{ product_title }} application wildcard.

:::