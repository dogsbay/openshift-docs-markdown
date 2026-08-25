{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine Config Operator behavior and registry changes {id="images-configuration-mco-and-registry-changes_{{ context }}"}

The Machine Config Operator (MCO) watches the `image.config.openshift.io/cluster` custom resource (CR) for any changes to registries and takes specific steps when the registry changes. {._abstract}

When changes to the registry are applied to the `image.config.openshift.io/cluster` CR, the MCO performs the following sequential actions:

1.  Cordons the node; certain parameters result in drained nodes, and others do not
1.  Applies changes by restarting CRI-O
1.  Uncordons the node

    :::note

    The MCO does not restart nodes when it detects changes. During this period, you might experience service unavailability.
    
    :::


## When allowing and blocking registry sources {id="images-configuration-mco-and-blocking-registry-sources_{{ context }}"}

The MCO watches the `image.config.openshift.io/cluster` resource for any changes to the registries. When the MCO detects a change, it triggers a rollout on nodes in machine config pool (MCP). The allowed registries list is used to update the image signature policy in the `/etc/containers/policy.json` file on each node. Changes to the `/etc/containers/policy.json` file do not require the node to drain.

## When using the containerRuntimeSearchRegistries parameter {id="images-configuration-mco-and-shortnames_{{ context }}"}

After the nodes return to the `Ready` state, if the `containerRuntimeSearchRegistries` parameter is added, the MCO creates a file in the `/etc/containers/registries.conf.d` directory on each node with the listed registries. The file overrides the default list of unqualified search registries in the `/etc/containers/registries.conf` file. There is no way to fall back to the default list of unqualified search registries.


:::important

The `containerRuntimeSearchRegistries` parameter works only with the Podman and CRI-O container engines. The registries in the list can be used only in pod specs, not in builds and image streams.

:::