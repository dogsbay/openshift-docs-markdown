{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the installed RAID configuration for new nodes {id="change-the-installed-raid-configuration-for-new-nodes-con_{{ context }}"}

You can create software RAID devices on new nodes by defining the disk layout in your installation manifests, either with a machine config or with Intel Virtual RAID on CPU (VROC). The RAID configuration must be in place before a node boots for the first time.