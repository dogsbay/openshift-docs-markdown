{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring high-performance mode using {{ policy_gen_cr }} CRs {id="ztp-using-pgt-to-configure-high-performance-mode_{{ context }}"}

Follow this example to set high performance mode by updating the `workloadHints` fields in the generated `PerformanceProfile` CR for the reference configuration, based on the `{{ policy_gen_cr }}` CR in the `{{ policy_prefix }}group-du-sno-ranGen.yaml`. {._abstract}

High performance mode provides ultra low latency at the highest power consumption.

**Prerequisites**

*   You have configured the BIOS with performance related settings by following the guidance in "Configuring host firmware for low latency and high performance".

**Procedure**

1.  Update the `{{ policy_gen_cr }}` entry for `PerformanceProfile` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` reference file in `{{ argocd_folder }}` as follows to set high-performance mode.
    ```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-using-pgt-to-configure-high-performance-mode.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-using-pg-to-configure-high-performance-mode.yaml" %}
{%- endif %}
    ```
1.  Commit the `{{ policy_gen_cr }}` change in Git, and then push to the Git repository being monitored by the {{ ztp }} Argo CD application.