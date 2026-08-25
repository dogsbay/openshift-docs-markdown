{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ ibm_cloud_title }} DNS Services for DNS resolution {id="installation-dns-ibm-cloud_{{ context }}"}

The installation program uses {{ ibm_cloud_name }} DNS Services to configure cluster DNS resolution and provide name lookup for a private cluster. {._abstract}

You configure DNS resolution by creating a DNS services instance for the cluster, and then adding a DNS zone to the DNS Services instance. Ensure that the zone is authoritative for the domain. You can do this using a root domain or subdomain.


:::note

{{ ibm_cloud_name }} does not support IPv6, so dual stack or IPv6 environments are not possible.

:::


**Prerequisites**

*   You have installed the {{ ibm_cloud_name }} CLI. For more information, see "{{ ibm_cloud_name }} CLI".
*   You have an existing domain and registrar. For more information, see the "{{ ibm_name }} DNS documentation".

**Procedure**

1.  Create a DNS Services instance to use with your cluster:
    1.  Install the DNS Services plugin by running the following command:
        ```terminal
        $ ibmcloud plugin install cloud-dns-services
        ```
    1.  Create the DNS Services instance by running the following command:
        ```terminal
        $ ibmcloud dns instance-create <instance-name> standard-dns
        ```

        At a minimum, you require a `Standard DNS` plan for DNS Services to manage the cluster subdomain and its DNS records.

        :::note

        After you have configured your registrar or DNS provider, it can take up to 24 hours for the changes to take effect.
        
        :::

1.  Create a DNS zone for the DNS Services instance:
    1.  Set the target operating DNS Services instance by running the following command:
        ```terminal
        $ ibmcloud dns instance-target <instance-name>
        ```
    1.  Add the DNS zone to the DNS Services instance by running the following command:
        ```terminal
        $ ibmcloud dns zone-create <zone-name>
        ```

        Replace `<zone-name>` with the fully qualified zone name. You can use either the root domain or subdomain value as the zone name, depending on which you plan to configure. A root domain uses the form `openshiftcorp.com`. A subdomain uses the form `clusters.openshiftcorp.com`.
1.  Record the name of the DNS zone you have created. As part of the installation process, you must update the `install-config.yaml` file before deploying the cluster. Use the name of the DNS zone as the value for the `baseDomain` parameter.


:::note

You do not have to manage permitted networks or configure an "A" DNS resource record. As required, the installation program configures these resources automatically.

:::