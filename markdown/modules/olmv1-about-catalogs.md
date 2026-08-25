{%- set _mod_docs_content_type = "CONCEPT" %}
# About catalogs in {{ olmv1 }} {id="olmv1-about-catalogs_{{ context }}"}

You can discover installable content by querying a catalog for Kubernetes extensions, such as Operators and controllers, by using the catalogd component. {._abstract}

Catalogd is a Kubernetes extension that unpacks catalog content for on-cluster clients and is part of the {{ olmv1_first }} suite of microservices. Currently, catalogd unpacks catalog content that is packaged and distributed as container images.