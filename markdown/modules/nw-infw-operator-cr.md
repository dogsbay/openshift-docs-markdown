{%- set _mod_docs_content_type = "CONCEPT" %}
# Ingress Node Firewall Operator {id="nw-infw-operator-cr_{{ context }}"}

The Ingress Node Firewall Operator provides ingress firewall rules at a node level that you can specify and manage in the firewall configurations. {._abstract}

To deploy the daemon set created by the Operator, you create an `IngressNodeFirewallConfig` custom resource (CR). The Operator applies the `IngressNodeFirewallConfig` CR to create ingress node firewall daemon set `daemon`, which run on all nodes that match the `nodeSelector`.

You configure `rules` of the `IngressNodeFirewall` CR and apply them to clusters using the `nodeSelector` and setting values to "true".


:::important

The Ingress Node Firewall Operator supports only stateless firewall rules.

Network interface controllers (NICs) that do not support native XDP drivers will run at a lower performance.

{% if not (openshift_rosa or openshift_rosa_hcp) %}
For {{ product_title }} 4.14 or later, you must run Ingress Node Firewall Operator on {{ op_system_base }} 9.0 or later.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
You must run Ingress Node Firewall Operator on {{ product_title }} 4.14 or later or later.
{% endif %}

:::