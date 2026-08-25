{%- set _mod_docs_content_type = "REFERENCE" %}
# Machine Config Operator certificates reference {id="machine-config-operator-certificates-reference_{{ context }}"}

Use this reference to locate Machine Config Operator (MCO) certificate key material, rotation requirements, and support boundaries, so you can plan for certificate maintenance and for scheduling rotation before certificates expire. {._abstract}

## Key material inside a cluster {id="cert-types-machine-config-operator-certificates-materials_{{ context }}"}

The following objects are stored in the `openshift-machine-config-operator` namespace:

*   The Machine Config Server (MCS) certificate authority (CA) bundle is stored as the `machine-config-server-ca` config map. The MCS CA bundle stores all valid CAs for the `MachineConfigServer` TLS certificate.
*   The MCS CA signing key is stored as the `machine-config-server-ca` secret. The MCS CA signing key is used to sign the `MachineConfigServer` TLS certificate.
*   The MCS certificate is stored as the `machine-config-server-tls` secret, which contains the `MachineConfigServer` TLS certificate and key.

The `machine-config-server-ca` config map is used in the following ways:

*   The certificate controller updates the `*-user-data` secrets in the `openshift-machine-api` namespace any time the `machine-config-server-ca` configmap is updated.
*   The Machine Config Operator renders the `master-user-data-managed` and `worker-user-data-managed` secrets from the `machine-config-server-ca` configmap.

## Management {id="cert-types-machine-config-operator-certificates-mgmt_{{ context }}"}

At this time, directly modifying either of these certificates is not supported.

## Expiration {id="cert-types-machine-config-operator-certificates-exp_{{ context }}"}

The MCS CA and MCS certificate are valid for 10 years and are automatically rotated by the MCO at 8 years.

The issued serving certificates are valid for 10 years.


:::note

This automatic certificate rotation applies only to clusters that use machine sets. For clusters that do not use machine sets, such as vSphere user-provisioned infrastructure clusters, you are required to manually rotate these certificates. For more information on manual certificate rotation, see the Red&#160;Hat Knowledgebase article _Regenerating CA certificates for the Machine Config Server_.

:::


## Customization {id="cert-types-machine-config-operator-certificates-custom_{{ context }}"}

You cannot customize the MCO certificates.