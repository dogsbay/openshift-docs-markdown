{%- set _mod_docs_content_type = "CONCEPT" %}
# How configuration snippets work {id="microshift-how-config-snippets-work_{{ context }}"}

Configuration snippets in {{ product_title }} are YAML files in `/etc/microshift/config.d/` that merge with the existing configuration at runtime. You can use them to change one or two settings without editing the main config file. {._abstract}

You must restart {{ microshift_short }} for new configurations to apply.

To return to previous values, you can delete a configuration snippet and restart {{ microshift_short }}.

At runtime, the YAML files inside `/etc/microshift/config.d` are merged into the existing {{ microshift_short }} configuration, whether that configuration is a result of default values or a user-created `config.yaml` file. You do not need to create a `config.yaml` file to use a configuration snippet.

Files in the snippet directory are sorted in lexicographical order and run sequentially. You can use numerical prefixes for snippets so that each is read in the order you want. The last-read file takes precedence when there is more than one YAML for the same parameter.


:::important

Configuration snippets take precedence over both default values and a customized `config.yaml` configuration file.

:::