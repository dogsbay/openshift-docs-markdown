{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage Day 1 kmod images lifecycle {id="manage-kernel-modules-across-cluster-nodes-manage-day-1-kmod-images-lifecycle-con_{{ context }}"}

A Day 1 kernel module is loaded before the kubelet starts, so it must ship in a container image that the Machine Config Operator pulls at boot. You build that kmod image, replace the in-tree module with it, and update it as the kernel changes.