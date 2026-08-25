{%- set _mod_docs_content_type = "CONCEPT" %}
# Using custom settings {id="microshift-yaml-custom_{{ context }}"}

To create custom configurations, make a copy of the `config.yaml.default` file that is given in the `/etc/microshift/` directory, renaming it `config.yaml`. Keep this file in the `/etc/microshift/` directory, and then you can change supported settings that override the defaults before starting or restarting {{ microshift_short }}. {._abstract}

If you have just a few changes to make to the default settings, consider using configuration drop-in snippets as an alternative method.


:::important

Restart {{ microshift_short }} after changing any configuration settings to have them take effect. The `config.yaml` file is read only when {{ microshift_short }} starts.

:::


## Separate restarts {id="microshift-yaml-custom-settings_{{ context }}"}
Applications and other optional services used with your {{ microshift_short }} node might also need to be restarted separately to apply configuration changes throughout the node. For example, when making changes to certain networking settings, you must stop and restart service and application pods to apply those changes. See each procedure for the task you are completing for more information.


:::tip

If you add all of the configurations you need at the same time, you can minimize system restarts.

:::