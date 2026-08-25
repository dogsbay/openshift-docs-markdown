{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ policy_gen_cr }} CRs to override source CRs content {id="ztp-using-pgt-to-update-source-crs_{{ context }}"}

`{{ policy_gen_cr }}` custom resources (CRs) allow you to overlay additional configuration details on top of the base source CRs provided with the GitOps plugin in the `ztp-site-generate` container. You can think of `{{ policy_gen_cr }}` CRs as a logical merge or patch to the base CR. Use `{{ policy_gen_cr }}` CRs to update a single field of the base CR, or overlay the entire contents of the base CR. You can update values and insert fields that are not in the base CR. {._abstract}

The following example procedure describes how to update fields in the generated `PerformanceProfile` CR for the reference configuration based on the `{{ policy_gen_cr }}` CR in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` file. Use the procedure as a basis for modifying other parts of the `{{ policy_gen_cr }}` based on your requirements.

**Prerequisites**

*   Create a Git repository where you manage your custom site configuration data. The repository must be accessible from the hub cluster and be defined as a source repository for Argo CD.

**Procedure**

1.  Review the baseline source CR for existing content. You can review the source CRs listed in the reference `{{ policy_gen_cr }}` CRs by extracting them from the {{ ztp_first }} container.
    1.  Create an `/out` folder:
        ```terminal
        $ mkdir -p ./out
        ```
    1.  Extract the source CRs:
        ```terminal
        $ podman run --log-driver=none --rm registry.redhat.io/openshift4/ztp-site-generate-rhel8:v{{ product_version }}.1 extract /home/ztp --tar | tar x -C ./out
        ```
1.  Review the baseline `PerformanceProfile` CR in `./out/source-crs/PerformanceProfile.yaml`:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: $name
      annotations:
        ran.openshift.io/ztp-deploy-wave: "10"
    spec:
      additionalKernelArgs:
      - "idle=poll"
      - "rcupdate.rcu_normal_after_boot=0"
      cpu:
        isolated: $isolated
        reserved: $reserved
      hugepages:
        defaultHugepagesSize: $defaultHugepagesSize
        pages:
          - size: $size
            count: $count
            node: $node
      machineConfigPoolSelector:
        pools.operator.machineconfiguration.openshift.io/$mcp: ""
      net:
        userLevelNetworking: true
      nodeSelector:
        node-role.kubernetes.io/$mcp: ''
      numa:
        topologyPolicy: "restricted"
      realTimeKernel:
        enabled: true
    ```

    :::note

    Any fields in the source CR which contain `$...` are removed from the generated CR if they are not provided in the `{{ policy_gen_cr }}` CR.
    
    :::

1.  Update the `{{ policy_gen_cr }}` entry for `PerformanceProfile` in the `{{ policy_prefix }}group-du-sno-ranGen.yaml` reference file. The following example `{{ policy_gen_cr }}` CR stanza supplies appropriate CPU specifications, sets the `hugepages` configuration, and adds a new field that sets `globallyDisableIrqLoadBalancing` to false.
    ```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-using-ztp-to-update-source-crs.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-using-ztp-to-update-source-crs.yaml" %}
{%- endif %}
    ```
1.  Commit the `{{ policy_gen_cr }}` change in Git, and then push to the Git repository being monitored by the {{ ztp }} argo CD application.

    The {{ ztp }} application generates an {{ rh_rhacm }} policy that contains the generated `PerformanceProfile` CR. The contents of that CR are derived by merging the `metadata` and `spec` contents from the `PerformanceProfile` entry in the `{{ policy_gen_cr }}` onto the source CR. The resulting CR has the following content:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
        name: openshift-node-performance-profile
    spec:
        additionalKernelArgs:
            - idle=poll
            - rcupdate.rcu_normal_after_boot=0
        cpu:
            isolated: 2-19,22-39
            reserved: 0-1,20-21
        globallyDisableIrqLoadBalancing: false
        hugepages:
            defaultHugepagesSize: 1G
            pages:
                - count: 10
                  size: 1G
        machineConfigPoolSelector:
            pools.operator.machineconfiguration.openshift.io/master: ""
        net:
            userLevelNetworking: true
        nodeSelector:
            node-role.kubernetes.io/master: ""
        numa:
            topologyPolicy: restricted
        realTimeKernel:
            enabled: true
    ```


:::note

In the `/source-crs` folder that you extract from the `ztp-site-generate` container,  the `$` syntax is not used for template substitution as implied by the syntax. Rather, if the `policyGen` tool sees the `$` prefix for a string and you do not specify a value for that field in the related `{{ policy_gen_cr }}` CR, the field is omitted from the output CR entirely.

An exception to this is the `$mcp` variable in `/source-crs` YAML files that is substituted with the specified value for `mcp` from the `{{ policy_gen_cr }}` CR. For example, in `example/{{ path_prefix }}/{{ policy_prefix }}group-du-standard-ranGen.yaml`, the value for `mcp` is `worker`:

```yaml
spec:
  bindingRules:
    group-du-standard: ""
  mcp: "worker"
```

The `policyGen` tool replace instances of `$mcp` with `worker` in the output CRs.

:::