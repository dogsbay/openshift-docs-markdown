{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for IPsec encryption for external traffic {id="nw-ovn-ipsec-prerequisites_{{ context }}"}

The following prerequisites are required to add certificates into the host NSS database and to configure IPsec to communicate with external hosts. {._abstract}

*   Set `routingViaHost=true` in the `ovnKubernetesConfig.gatewayConfig` specification of the OVN-Kubernetes network plugin.
*   Install the NMState Operator. This Operator is required for specifying the IPsec configuration. For more information, see "Kubernetes NMState Operator".

    :::note

    The NMState Operator is supported on {{ gcp_first }} only for configuring IPsec.
    
    :::