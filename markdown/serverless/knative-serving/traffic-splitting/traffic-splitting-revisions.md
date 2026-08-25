{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Splitting traffic between revisions {id="traffic-splitting-revisions"}
{%- set context = "traffic-splitting-revisions" %}

After you create a serverless application, the application is displayed in the **Topology** view of the **Developer** perspective in the {{ product_title }} web console. The application revision is represented by the node, and the Knative service is indicated by a quadrilateral around the node.

Any new change in the code or the service configuration creates a new revision, which is a snapshot of the code at a given time. For a service, you can manage the traffic between the revisions of the service by splitting and routing it to the different revisions as required.

{% leveloffset +1 %}{% include "./modules/odc-splitting-traffic-between-revisions-using-developer-perspective.md" %}{% endleveloffset %}