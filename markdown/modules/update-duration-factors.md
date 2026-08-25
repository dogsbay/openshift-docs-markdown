{%- set _mod_docs_content_type = "REFERENCE" %}
# Factors affecting update duration {id="factors-affecting-update-duration_{{ context }}"}

The duration of {{ product_title }} updates vary for several reasons. {._abstract}

The following factors can affect your cluster update duration:

*   The reboot of compute nodes to the new machine configuration by Machine Config Operator (MCO)
    *   The value of `MaxUnavailable` in the machine config pool

        :::warning

        The default setting for `maxUnavailable` is `1` for all the machine config pools in {{ product_title }}. It is recommended to not change this value and update one control plane node at a time. Do not change this value to `3` for the control plane pool.
        
        :::

    *   The minimum number or percentages of replicas set in pod disruption budget (PDB)
*   The number of nodes in the cluster
*   The health of the cluster nodes