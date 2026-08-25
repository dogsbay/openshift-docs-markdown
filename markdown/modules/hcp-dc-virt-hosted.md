{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a hosted cluster on {{ VirtProductName }} in a disconnected environment {id="hcp-dc-virt-hosted_{{ context }}"}

As part of the process to deploy {{ hcp }} on {{ VirtProductName }} in a disconnected environment, you need to create a hosted cluster. A hosted cluster is an {{ product_title }} cluster with its control plane and API endpoint hosted on a management cluster. The hosted cluster includes the control plane and its corresponding data plane.