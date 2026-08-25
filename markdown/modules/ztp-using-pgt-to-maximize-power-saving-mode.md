{%- set _mod_docs_content_type = "PROCEDURE" %}
# Maximizing power savings {id="ztp-using-pgt-to-maximize-power-savings-mode_{{ context }}"}

Limiting the maximum CPU frequency is recommended to achieve maximum power savings. {._abstract}

Enabling C-states on the non-critical workload CPUs without restricting the maximum CPU frequency negates much of the power savings by boosting the frequency of the critical CPUs.

Maximize power savings by updating the `sysfs` plugin fields, setting an appropriate value for `max_perf_pct` in the `TunedPerformancePatch` CR for the reference configuration. This example based on the `{{ policy_prefix }}group-du-sno-ranGen.yaml` describes the procedure to follow to restrict the maximum CPU frequency.

**Prerequisites**

*   You have configured power savings mode as described in "Using {{ policy_gen_cr }} CRs to configure power savings mode".

**Procedure**

1.  Update the `{{ policy_gen_cr }}` entry for `TunedPerformancePatch` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` reference file in `{{ argocd_folder }}`. To maximize power savings, add `max_perf_pct` as shown in the following example:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-using-pgt-to-maximize-power-saving-mode.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-using-pg-to-maximize-power-saving-mode.md" %}
{% endif %}


    :::note

    To maximize power savings, set a lower value. Setting a lower value for `max_perf_pct` limits the maximum CPU frequency, thereby reducing power consumption, but also potentially impacting performance. Experiment with different values and monitor the system’s performance and power consumption to find the optimal setting for your use-case.
    
    :::

1.  Commit the `{{ policy_gen_cr }}` change in Git, and then push to the Git repository being monitored by the {{ ztp }} Argo CD application.