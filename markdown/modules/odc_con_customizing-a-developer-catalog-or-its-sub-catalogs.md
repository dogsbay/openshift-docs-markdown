{%- set _mod_docs_content_type = "CONCEPT" %}

# Developer catalog and sub-catalog customization {id="odc_con_customizing-a-developer-catalog-or-its-sub-catalogs_{{ context }}"}

As a cluster administrator, you have the ability to organize and manage the Developer catalog or its sub-catalogs. You can enable or disable the sub-catalog types or disable the entire developer catalog. {._abstract}

The `developerCatalog.types` object includes the following parameters that you must define in a snippet to use them in the YAML view:

*   `state`: Defines if a list of developer catalog types should be enabled or disabled.
*   `enabled`: Defines a list of developer catalog types (sub-catalogs) that are visible to users.
*   `disabled`: Defines a list of developer catalog types (sub-catalogs) that are not visible to users.

You can enable or disable the following developer catalog types (sub-catalogs) using the YAML view or the form view.

*   `Builder Images`
*   `Templates`
*   `Devfiles`
*   `Samples`
*   `Helm Charts`
*   `Event Sources`
*   `Event Sinks`
*   `Operator Backed`