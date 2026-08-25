---
title: Custom image builds with Buildah
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Custom image builds with Buildah {id="custom-builds-buildah"}
{%- set context = "custom-builds-buildah" %}

With {{ product_title }} {{ product_version }}, a docker socket will not be present on the host
nodes. This means the _mount docker socket_ option of a custom build is not
guaranteed to provide an accessible docker socket for use within a custom build
image.

If you require this capability in order to build and push images, add the Buildah
tool your custom build image and use it to build and push the image within your
custom build logic. The following is an example of how to run custom builds with
Buildah.


:::note

Using the custom build strategy requires permissions that normal users do
not have by default because it allows the user to execute arbitrary code inside
a privileged container running on the cluster. This level of access can be used
to compromise the cluster and therefore should be granted only to users who are
trusted with administrative privileges on the cluster.

:::


## Prerequisites {id="_prerequisites"}

*   Review how to [grant custom build permissions](/cicd/builds/securing-builds-by-strategy#securing-builds-by-strategy).

{% leveloffset +1 %}{% include "./modules/builds-create-custom-build-artifacts.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/builds-build-custom-builder-image.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/builds-use-custom-builder-image.md" %}{% endleveloffset %}