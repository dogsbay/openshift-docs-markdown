{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding failure domains to the Infrastructure CR {id="post-installation-configuring-nutanix-failure-domains_{{ context }}"}

You add failure domains to an existing Nutanix cluster by modifying its Infrastructure custom resource (CR) (`infrastructures.config.openshift.io`). {._abstract}


:::tip

To ensure high-availability, configure three failure domains.

:::


**Procedure**

1.  Edit the Infrastructure CR by running the following command:
    ```terminal
    $ oc edit infrastructures.config.openshift.io cluster
    ```
1.  Configure the failure domains.
    ```yaml title="Example Infrastructure CR with Nutanix failure domains"
    spec:
      cloudConfig:
        key: config
        name: cloud-provider-config
    #...
      platformSpec:
        nutanix:
          failureDomains:
          - cluster:
             type: UUID
             uuid: <uuid>
            name: <failure_domain_name>
            subnets:
            - type: UUID
              uuid: <network_uuid>
          - cluster:
             type: UUID
             uuid: <uuid>
            name: <failure_domain_name>
            subnets:
            - type: UUID
              uuid: <network_uuid>
          - cluster:
              type: UUID
              uuid: <uuid>
            name: <failure_domain_name>
            subnets:
            - type: UUID
              uuid: <network_uuid>
    # ...
    ```

    where:

    `<uuid>`
    :   Specifies the universally unique identifier (UUID) of the Prism Element.

    `<failure_domain_name>`
    :   Specifies a unique name for the failure domain. The name is limited to 64 or fewer characters, which can include lower-case letters, digits, and a dash (`-`). The dash cannot be in the leading or ending position of the name.

    `<network_uuid>`
    :   Specifies one or more UUID for the Prism Element subnet object. 
        The CIDR IP address prefix for one of the specified subnets must contain the virtual IP addresses that the {{ product_title }} cluster uses.
{%- set FeatureName = "Configuring multiple subnets" %}
{% include "./snippets/technology-preview.md" %}
    To configure multiple subnets in the Infrastructure CR, you must enable the `NutanixMultiSubnets` feature gate.
    A maximum of 32 subnets for each failure domain (Prism Element) in an {{ product_title }} cluster is supported.
    All subnet UUID values must be unique.

1.  Save the CR to apply the changes.