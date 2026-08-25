{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster Operators {id="cluster-operators_{{ context }}"}

In {{ product_title }}, all cluster functions are divided into a series of default _cluster Operators_. Cluster Operators manage a particular area of cluster functionality, such as cluster-wide application logging, management of the Kubernetes control plane, or the machine provisioning system.

Cluster Operators are represented by a `ClusterOperator` object, which
{%- if not (openshift_dedicated or openshift_rosa) %}
cluster administrators
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
administrators with the `dedicated-admin` role
{%- endif %}
can view in the {{ product_title }} web console from the **Administration** → **Cluster Settings** page. Each cluster Operator provides a simple API for determining cluster functionality. The Operator hides the details of managing the lifecycle of that component. Operators can manage a single component or tens of components, but the end goal is always to reduce operational burden by automating common actions.