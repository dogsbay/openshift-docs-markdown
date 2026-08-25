{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring power saving mode using {{ policy_gen_cr }} CRs {id="ztp-using-pgt-to-configure-power-saving-mode_{{ context }}"}

Follow this example to set power saving mode by updating the `workloadHints` fields in the generated `PerformanceProfile` CR for the reference configuration, based on the `{{ policy_gen_cr }}` CR in the `{{ policy_prefix }}group-du-sno-ranGen.yaml`. {._abstract}

The power saving mode balances reduced power consumption with increased latency.

**Prerequisites**

*   You enabled C-states and OS-controlled P-states in the BIOS.

**Procedure**

1.  Update the `{{ policy_gen_cr }}` entry for `PerformanceProfile` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` reference file in `{{ argocd_folder }}` as follows to configure power saving mode. It is recommended to configure the CPU governor for the power saving mode through the additional kernel arguments object.
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-using-pgt-to-configure-power-saving-mode.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-using-pg-to-configure-power-saving-mode.md" %}
{%- endif %}
1.  Commit the `{{ policy_gen_cr }}` change in Git, and then push to the Git repository being monitored by the {{ ztp }} Argo CD application.

**Verification**

1.  Select a worker node in your deployed cluster from the list of nodes identified by using the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Log in to the node by using the following command:
    ```terminal
    $ oc debug node/<node-name>
    ```

    Replace `<node-name>` with the name of the node you want to verify the power state on.
1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths as shown in the following example:
    ```terminal
    # chroot /host
    ```
1.  Run the following command to verify the applied power state:
    ```terminal
    # cat /proc/cmdline
    ```

    For power saving mode, verify that the output includes `intel_pstate=passive`.