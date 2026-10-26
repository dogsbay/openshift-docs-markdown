{%- set _mod_docs_content_type = "REFERENCE" %}
# Primary overlay network creation by using the CLI {id="virt-creating-primary-udn-cli-intro_{{ context }}"}

You can create a primary `UserDefinedNetwork` or `ClusterUserDefinedNetwork` custom resource definition (CRD) by using the {{ oc_first }}. After you define the custom primary overlay network, you can create namespaces that are associated with the cluster-scoped UDN.