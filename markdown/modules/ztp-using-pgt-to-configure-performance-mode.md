{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring performance mode using {{ policy_gen_cr }} CRs {id="ztp-using-pgt-to-configure-performance-mode_{{ context }}"}

Follow this example to set performance mode by updating the `workloadHints` fields in the generated `PerformanceProfile` CR for the reference configuration, based on the `{{ policy_gen_cr }}`{minja} CR in the `{{ policy_prefix }}group-du-sno-ranGen.yaml`{minja}. {._abstract}

Performance mode provides low latency at a relatively high power consumption.

**Prerequisites**

*   You have configured the BIOS with performance related settings by following the guidance in "Configuring host firmware for low latency and high performance".

**Procedure**

1.  Update the `{{ policy_gen_cr }}`{minja} entry for `PerformanceProfile` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml`{minja} reference file in `{{ argocd_folder }}/`{minja} as follows to set performance mode.
    ```yaml {minja}
    {% if policy-gen-cr == "PolicyGenTemplate" %}
    {% include "./snippets/pgt-ztp-using-pgt-to-configure-performance-mode.yaml" %}
    {% endif %}
    {% if policy-gen-cr == "PolicyGenerator" %}
    {% include "./snippets/pg-ztp-using-pg-to-configure-performance-mode.yaml" %}
    {% endif %}
    ```
1.  Commit the `{{ policy_gen_cr }}`{minja} change in Git, and then push to the Git repository being monitored by the {{ ztp }} Argo CD application.