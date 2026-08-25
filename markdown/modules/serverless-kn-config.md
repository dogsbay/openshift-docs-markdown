{%- set _mod_docs_content_type = "CONCEPT" %}
# Customizing the Knative CLI {id="serverless-kn-config_{{ context }}"}

You can customize your Knative (`kn`) CLI setup by creating a `config.yaml` configuration file. You can provide this configuration by using the `--config` flag, otherwise the configuration is picked up from a default location. The default configuration location conforms to the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html), and is different for Unix systems and Windows systems.

For Unix systems:

*   If the `XDG_CONFIG_HOME` environment variable is set, the default configuration location that the Knative CLI looks for is `$XDG_CONFIG_HOME/kn`.
*   If the `XDG_CONFIG_HOME` environment variable is not set, the Knative CLI looks for the configuration in the home directory of the user at `$HOME/.config/kn/config.yaml`.

For Windows systems, the default Knative CLI configuration location is `%APPDATA%\kn`.

```yaml title="Example configuration file"
plugins:
  path-lookup: true (1)
  directory: ~/.config/kn/plugins (2)
eventing:
  sink-mappings: (3)
  - prefix: svc (4)
    group: core (5)
    version: v1 (6)
    resource: services (7)
```
1.  Specifies whether the Knative CLI should look for plugins in the `PATH` environment variable. This is a boolean configuration option. The default value is `false`.
1.  Specifies the directory where the Knative CLI will look for plugins. The default path depends on the operating system, as described above. This can be any directory that is visible to the user.
1.  The `sink-mappings` spec defines the Kubernetes addressable resource that is used when you use the `--sink` flag with a `kn` CLI command.
1.  The prefix you want to use to describe your sink. `svc` for a service, `channel`, and `broker` are predefined prefixes in `kn`.
1.  The API group of the Kubernetes resource.
1.  The version of the Kubernetes resource.
1.  The plural name of the Kubernetes resource type. For example, `services` or `brokers`.