{% if context == "olm-restricted-networks" %}
{%- set olm_restricted_networks = true -%}
{% endif %}
{% if context == "olm-managing-custom-catalogs" %}
{%- set olm_managing_custom_catalogs = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the default software catalog sources {id="olm-restricted-networks-operatorhub_{{ context }}"}

To use only trusted or locally available Operator catalogs, disable the default software catalog sources that {{ product_title }} configures during installation.
{%- if not olm_managing_custom_catalogs %}
In a restricted network environment, you must disable the default catalogs as a cluster administrator.
{%- endif %}
{%- if olm_restricted_networks %}
You can then configure the OperatorHub custom resource definition (CRD) to use local catalog sources for the software catalog.
{%- endif %}
{%- if olm_managing_custom_catalogs %}
As a cluster administrator, you can disable the set of default catalogs. {._abstract}
{%- endif %}

**Procedure**

*   Disable the sources for the default catalogs by adding `disableAllDefaultSources: true` to the `OperatorHub` object:
    ```terminal
    $ oc patch OperatorHub cluster --type json \
        -p '[{"op": "add", "path": "/spec/disableAllDefaultSources", "value": true}]'
    ```

    :::tip

    Or, you can use the web console to manage catalog sources. From the **Administration** → **Cluster Settings** → **Configuration** → **OperatorHub** page, click the **Sources** tab, where you can create, update, delete, disable, and enable individual sources.
    
    :::


{% if context == "olm-restricted-networks" %}
{%- set olm_restricted_networks = "" -%}
{% endif %}
{% if context == "olm-managing-custom-catalogs" %}
{%- set olm_managing_custom_catalogs = "" -%}
{% endif %}