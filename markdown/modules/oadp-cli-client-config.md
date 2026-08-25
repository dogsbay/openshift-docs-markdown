{%- set _mod_docs_content_type = "REFERENCE" %}
# OADP CLI client configuration commands {id="oadp-cli-client-config_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to view and modify client configuration settings. Configuration is stored in `~/.config/velero/config.json`. {._abstract}

## Prerequisites {id="oadp-cli-client-config-prereqs_{{ context }}"}

*   The {{ oadp_short }} CLI plugin is installed.

## Current configuration viewing command {id="oadp-cli-client-config-get_{{ context }}"}

To view the current client configuration, use the following command:

```terminal
$ oc oadp client config get
```

## Configuration value setting command {id="oadp-cli-client-config-set_{{ context }}"}

To set a configuration value, use the following command:

```terminal
$ oc oadp client config set <key>=<value>
```

where:


`<key>`
:   Specifies the configuration key to set.

`<value>`
:   Specifies the value for the configuration key.

```terminal title="Example of setting the default namespace"
$ oc oadp client config set namespace=openshift-adp
```