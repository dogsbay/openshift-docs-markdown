{%- set _mod_docs_content_type = "CONCEPT" %}
# About the opm CLI {id="olm-about-opm_{{ context }}"}

The `opm` CLI is an Operator Framework tool for creating and maintaining Operator catalogs from bundle images in {{ product_title }}. You can use it to build catalog container images that Operator Lifecycle Manager (OLM) references through catalog sources. {._abstract}

A catalog contains a database of pointers to Operator manifest content that can be queried through an included API that is served when the container image is run. On {{ product_title }}, Operator Lifecycle Manager (OLM) can reference the image in a catalog source, defined by a `CatalogSource` object, which polls the image at regular intervals to enable frequent updates to installed Operators on the cluster.