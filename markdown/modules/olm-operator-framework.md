{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator Framework {id="olm-operator-framework_{{ context }}"}

The Operator Framework is a set of open source tools for building, testing, delivering, and updating Operators. It includes Operator Lifecycle Manager (OLM), the Operator Registry, and the software catalog. {._abstract}


Operator Lifecycle Manager
:   Operator Lifecycle Manager (OLM) controls the installation, upgrade, and role-based access control (RBAC) of Operators in a cluster. It is deployed by default in 
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    {{ product_title }} {{ product_version }}.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    {{ product_title }}.
{% endif %}


Operator Registry
:   The Operator Registry stores cluster service versions (CSVs) and custom resource definitions (CRDs) for creation in a cluster and stores Operator metadata about packages and channels. It runs in a Kubernetes or OpenShift cluster to provide this Operator catalog data to OLM.


Software Catalog
:   The software catalog is a web console for cluster administrators to discover and select Operators to install on their cluster. It is deployed by default in {{ product_title }}.

These tools are designed to be composable, so you can use any that are useful to you.