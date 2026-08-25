{% if openshift_origin %}
{%- set global_ns = "olm" -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = "openshift-marketplace" -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Image template for custom catalog sources {id="olm-catalogsource-image-template_{{ context }}"}

Operator compatibility with the underlying cluster can be expressed by a catalog source in various ways. One way, which is used for the default Red Hat-provided catalog sources, is to identify image tags for index images that are specifically created for a particular platform release, for example
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{{ product_title }} {{ product_version }}.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{{ product_title }}. {._abstract}
{%- endif %}

During a cluster upgrade, the index image tag for the default Red Hat-provided catalog sources are updated automatically by the Cluster Version Operator (CVO) so that Operator Lifecycle Manager (OLM) pulls the updated version of the catalog. For example during an upgrade from {{ product_title }} {{ ocp_nminus1 }} to {{ product_version }}, the `spec.image` field in the `CatalogSource` object for the `redhat-operators` catalog is updated from:

```terminal
registry.redhat.io/redhat/redhat-operator-index:v4.22
```

to:

```terminal
registry.redhat.io/redhat/redhat-operator-index:v4.22
```

However, the CVO does not automatically update image tags for custom catalogs. To ensure users are left with a compatible and supported Operator installation after a cluster upgrade, custom catalogs should also be kept updated to reference an updated index image.

Starting in {{ product_title }} 4.9, cluster administrators can add the `olm.catalogImageTemplate` annotation in the `CatalogSource` object for custom catalogs to an image reference that includes a template. The following Kubernetes version variables are supported for use in the template:

*   `kube_major_version`
*   `kube_minor_version`
*   `kube_patch_version`


:::note

You must specify the Kubernetes cluster version and not the {{ product_title }} cluster version, as the latter is not currently available for templating.

:::


Provided that you have created and pushed an index image with a tag specifying the updated Kubernetes version, setting this annotation enables the index image versions in custom catalogs to be automatically changed after a cluster upgrade. The annotation value is used to set or update the image reference in the `spec.image` field of the `CatalogSource` object. This helps avoid cluster upgrades leaving Operator installations in unsupported states or without a continued update path.


:::important

You must ensure that the index image with the updated tag, in whichever registry it is stored in, is accessible by the cluster at the time of the cluster upgrade.

:::


:::details{title="Example catalog source with an image template"}
```yaml {minja}
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  generation: 1
  name: example-catalog
  namespace: openshift-marketplace
  annotations:
    olm.catalogImageTemplate:
      "quay.io/example-org/example-catalog:v{{ kube_major_version }}.{{ kube_minor_version }}"
spec:
  displayName: Example Catalog
  image: quay.io/example-org/example-catalog:v1.35
  priority: -400
  publisher: Example Org
```
:::


:::note

If the `spec.image` field and the `olm.catalogImageTemplate` annotation are both set, the `spec.image` field is overwritten by the resolved value from the annotation. If the annotation does not resolve to a usable pull spec, the catalog source falls back to the set `spec.image` value.

If the `spec.image` field is not set and the annotation does not resolve to a usable pull spec, OLM stops reconciliation of the catalog source and sets it into a human-readable error condition.

:::


For
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
an {{ product_title }} {{ product_version }}
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
a {{ product_title }}
{%- endif %}
cluster, which uses Kubernetes 1.35, the `olm.catalogImageTemplate` annotation in the preceding example resolves to the following image reference:

```terminal
quay.io/example-org/example-catalog:v1.35
```

For future releases of {{ product_title }}, you can create updated index images for your custom catalogs that target the later Kubernetes version that is used by the later {{ product_title }} version. With the `olm.catalogImageTemplate` annotation set before the upgrade, upgrading the cluster to the later {{ product_title }} version would then automatically update the catalog’s index image as well.

{% if openshift_origin %}
{%- set global_ns = "" -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = "" -%}
{% endif %}