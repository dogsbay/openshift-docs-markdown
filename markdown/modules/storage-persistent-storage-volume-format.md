{%- set _mod_docs_content_type = "CONCEPT" %}
# Volume format {id="volume-format-{{ provider }}_{{ context }}"}

You can use unformatted {{ provider }} volumes as persistent volumes, because {{ product_title }} automatically formats the device before mounting it to a container. {._abstract}

Before {{ product_title }} mounts the volume and passes it to a container, it checks that the volume contains a file system as specified by the `fsType` parameter in the persistent volume definition. If the device is not formatted with the file system, all data from the device is erased and the device is automatically formatted with the given file system.

{%- set provider = "" -%}