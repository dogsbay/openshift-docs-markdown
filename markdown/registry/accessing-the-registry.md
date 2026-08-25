---
title: Accessing the registry
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "accessing-the-registry" %}
{% include "./_attributes/common-attributes.md" %}
# Accessing the registry {id="accessing-the-registry"}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
You can access a registry to view logs and metrics. You can also secure and expose the registry. {._abstract}

After you logged in to the registry by using the `podman login` command, you can push or pull images from the integrated registry directly by using `podman push` or `podman pull` commands. The commands that you can use depend on your user permissions.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
In {{ product_title }}, Red Hat Site Reliability Engineering (SRE) manages the registry for you. However, you can check the status of the registry pods and view the registry logs.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
## Prerequisites {id="_prerequisites"}

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You must have configured an identity provider (IDP).
*   For pulling images, for example when using the `podman pull` command, the user must have the `registry-viewer` role. To add this role, run the following command:
    ```terminal
    $ oc policy add-role-to-user registry-viewer <user_name>
    ```
*   For writing or pushing images, such as using `podman push` command, complete the following steps:
    *   Your account has the `registry-editor` role. To add this role, run the following command:
        ```terminal
        $ oc policy add-role-to-user registry-editor <user_name>
        ```
    *   Your cluster must have an existing project where the images can be pushed to.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/registry-accessing-directly.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/registry-checking-the-status-of-registry-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-viewing-logs.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/registry-accessing-metrics.md" %}{% endleveloffset %}

## Additional resources {id="accessing-the-registry-additional-resources" ._additional-resources}

*   [Allowing pods to reference images across projects](/openshift_images/managing_images/using-image-pull-secrets#images-allow-pods-to-reference-images-across-projects_using-image-pull-secrets)
*   [Removing the kubeadmin user](/authentication/remove-kubeadmin#removing-kubeadmin_removing-kubeadmin)
*   [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider_understanding-identity-provider)
{% endif %}