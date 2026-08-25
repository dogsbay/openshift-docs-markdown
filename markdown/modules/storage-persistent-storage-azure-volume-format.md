{%- set _mod_docs_content_type = "CONCEPT" %}
# Volume format {id="volume-format-azure_{{ context }}"}

You can use unformatted Azure volumes as persistent volumes, because {{ product_title }} automatically formats the device before mounting it to a container. {._abstract}

{{ product_title }} verifies that a volume contains the file system specified by the `fsType` parameter in the persistent volume definition before mounting it to a container. An unformatted device is erased and automatically formatted with the specified file system.