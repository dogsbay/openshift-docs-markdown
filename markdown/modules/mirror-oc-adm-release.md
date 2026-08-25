{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirroring images using the oc adm release mirror command {id="update-mirror-repository-adm-release-mirror_{{ context }}"}

You can use the `oc adm release mirror` command to mirror images to your mirror registry. {._abstract}

{% include "./snippets/oc-adm-release-mirror-depr.md" %}

The requirements for a mirror registry are:

*   You must have a container image registry that supports Docker v2-2 in the location that will host the {{ product_title }} cluster, such as {{ quay }}.

    :::note

    If you use {{ quay }}, you must use version 3.6 or later with the oc-mirror plugin. If you have an entitlement to {{ quay }}, see the documentation on "Deploying {{ quay }} for proof-of-concept purposes" or "Deploying {{ quay }} by using the Quay Operator". If you need additional information about selecting and installing a registry, contact your sales representative or Red Hat Support.
    
    :::

*   If you do not have an existing solution for a container image registry, see the "Mirror registry for Red Hat OpenShift" in {{ product_title }} subscriptions. The mirror registry for Red&#160;Hat OpenShift is a small-scale container registry that you can use to mirror {{ product_title }} container images in disconnected installations and updates.