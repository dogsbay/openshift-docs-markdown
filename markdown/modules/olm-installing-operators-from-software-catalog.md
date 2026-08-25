{% if context == "olm-installing-operators-in-namespace" %}
{%- set olm_user = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}

# About Operator installation from the software catalog {id="olm-installing-operators-from-software-catalog_{{ context }}"}

The software catalog in {{ product_title }} is the interface for discovering Operators that Operator Lifecycle Manager (OLM) installs and manages on your cluster. You can choose installation settings such as install mode, namespace, and approval strategy during subscription. {._abstract}

{% if not (olm_user or openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
As a cluster administrator, you can install an Operator from the software catalog by using the {{ product_title }}
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
web console or CLI. Subscribing an Operator to one or more namespaces makes the Operator available to developers on your cluster.
{% endif %}
{% endif %}

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As a `dedicated-admin`, you can install an Operator from the software catalog by using the {{ product_title }} web console or CLI. Subscribing an Operator to one or more namespaces makes the Operator available to developers on your cluster.
{% endif %}

{% if olm_user %}
As a user with the proper permissions, you can install an Operator from the software catalog by using the {{ product_title }} web console or CLI.
{% endif %}

During installation, you must determine the following initial settings for the Operator:

{% if not olm_user %}
{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}

Installation Mode
:   Choose **All namespaces on the cluster (default)** to have the Operator installed on all namespaces or choose individual namespaces, if available, to only install the Operator on selected namespaces. This example chooses **All namespaces...** to make the Operator available to all users and projects.
{% endif %}
{% endif %}
{% if olm_user %}

Installation Mode
:   Choose a specific namespace in which to install the Operator.
{% endif %}


Update Channel
:   If an Operator is available through multiple channels, you can choose which channel you want to subscribe to. For example, to deploy from the **stable** channel, if available, select it from the list.


Approval Strategy
:   You can choose automatic or manual updates.

    If you choose automatic updates for an installed Operator, when a new version of that Operator is available in the selected channel, Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without human intervention.

    If you select manual updates, when a newer version of an Operator is available, OLM creates an update request. As a
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
    cluster administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
    `dedicated-admin`,
{%- endif %}
    you must then manually approve that update request to have the Operator updated to the new version.