{%- set _mod_docs_content_type = "CONCEPT" %}
# The {{ cluster_capi_operator }} {id="capi-arch-operator_{{ context }}"}

The {{ product_title }} integration of the upstream Cluster API is implemented and managed by the {{ cluster_capi_operator }}. {._abstract}

The {{ cluster_capi_operator }} and its operands are provisioned in the `openshift-cluster-api` namespace, in contrast to the Machine API, which uses the `openshift-machine-api` namespace.

The {{ cluster_capi_operator }} is an {{ product_title }} Operator that maintains the lifecycle of Cluster API resources. 
This Operator is responsible for all administrative tasks related to deploying the Cluster API project within an {{ product_title }} cluster.

If a cluster is configured correctly to allow the use of the Cluster API, the {{ cluster_capi_operator }} installs the Cluster API components on the cluster.
For more information, see the "{{ cluster_capi_operator }}" entry in the _Cluster Operators reference_ content.