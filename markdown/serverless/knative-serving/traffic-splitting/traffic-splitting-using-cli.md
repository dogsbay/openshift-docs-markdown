{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Traffic splitting using the Knative CLI {id="traffic-splitting-using-cli"}
{%- set context = "traffic-splitting-using-cli" %}

Using the Knative (`kn`) CLI to create traffic splits provides a more streamlined and intuitive user interface over modifying YAML files directly. You can use the `kn service update` command to split traffic between revisions of a service.

{% leveloffset +1 %}{% include "./modules/serverless-create-traffic-split-kn.md" %}{% endleveloffset %}