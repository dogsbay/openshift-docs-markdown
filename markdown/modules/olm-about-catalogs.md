{%- set _mod_docs_content_type = "CONCEPT" %}
# About Operator catalogs {id="olm-about-catalogs_{{ context }}"}

An Operator catalog is a repository of metadata that Operator Lifecycle Manager (OLM) can query to discover and install Operators and their dependencies on a cluster. OLM always installs Operators from the latest version of a catalog. {._abstract}

An index image, based on the Operator bundle format, is a containerized snapshot of a catalog. It is an immutable artifact that contains the database of pointers to a set of Operator manifest content. A catalog can reference an index image to source its content for OLM on the cluster.

As catalogs are updated, the latest versions of Operators change, and older versions may be removed or altered. In addition, when OLM runs on 
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
an {{ product_title }} 
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
a {{ product_title }} 
{%- endif %}
cluster in a restricted network environment, it is unable to access the catalogs directly from the internet to pull the latest content.

As a cluster administrator, you can create your own custom index image, either based on a Red Hat-provided catalog or from scratch, which can be used to source the catalog content on the cluster. Creating and updating your own index image provides a method for customizing the set of Operators available on the cluster, while also avoiding the aforementioned restricted network environment issues.


:::important

Kubernetes periodically deprecates certain APIs that are removed in subsequent releases. As a result, Operators are unable to use removed APIs starting with the version of {{ product_title }} that uses the Kubernetes version that removed the API.

:::



:::note

Support for the legacy _package manifest format_ for Operators, including custom catalogs that were using the legacy format, is removed in {{ product_title }} 4.8 and later.

When creating custom catalog images, previous versions of {{ product_title }} 4 required using the `oc adm catalog build` command, which was deprecated for several releases and is now removed. With the availability of Red Hat-provided index images starting in {{ product_title }} 4.6, catalog builders must use the `opm index` command to manage index images.

:::