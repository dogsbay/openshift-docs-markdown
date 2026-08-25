{%- set _mod_docs_content_type = "CONCEPT" %}
# OLM-based Operator tasks {id="operators-overview-tasks_{{ context }}"}

To maintain cluster security and operational boundaries, your assigned user role, such as cluster administrator or application developer, determines whether you can install, manage, or use Operator Lifecycle Manager (OLM)-based Operators. {._abstract}


For developers

:   As an Operator author, you can perform the following development tasks for OLM-based Operators:

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Install and subscribe an Operator to your namespace.
{%- endif %}
*   Create an application from an installed Operator through the web console.


For administrators

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
:   As a cluster administrator, you can perform the following administrative tasks for OLM-based Operators:
{% endif %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As an administrator with the `dedicated-admin` role, you can perform the following Operator tasks:
{% endif %}

*   Manage custom catalogs.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Allow non-cluster administrators to install Operators
*   Install an Operator from the software catalog
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   Install an Operator from the software catalog
{%- endif %}
*   View Operator status
*   Manage Operator conditions
*   Upgrade installed Operators
*   Delete installed Operators
*   Configure proxy support
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Using Operator Lifecycle Manager in disconnected environments

For information about the cluster Operators that Red Hat provides, see "Cluster Operators reference".
{% endif %}