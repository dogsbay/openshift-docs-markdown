{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploying {{ hcp }} on bare metal in a disconnected environment {id="hcp-deploy-dc-bm-intro_{{ context }}"}

In the context of {{ hcp }}, a disconnected environment is an {{ product_title }} deployment that is not connected to the internet and that uses {{ hcp }} as a base. You can deploy {{ hcp }} in a disconnected environment on bare metal. {._abstract}

When you provision {{ hcp }} on bare metal, you use the Agent platform. The Agent platform and {{ mce }} work together to enable disconnected deployments. The Agent platform uses the central infrastructure management service to add worker nodes to a hosted cluster. For an introduction to the central infrastructure management service, see "Enabling the central infrastructure management service".