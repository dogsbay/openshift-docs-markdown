{%- set _mod_docs_content_type = "REFERENCE" %}
# About the {{ policy_gen_cr }} CRD {id="ztp-the-policygentemplate_{{ context }}"}

The `{{ policy_gen_cr }}` custom resource definition (CRD) tells the `PolicyGen` policy generator what custom resources (CRs) to include in the cluster configuration, how to combine the CRs into the generated policies, and what items in those CRs need to be updated with overlay content. {._abstract}

The following example shows a `{{ policy_gen_cr }}` CR (`{{ policy_prefix }}common-du-ranGen.yaml`) extracted from the `ztp-site-generate` reference container. The `{{ policy_prefix }}common-du-ranGen.yaml` file defines two {{ rh_rhacm_first }} policies. The policies manage a collection of configuration CRs, one for each unique value of `policyName` in the CR. `{{ policy_prefix }}common-du-ranGen.yaml` creates a single placement binding and a placement rule to bind the policies to clusters based on the labels listed in the `{{ binding_field }}` section.

**Example {{ policy_gen_cr }} CR - {{ policy_prefix }}common-ranGen.yaml**

{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-the-policygentemplate.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-the-policygenerator.md" %}
{% endif %}

A `{{ policy_gen_cr }}` CR can be constructed with any number of included CRs. Apply the following example CR in the hub cluster to generate a policy containing a single CR:

```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/ztp-the-policygentemplate-single.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/ztp-the-policygenerator-single.yaml" %}
{%- endif %}
```

Using the source file `PtpConfigSlave.yaml` as an example, the file defines a `PtpConfig` CR. The generated policy for the `PtpConfigSlave` example is named `group-du-sno-config-policy`. The `PtpConfig` CR defined in the generated `group-du-sno-config-policy` is named `du-ptp-slave`. The `spec` defined in `PtpConfigSlave.yaml` is placed under `du-ptp-slave` along with the other `spec` items defined under the source file.

The following example shows the `group-du-sno-config-policy` CR:

```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-group-du-sno-config-policy.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-group-du-sno-config-policy.yaml" %}
{%- endif %}
```