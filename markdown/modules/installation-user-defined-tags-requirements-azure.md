{%- set _mod_docs_content_type = "REFERENCE" %}
# User-defined tags requirements {id="installation-user-defined-tags-requirements-azure_{{ context }}"}

The user-defined tags have the following requirements:

*   A tag key must have a maximum of 128 characters.
*   A tag key must begin with a letter.
*   A tag key must end with a letter, number or underscore.
*   A tag key must contain only letters, numbers, underscores(`_`), periods(`.`), and hyphens(`-`).
*   A tag key must not be specified as `name`.
*   A tag key must not have the following prefixes:
    *   `kubernetes.io`
    *   `openshift.io`
    *   `microsoft`
    *   `azure`
    *   `windows`
*   A tag value must have a maximum of 256 characters.

For more information about Azure tags, see [Azure user-defined tags](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources?tabs=json).