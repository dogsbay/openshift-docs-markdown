{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# High availability {id="serverless-ha"}
{%- set context = "serverless-ha" %}

{% include "./snippets/serverless-ha-intro.md" %}

HA in {{ ServerlessProductName }} is available through leader election, which is enabled by default after the Knative Serving or Eventing control plane is installed. When using a leader election HA pattern, instances of controllers are already scheduled and running inside the cluster before they are required.
These controller instances compete to use a shared resource, known as the leader election lock. The instance of the controller that has access to the leader election lock resource at any given time is called the leader.

{% leveloffset +1 %}{% include "./modules/serverless-config-replicas-eventing.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-config-replicas-kafka.md" %}{% endleveloffset %}