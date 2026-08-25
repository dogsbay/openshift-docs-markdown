{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ VirtProductName }} networking glossary {id="virt-networking-glossary_{{ context }}"}

Definitions of key {{ VirtProductName }} networking terms and technologies. {._abstract}


Container Network Interface (CNI)
:   A [Cloud Native Computing Foundation](https://www.cncf.io/)
    project, focused on container network connectivity.
    {{ VirtProductName }} uses CNI plugins to build upon the basic Kubernetes networking functionality.

{% if not openshift_dedicated %}

Multus
:   A "meta" CNI plugin that allows multiple CNIs to exist so that a pod or virtual machine can use the interfaces it needs.
{% endif %}


Custom resource definition (CRD)
:   A [Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
    API resource that allows you to define custom resources, or an object defined by using the CRD API resource.


`NetworkAttachmentDefinition`
:   A CRD introduced by the Multus project that allows you to attach pods, virtual machines, and virtual machine instances to one or more networks.


`UserDefinedNetwork`
:   A namespace-scoped CRD introduced by the user-defined network (UDN) API that can be used to create a tenant network that isolates the tenant namespace from other namespaces.


`ClusterUserDefinedNetwork`
:   A cluster-scoped CRD introduced by the user-defined network API that cluster administrators can use to create a shared network across multiple namespaces.

{% if not (openshift_rosa or openshift_dedicated) %}

`NodeNetworkConfigurationPolicy`
:   A CRD introduced by the nmstate project, describing the requested network configuration on nodes.
    You update the node network configuration, including adding and removing interfaces, by applying a `NodeNetworkConfigurationPolicy` manifest to the cluster.
{% endif %}