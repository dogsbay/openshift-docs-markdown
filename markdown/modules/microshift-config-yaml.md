{%- set _mod_docs_content_type = "CONCEPT" %}
# The {{ microshift_short }} configuration file {id="microshift-config-yaml_{{ context }}"}

At startup, {{ microshift_short }} checks the system-wide `/etc/microshift/` directory for a configuration file named `config.yaml`. If the configuration file does not exist in the directory, built-in default values are used to start the service. {._abstract}

You must use the {{ microshift_short }} configuration file in combination with host and, sometimes, application and service settings. Ensure that you configure each function in tandem when you adjust settings for your {{ microshift_short }} node.

For your convenience, a `config.yaml.default` file ready for your inputs is automatically installed.