{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine Config Operator certificates overview {id="machine-config-operator-certificates-overview_{{ context }}"}

Learn how Machine Config Operator (MCO) certificates secure node connections to the Machine Config Server (MCS) during cluster provisioning, so you can plan for certificate maintenance and for troubleshooting node provisioning issues. {._abstract}

This certificate authority (CA) is used to secure connections from nodes to the MCS during initial provisioning.

There are two certificates:

*   A self-signed CA, the `machine-config-server-ca` config map (MCS CA).
*   A derived certificate, the `machine-config-server-tls` secret (MCS certificate).

## Provisioning details {id="cert-types-machine-config-operator-certificates-details_{{ context }}"}

{{ product_title }} installations that use {{ op_system_first }} are installed by using Ignition. This process is split into two parts:

*   An Ignition config is created that references a URL for the full configuration served by the MCS.
*   For user-provisioned infrastructure installation methods, the Ignition config manifests as a `worker.ign` file created by the `openshift-install` command. For installer-provisioned infrastructure installation methods that use the Machine API Operator, this configuration appears as the `worker-user-data` secret.

{% include "./snippets/mcs-endpoint-limitation.md" %}

## Provisioning chain of trust {id="cert-types-machine-config-operator-certificates-trust_{{ context }}"}

The MCS CA is injected into the Ignition configuration under the `security.tls.certificateAuthorities` configuration field. The MCS then provides the complete configuration using the MCS certificate presented by the web server.

The client validates that the MCS certificate presented by the server has a chain of trust to an authority it recognizes. In this case, the MCS CA is that authority, and it signs the MCS certificate. This ensures that the client is accessing the correct server. The client in this case is Ignition running on a machine in the initial RAM filesystem (initramfs).