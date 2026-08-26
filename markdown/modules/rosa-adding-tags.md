{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding tags to a machine pool {id="rosa-adding-tags_{{ context }}"}

You can add tags for compute nodes, also known as worker nodes, in a machine pool to introduce custom user tags for AWS resources that are generated when you provision your machine pool. Note that you cannot edit the tags after you create the machine pool. {._abstract}

**Procedure**

*   Add tags to a machine pool by using {{ cluster_manager }} or the {{ rosa_cli_first }}.