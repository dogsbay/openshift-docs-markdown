---
title: Using image pull secrets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using image pull secrets {id="using-image-pull-secrets"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-image-pull-secrets" %}

To authenticate with container registries and pull images across {{ product_title }} projects or from secured registries, you can configure and use image pull secrets. You first obtain the registry authentication credentials, which are typically found in the `~/.docker/config.json` file for Docker or the `~/.config/containers/auth.json` file for Podman, created by the {{ cluster_manager_url_pull }} process. This content is then used to create or update the global `pullSecret` object within your cluster.


:::note

If you are using the {{ product_registry }} and are pulling from image streams located in the same project, then your pod service account should already have the correct permissions. No additional action should be required.

:::


{% leveloffset +1 %}{% include "./modules/images-allow-pods-to-reference-images-across-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-allow-pods-to-reference-images-from-secure-registries.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-pull-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/using-pull-secret.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-pulling-from-private-registries.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/images-update-global-pull-secret.md" %}{% endleveloffset %}

**Additional resources**

*   [Quay.io container registry](https://quay.io/)
*   [Red Hat container registry](https://registry.redhat.io)
*   [Transferring cluster ownership](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#transferring-cluster-ownership_downloading-and-updating-pull-secrets)
{% endif %}