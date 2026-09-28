{%- set _mod_docs_content_type = "CONCEPT" %}
# Add and remove tags {id="add-and-remove-tags-con_{{ context }}"}

You can add a tag to an image stream so that builds and deployments reference a specific image, and you can remove a tag when that version is no longer needed. Because tags are mutable pointers, updating a tag changes which image it resolves to.