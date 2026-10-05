{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand the out-of-cluster mode of the Image Mode for OpenShift feature {id="understand-the-out-of-cluster-mode-of-the-image-mode-for-openshift-feature-con_{{ context }}"}

In out-of-cluster mode, you build a layered {{ op_system_first }} image outside the cluster and point nodes at it, rather than having the cluster build the image for you. The node boots the image you supply.