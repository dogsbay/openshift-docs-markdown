---
title: Managing custom catalogs
---

# Managing custom catalogs {#olm-managing-custom-catalogs}

{% include "./_attributes/common-attributes.md" %} Cluster administrators

and Operator catalog maintainers can create and manage custom catalogs packaged using the bundle format on Operator Lifecycle Manager (OLM) in OpenShift Container Platform.

> [!IMPORTANT]
> Kubernetes periodically deprecates certain APIs that are removed in subsequent releases. As a result, Operators are unable to use removed APIs starting with the version of OpenShift Container Platform that uses the Kubernetes version that removed the API.

**Additional resources**

- [Bundle format](/operators/understanding/olm-packaging-format#olm-bundle-format_olm-packaging-format)
- [Red Hat-provided Operator catalogs](/operators/understanding/olm-rh-catalogs#olm-rh-catalogs)

## Prerequisites {#olm-managing-custom-catalogs-bundle-format-prereqs}

- You have installed the `opm` CLI.

**Additional resources**

- [`opm` CLI installation](/cli_reference/opm/cli-opm-install#cli-opm-install)

## File-based catalogs {#olm-managing-custom-catalogs-fb}

*File-based catalogs* are the latest iteration of the catalog format in Operator Lifecycle Manager (OLM). It is a plain text-based (JSON or YAML) and declarative config evolution of the earlier SQLite database format, and it is fully backwards compatible.

> [!IMPORTANT]
> As of OpenShift Container Platform 4.11, the default Red Hat-provided Operator catalog releases in the file-based catalog format. The default Red Hat-provided Operator catalogs for OpenShift Container Platform 4.6 through 4.10 released in the deprecated SQLite database format.
>
> The `opm` subcommands, flags, and functionality related to the SQLite database format are also deprecated and will be removed in a future release. The features are still supported and must be used for catalogs that use the deprecated SQLite database format.
>
> Many of the `opm` subcommands and flags for working with the SQLite database format, such as `opm index prune`, do not work with the file-based catalog format. For more information about working with file-based catalogs, see "Operator Framework packaging format" and "Mirroring images for a disconnected installation using the oc-mirror plugin".

**Additional resources**

- [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/)
- [`opm` CLI reference](/cli_reference/opm/cli-opm-ref#cli-opm-ref)
- [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
- [Mirroring images for a disconnected installation using the oc-mirror plugin](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)

**Additional resources**

- [Packaging format -> Schemas -> olm.deprecations schema](/operators/understanding/olm-packaging-format#olm-deprecations-schema_olm-packaging-format)
- [Mirroring images for a disconnected installation using the oc-mirror plugin -> Keeping your mirror registry content updated](/disconnected/installing-mirroring-disconnected#updating-mirror-registry-content)
- [Adding a catalog source to a cluster](/disconnected/using-olm#olm-creating-catalog-from-index_olm-restricted-networks)

**Additional resources**

- [Understanding and managing pod security admission](/authentication/understanding-and-managing-pod-security-admission#understanding-and-managing-pod-security-admission)

**Additional resources**

- [Adding a catalog source to a cluster](/operators/admin/olm-managing-custom-catalogs#olm-creating-catalog-from-index_olm-managing-custom-catalogs)

**Additional resources**

- [Operator Lifecycle Manager concepts and resources -> Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)
- [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
- [Image pull policy](/openshift_images/managing_images/image-pull-policy#image-pull-policy)

**Additional resources**

- [What is a secret?](/cicd/builds/creating-build-inputs#builds-secrets-overview_creating-build-inputs)
- [Updating the global cluster pull secret](/openshift_images/managing_images/using-image-pull-secrets#images-update-global-pull-secret_using-image-pull-secrets)
- [Allowing pods to reference images from other secured registries](/openshift_images/managing_images/using-image-pull-secrets#images-allow-pods-to-reference-images-from-secure-registries_using-image-pull-secrets)
