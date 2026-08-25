---
title: Managing custom catalogs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing custom catalogs {id="olm-managing-custom-catalogs"}
{%- set context = "olm-managing-custom-catalogs" %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
Cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
Administrators with the `dedicated-admin` role
{%- endif %}
and Operator catalog maintainers can create and manage custom catalogs packaged using the bundle format on Operator Lifecycle Manager (OLM) in {{ product_title }}. {._abstract}


:::important

Kubernetes periodically deprecates certain APIs that are removed in subsequent releases. As a result, Operators are unable to use removed APIs starting with the version of {{ product_title }} that uses the Kubernetes version that removed the API.

:::


**Additional resources**
{._additional-resources}

*   [Bundle format](/operators/understanding/olm-packaging-format#olm-bundle-format_olm-packaging-format)
*   [Red Hat-provided Operator catalogs](/operators/understanding/olm-rh-catalogs#olm-rh-catalogs)

## Prerequisites {id="olm-managing-custom-catalogs-bundle-format-prereqs" ._additional-resources}

*   You have installed the `opm` CLI.

**Additional resources**
{._additional-resources}

*   [`opm` CLI installation](/cli_reference/opm/cli-opm-install#cli-opm-install)

## File-based catalogs {id="olm-managing-custom-catalogs-fb" ._additional-resources}

_File-based catalogs_ are the latest iteration of the catalog format in Operator Lifecycle Manager (OLM). It is a plain text-based (JSON or YAML) and declarative config evolution of the earlier SQLite database format, and it is fully backwards compatible.


:::important

As of {{ product_title }} 4.11, the default Red Hat-provided Operator catalog releases in the file-based catalog format. The default Red Hat-provided Operator catalogs for {{ product_title }} 4.6 through 4.10 released in the deprecated SQLite database format.

The `opm` subcommands, flags, and functionality related to the SQLite database format are also deprecated and will be removed in a future release. The features are still supported and must be used for catalogs that use the deprecated SQLite database format.

Many of the `opm` subcommands and flags for working with the SQLite database format, such as `opm index prune`, do not work with the file-based catalog format.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For more information about working with file-based catalogs, see "Operator Framework packaging format" and "Mirroring images for a disconnected installation using the oc-mirror plugin".
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
For more information about working with file-based catalogs, see "Operator Framework packaging format".
{%- endif %}

:::


{% leveloffset +2 %}{% include "./modules/olm-creating-fb-catalog-image.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/)
*   [`opm` CLI reference](/cli_reference/opm/cli-opm-ref#cli-opm-ref)
*   [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
{%- endif %}

{% leveloffset +2 %}{% include "./modules/olm-filtering-fbc.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [Packaging format → Schemas → olm.deprecations schema](/operators/understanding/olm-packaging-format#olm-deprecations-schema_olm-packaging-format)
*   [Mirroring images for a disconnected installation using the oc-mirror plugin → Keeping your mirror registry content updated](/disconnected/installing-mirroring-disconnected#updating-mirror-registry-content)
*   [Adding a catalog source to a cluster](/disconnected/using-olm#olm-creating-catalog-from-index_olm-restricted-networks)
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-managing-custom-catalogs-sqlite.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-creating-index-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-updating-index-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-pruning-index-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-catalog-source-and-psa.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding and managing pod security admission](/authentication/understanding-and-managing-pod-security-admission#understanding-and-managing-pod-security-admission)

{% leveloffset +2 %}{% include "./modules/olm-migrating-sqlite-catalog-to-fbc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Adding a catalog source to a cluster](/operators/admin/olm-managing-custom-catalogs#olm-creating-catalog-from-index_olm-managing-custom-catalogs)

{% leveloffset +2 %}{% include "./modules/olm-updating-sqlite-catalog-to-a-new-opm-version.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-sqlite-catalog-configuring-elevated-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-creating-catalog-from-index.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operator Lifecycle Manager concepts and resources → Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
*   [Image pull policy](/openshift_images/managing_images/image-pull-policy#image-pull-policy)
{%- endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/olm-accessing-images-private-registries.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [What is a secret?](/cicd/builds/creating-build-inputs#builds-secrets-overview_creating-build-inputs)
*   [Updating the global cluster pull secret](/openshift_images/managing_images/using-image-pull-secrets#images-update-global-pull-secret_using-image-pull-secrets)
*   [Allowing pods to reference images from other secured registries](/openshift_images/managing_images/using-image-pull-secrets#images-allow-pods-to-reference-images-from-secure-registries_using-image-pull-secrets)
{%- endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/olm-removing-catalogs.md" %}{% endleveloffset %}

{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/sd-olm-removing-catalogs.md" %}{% endleveloffset %}

{% endif %}