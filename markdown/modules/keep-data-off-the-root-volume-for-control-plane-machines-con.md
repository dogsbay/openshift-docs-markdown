{%- set _mod_docs_content_type = "CONCEPT" %}
# Keep data off the root volume for control plane machines {id="keep-data-off-the-root-volume-for-control-plane-machines-con_{{ context }}"}

A data disk is storage that a machine gets in addition to its root volume. Putting etcd data on its own disk keeps the root volume from filling up, so operations such as upgrades keep the space they need.