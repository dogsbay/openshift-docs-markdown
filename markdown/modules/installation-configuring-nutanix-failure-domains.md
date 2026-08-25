{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring failure domains {id="installation-configuring-nutanix-failure-domains_{{ context }}"}

Failure domains improve the fault tolerance of an {{ product_title }} cluster by distributing control plane and compute machines across multiple Nutanix Prism Elements (clusters). {._abstract}


:::tip

It is recommended that you configure three failure domains to ensure high-availability.

:::


**Prerequisites**

*   You have an installation configuration file (`install-config.yaml`).

**Procedure**

1.  Edit the `install-config.yaml` file and add the following stanza to configure the first failure domain:
    ```yaml
    apiVersion: v1
    baseDomain: example.com
    compute:
    # ...
    platform:
      nutanix:
        failureDomains:
        - name: <failure_domain_name>
          prismElement:
            name: <prism_element_name>
            uuid: <prism_element_uuid>
          subnetUUIDs:
          - <network_uuid>
    # ...
    ```

    where:

    `<failure_domain_name>`
    :   Specifies a unique name for the failure domain. The name is limited to 64 or fewer characters, which can include lower-case letters, digits, and a dash (`-`). The dash cannot be in the leading or ending position of the name.

    `<prism_element_name>`
    :   Optional. Specifies the name of the Prism Element.

    `<prism_element_uuid`>
    :   Specifies the UUID of the Prism Element.

    `<network_uuid`>
    :   Specifies the one or more UUIDs of the Prism Element subnet objects. Among them, one of the subnet’s IP address prefixes (CIDRs) must contain the virtual IP addresses that the {{ product_title }} cluster uses. A maximum of 32 subnets for each failure domain (Prism Element) in an {{ product_title }} cluster is supported. All `subnetUUID` values must be unique.

1.  As required, configure additional failure domains.
1.  To distribute control plane and compute machines across the failure domains, do one of the following:
    *   If compute and control plane machines can share the same set of failure domains, add the failure domain names under the cluster’s default machine configuration.
        ```yaml title="Example of control plane and compute machines sharing a set of failure domains"
        apiVersion: v1
        baseDomain: example.com
        compute:
        # ...
        platform:
          nutanix:
            defaultMachinePlatform:
              failureDomains:
                - failure-domain-1
                - failure-domain-2
                - failure-domain-3
        # ...
        ```
    *   If compute and control plane machines must use different failure domains, add the failure domain names under the respective machine pools.
        ```yaml title="Example of control plane and compute machines using different failure domains"
        apiVersion: v1
        baseDomain: example.com
        compute:
        # ...
        controlPlane:
          platform:
            nutanix:
              failureDomains:
                - failure-domain-1
                - failure-domain-2
                - failure-domain-3
        # ...
        compute:
          platform:
            nutanix:
              failureDomains:
                - failure-domain-1
                - failure-domain-2
        # ...
        ```
1.  Save the file.