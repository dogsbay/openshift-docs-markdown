{%- set _mod_docs_content_type = "REFERENCE" %}
# Topology Aware Lifecycle Manager {id="telco-core-topology-aware-lifecycle-manager_{{ context }}"}

{{ cgu_operator }} manages how changes are rolled out to managed clusters in the network. {._abstract}


New in this release
:   *   There are no reference design updates in this release.

Description
:   {{ cgu_operator }} is an Operator that runs only on the hub cluster.
    {{ cgu_operator }} manages how changes including cluster and Operator upgrades, configurations, and so on, are rolled out to managed clusters in the network.
    {{ cgu_operator }} has the following core features:
    *   Provides sequenced updates of cluster configurations and upgrades ({{ product_title }} and Operators) as defined by cluster policies.
    *   Provides for deferred application of cluster updates.
    *   Supports progressive rollout of policy updates to sets of clusters in user configurable batches.
    *   Allows for per-cluster actions by adding `ztp-done` or similar user-defined labels to clusters.

Limits and requirements
:   *   Supports concurrent cluster deployments in batches of 400

Engineering considerations
:   *   Only policies with the `ran.openshift.io/ztp-deploy-wave` annotation are applied by {{ cgu_operator }} during initial cluster installation.
    *   Any policy can be remediated by {{ cgu_operator }} under control of a user created `ClusterGroupUpgrade` CR.
    *   Set the `MachineConfigPool` (`mcp`) CR `paused` field to true during a cluster upgrade maintenance window and set the `maxUnavailable` field to the maximum tolerable value.
    This prevents multiple cluster node reboots during upgrade, which results in a shorter overall upgrade.
    When you unpause the `mcp` CR, all the configuration changes are applied with a single reboot.

    :::note


    During installation, custom `mcp` CRs can be paused along with setting `maxUnavailable` to 100% to improve installation times.
    
    :::

    *   You can orchestrate upgrades for {{ product_title }}, Day 2 OLM operators, and custom configurations using a ClusterGroupUpgrade (CGU) CR that defines the required policies.
        *   An EUS to EUS upgrade can be orchestrated using chained CGU CRs.
        *   Control of MCP pause can be managed through policy in the CGU CRs for a full control plane and worker node rollout of upgrades.
        *   For more information, see "Performing an EUS-to-EUS update for telco core clusters".