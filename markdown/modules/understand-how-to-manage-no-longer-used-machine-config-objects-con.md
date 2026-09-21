{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand how to manage no-longer used machine config objects {id="understand-how-to-manage-no-longer-used-machine-config-objects-con_{{ context }}"}

Every change to a machine config pool produces a new rendered machine config, and earlier revisions remain on the cluster after they stop being used. Understanding what happens to these objects, and how to remove the ones you no longer need, helps you free disk space and avoid performance problems.