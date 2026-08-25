{%- set _mod_docs_content_type = "PROCEDURE" %}
# Signalling {{ ztp }} cluster deployment completion with validator inform policies {id="ztp-creating-a-validator-inform-policy_{{ context }}"}

Create a validator inform policy that signals when the {{ ztp_first }} installation and configuration of the deployed cluster is complete. This policy can be used for deployments of {{ sno }} clusters, three-node clusters, and standard clusters. {._abstract}

**Procedure**

1.  Create a standalone `{{ policy_gen_cr }}` custom resource (CR) that contains the source file
`validatorCRs/informDuValidator.yaml`. You only need one standalone `{{ policy_gen_cr }}` CR for each cluster type. For example, this CR applies a validator inform policy for {{ sno }} clusters:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-example-single-node-cluster-validator.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-example-single-node-cluster-validator.md" %}
{%- endif %}
1.  Commit the `{{ policy_gen_cr }}` CR file in your Git repository and push the changes.