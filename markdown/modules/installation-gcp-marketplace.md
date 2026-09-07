{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the {{ gcp_short }} Marketplace offering {id="installation-gcp-marketplace_{{ context }}"}

You can deploy an {{ product_title }} cluster through the {{ gcp_short }} Marketplace offering, which is billed on a pay-per-use basis (hourly, per core) through {{ gcp_short }}. Red&#160;Hat still provides direct support for these clusters. {._abstract}

By default, the installation program downloads and installs the {{ op_system_first }} image that is used to deploy compute machines. To deploy an {{ product_title }} cluster by using an {{ op_system }} image from the {{ gcp_short }} Marketplace, override the default behavior by modifying the `install-config.yaml` file to reference the location of the {{ gcp_short }} Marketplace offer.

{%- set platform_abbreviation = "a {{ gcp_short }}" -%}
{%- set platform_abbreviation_short = "{{ gcp_short }}" %}


:::note

{% include "./snippets/installation-marketplace-note.md" %}

:::


**Prerequisites**

*   You have an existing `install-config.yaml` file.

**Procedure**

1.  Edit the `compute.platform.gcp.osImage` parameters to specify the location of the {{ gcp_short }} Marketplace image:
    *   Set the `project` parameter to `redhat-marketplace-public`
    *   Set the `name` parameter to one of the following offers:

    {{ product_title }}
    :   `redhat-coreos-ocp-413-x86-64-202305021736`

    {{ opp }}
    :   `redhat-coreos-opp-413-x86-64-202305021736`

    {{ oke }}
    :   `redhat-coreos-oke-413-x86-64-202305021736`
    1.  Save the file and reference it when deploying the cluster.

    The following sample `install-config.yaml` file specifies a {{ gcp_short }} Marketplace image for compute machines:
    ```yaml
    apiVersion: v1
    baseDomain: example.com
    controlPlane:
    # ...
    compute:
      platform:
        gcp:
          osImage:
            project: redhat-marketplace-public
            name: redhat-coreos-ocp-413-x86-64-202305021736
    # ...
    ```