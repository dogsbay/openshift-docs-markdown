{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a drop-in file for the default CRI-O capabilities {id="create-crio-default-capabilities_{{ context }}"}

You can change some of the settings associated with the {{ product_title }} CRI-O runtime for the nodes associated with a specific machine config pool (MCP) by using a controller custom resource (CR).  {._abstract}

You set the configuration values and add a label to match the MCP in a `ContainerRuntimeConfig` CR. The Machine Config Operator (MCO) then rebuilds the `crio.conf` and `default.conf` configuration files on the associated nodes with the updated values.

Earlier versions of {{ product_title }} included specific machine configs by default. If you updated to a later version of {{ product_title }}, those machine configs were retained to ensure that clusters running on the same {{ product_title }} version have the same machine configs.

You can create multiple `ContainerRuntimeConfig` CRs, as needed, with a limit of 10 per cluster. For the first `ContainerRuntimeConfig` CR, the MCO creates a machine config appended with `containerruntime`. With each subsequent CR, the controller creates a `containerruntime` machine config with a numeric suffix. For example, if you have a `containerruntime` machine config with a `-2` suffix, the next `containerruntime` machine config is appended with `-3`.

If you want to delete the machine configs, delete them in reverse order to avoid exceeding the limit. For example, delete the `containerruntime-3` machine config before you delete the `containerruntime-2` machine config.


:::note

If you have a machine config with a `containerruntime-9` suffix and you create another `ContainerRuntimeConfig` CR, a new machine config is not created, even if there are fewer than 10 `containerruntime` machine configs.

:::


```terminal title="Example of multiple ContainerRuntimeConfig CRs"
$ oc get ctrcfg
```

```terminal title="Example output"
NAME         AGE
ctr-overlay  15m
ctr-level    5m45s
```

```terminal title="Example showing multiple containerruntime related system configs"
$ cat /proc/1/status | grep Cap
```

```terminal
$ capsh --decode=<decode_CapBnd_value>
```

Replace `<decode_CapBnd_value>` with the specific value you want to decode.