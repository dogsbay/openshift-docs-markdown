{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ ibm_cloud_title }} Internet Services for DNS resolution {id="installation-cis-ibm-cloud_{{ context }}"}

The installation program uses {{ ibm_cloud_name }} Internet Services (CIS) to configure cluster DNS resolution and provide name lookup for a public cluster. {._abstract}


:::note

This offering does not support IPv6, so dual stack or IPv6 environments are not possible.

:::


You must create a domain zone in CIS in the same account as your cluster. You must also ensure the zone is authoritative for the domain. You can do this using a root domain or subdomain.

**Prerequisites**

*   You have installed the {{ ibm_cloud_name }} CLI. For more information, see "{{ ibm_cloud_name }} CLI".
*   You have an existing domain and registrar. For more information, see the "{{ ibm_name }} DNS documentation".

**Procedure**

1.  Create a CIS instance to use with your cluster:
    1.  Install the CIS plugin:
        ```terminal
        $ ibmcloud plugin install cis
        ```

{% if ibm_power_vs %}
    1.  Log in to {{ ibm_cloud_name }} by using the CLI:
        ```terminal
        $ ibmcloud login
        ```
{% endif %}
    1.  Create the CIS instance:
        ```terminal
        $ ibmcloud cis instance-create <instance_name> standard-next
        ```

        At a minimum, you require a `Standard Next` plan for CIS to manage the cluster subdomain and its DNS records.

        :::note

        After you have configured your registrar or DNS provider, it can take up to 24 hours for the changes to take effect.
        
        :::

1.  Connect an existing domain to your CIS instance:
    1.  Set the context instance for CIS:
{%- if not ibm_power_vs %}
    ```terminal
    $ ibmcloud cis instance-set <instance_name>
    ```

        Replace `<instance_name>` with the instance cloud resource name.
{%- endif %}
{%- if ibm_power_vs %}
        ```terminal
        $ ibmcloud cis instance-set <instance_CRN>
        ```

        Replace `<instance_CRN>` with the instance CRN (Cloud Resource Name). For example: `ibmcloud cis instance-set crn:v1:bluemix:public:power-iaas:osa21:a/65b64c1f1c29460d8c2e4bbfbd893c2c:c09233ac-48a5-4ccb-a051-d1cfb3fc7eb5::`
{%- endif %}
    1.  Add the domain for CIS:
        ```terminal
        $ ibmcloud cis domain-add <domain_name>
        ```

        Replace `<domain_name>` with the fully qualified domain name. You can use either the root domain or subdomain value as the domain name, depending on which you plan to configure.

        :::note

        A root domain uses the form `openshiftcorp.com`. A subdomain uses the form `clusters.openshiftcorp.com`.
        
        :::

1.  Open the CIS web console, navigate to the **Overview** page, and note your CIS name servers. These name servers are used in the next step. For more information, see "CIS web console".
1.  Configure the name servers for your domains or subdomains at the domain’s registrar or DNS provider. For more information, see the {{ ibm_cloud_name }} documentation for "Configuring name servers".

{% if context == "installing-ibm-cloud-account-power-vs" %}
{%- set ibm_power_vs = "" -%}
{% endif %}