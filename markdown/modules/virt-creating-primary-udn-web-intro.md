{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a primary user-defined network by using the web console {id="virt-creating-primary-udn-web-intro_{{ context }}"}

You can use the {{ product_title }} web console to create a primary namespace-scoped `UserDefinedNetwork` (UDN) or a cluster-scoped `ClusterUserDefinedNetwork` custom resource definition (CRD). {._abstract}

The UDN serves as the default primary network for pods and VMs that you create in namespaces associated with the network.

After you define the custom primary overlay network, you can create namespaces that are associated with the cluster-scoped UDN.