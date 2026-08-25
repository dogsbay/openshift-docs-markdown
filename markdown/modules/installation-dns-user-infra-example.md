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

{%- set _mod_docs_content_type = "REFERENCE" %}
# Example DNS configuration for user-provisioned clusters {id="installation-dns-user-infra-example_{{ context }}"}

Reference the example DNS configurations to understand how A and PTR record configuration samples meet the DNS requirements for deploying {{ product_title }} on user-provisioned infrastructure.  {._abstract}

The DNS configuration examples provided here are for reference only and are not meant to provide advice for choosing one DNS solution over another.

In the examples, the cluster name is `ocp4` and the base domain is `example.com`.

{% if context == "installing-two-node-fencing" %}

:::note

In a two-node cluster with fencing, the control plane machines are also schedulable worker nodes. The DNS configuration must therefore include only the two control plane nodes. If you later add compute machines, provide corresponding A and PTR records for them as in a standard user-provisioned installation.

:::

{% endif %}

The following example is a BIND zone file that shows sample DNS A records for name resolution in a user-provisioned cluster.


:::note

In the example, the same load balancer is used for the Kubernetes API and application ingress traffic. In production scenarios, you can deploy the API and application ingress load balancers separately so that you can scale the load balancer infrastructure for each in isolation.

:::


```text
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
bootstrap.ocp4.example.com.	IN	A	192.168.1.96
;
control-plane0.ocp4.example.com.	IN	A	192.168.1.97
control-plane1.ocp4.example.com.	IN	A	192.168.1.98
;
{%- if context != "installing-two-node-fencing" %}
control-plane2.ocp4.example.com.	IN	A	192.168.1.99
;
compute0.ocp4.example.com.	IN	A	192.168.1.11
compute1.ocp4.example.com.	IN	A	192.168.1.7
{%- endif %}
;
;EOF
```

where:


`api.ocp4.example.com.`
:   Provides name resolution for the Kubernetes API. The record refers to the IP address of the API load balancer.

`api-int.ocp4.example.com.`
:   Provides name resolution for the Kubernetes API. The record refers to the IP address of the API load balancer and is used for internal cluster communications.

`*.apps.ocp4.example.com.`
:   Provides name resolution for the wildcard routes. The record refers to the IP address of the application ingress load balancer. The application ingress load balancer targets the machines that run the Ingress Controller pods.

`bootstrap.ocp4.example.com`
:   Provides name resolution for the bootstrap machine.

`control-plane0.ocp4.example.com`
:   Provides name resolution for the control plane machines.
{%- if context != "installing-two-node-fencing" %}

`compute0.ocp4.example.com.`
:   Provides name resolution for the compute machines.
{% endif %}

The following example BIND zone file shows sample PTR records for reverse name resolution in a user-provisioned cluster:

```text
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
96.1.168.192.in-addr.arpa.	IN	PTR	bootstrap.ocp4.example.com.
;
97.1.168.192.in-addr.arpa.	IN	PTR	control-plane0.ocp4.example.com.
98.1.168.192.in-addr.arpa.	IN	PTR	control-plane1.ocp4.example.com.
;
{%- if context != "installing-two-node-fencing" %}
99.1.168.192.in-addr.arpa.	IN	PTR	control-plane2.ocp4.example.com.
;
11.1.168.192.in-addr.arpa.	IN	PTR	compute0.ocp4.example.com.
7.1.168.192.in-addr.arpa.	IN	PTR	compute1.ocp4.example.com.
{%- endif %}
;
;EOF
```

where:


`api.ocp4.example.com.`
:   Provides reverse DNS resolution for the Kubernetes API. The PTR record refers to the record name of the API load balancer.

`api-int.ocp4.example.com.`
:   Provides reverse DNS resolution for the Kubernetes API. The PTR record refers to the record name of the API load balancer and is used for internal cluster communications.

`bootstrap.ocp4.example.com.`
:   Provides reverse DNS resolution for the bootstrap machine.

`control-plane0.ocp4.example.com.`
:   Provides rebootstrap.ocp4.example.com.verse DNS resolution for the control plane machines.
{%- if context != "installing-two-node-fencing" %}

`compute0.ocp4.example.com.`
:   Provides reverse DNS resolution for the compute machines.
{% endif %}


:::note

A PTR record is not required for the {{ product_title }} application wildcard.

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