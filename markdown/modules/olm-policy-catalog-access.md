{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator catalog access control {id="olm-policy-catalog-access_{{ context }}"}

The Operators in a catalog created in the global catalog `openshift-marketplace` namespace are available cluster-wide to all namespaces. The Operators in a catalog created in other namespaces are available in the same namespace as the catalog. {._abstract}

On clusters where non-cluster administrator users have been delegated Operator installation privileges, cluster administrators might want to further control or restrict the set of Operators those users are allowed to install. This can be achieved with the following actions:

1.  Disable all of the default global catalogs.
1.  Enable custom, curated catalogs in the same namespace where the relevant Operator groups have been preinstalled.