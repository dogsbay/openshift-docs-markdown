{%- set _mod_docs_content_type = "CONCEPT" %}
# Add non-default software packages with Linux extensions {id="add-non-default-software-packages-with-linux-extensions-con_{{ context }}"}

You can install software that is not part of the {{ op_system }} base image by creating a machine config that enables one or more {{ op_system_base }} extensions. The Machine Config Operator applies the extension to every node in the machine config pool that you target.