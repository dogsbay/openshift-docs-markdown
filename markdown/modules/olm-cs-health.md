{%- set _mod_docs_content_type = "REFERENCE" %}
# Catalog health requirements {id="olm-cs-health_{{ context }}"}

Operator Lifecycle Manager (OLM) requires that all Operator catalogs in a shared global namespace are healthy. When a catalog is unhealthy, Operator installation and update operations in that namespace fail with a `CatalogSourcesUnhealthy` condition. {._abstract}

Operator catalogs on a cluster are interchangeable from the perspective of installation resolution; a `Subscription` object might reference a specific catalog, but dependencies are resolved using all catalogs on the cluster.

For example, if Catalog A is unhealthy, a subscription referencing Catalog A could resolve a dependency in Catalog B, which the cluster administrator might not have been expecting, because B normally had a lower catalog priority than A.

As a cluster administrator, if you observe an unhealthy catalog and want to consider the catalog as invalid and resume Operator installations, see the "Removing custom catalogs" or "Disabling the default software catalog sources" sections for information about removing the unhealthy catalog.