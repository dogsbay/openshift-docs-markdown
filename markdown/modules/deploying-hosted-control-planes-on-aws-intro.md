{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploying hosted control planes on AWS {id="deploying-hosted-control-planes-on-aws-intro_{{ context }}"}

To reduce infrastructure costs and improve cluster management efficiency, you can deploy {{ hcp }} on {{ aws_short }}. This configuration decouples the control plane from the data plane so that you can manage multiple clusters from a central management service.