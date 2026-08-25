{%- set _mod_docs_content_type = "CONCEPT" %}
# About configuring the master interface in the container network namespace {id="nw-about-configuring-master-interface-container_{{ context }}"}

You can create a MAC-VLAN, an IP-VLAN, or a VLAN subinterface that is based on a `master` interface that exists in a container namespace. You can also create a `master` interface as part of the pod network configuration in a separate network attachment definition CRD. {._abstract}

To use a container namespace `master` interface, you must specify `true` for the `linkInContainer` parameter that exists in the subinterface configuration of the `NetworkAttachmentDefinition` CRD.