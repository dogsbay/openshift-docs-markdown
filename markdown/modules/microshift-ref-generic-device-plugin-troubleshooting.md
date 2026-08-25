{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting configuration issues {id="microshift-generic-device-plugin-troubleshooting_{{ context }}"}

The following entries explain common Generic Device Plugin configuration issues and how to resolve them.  {._abstract}


`Invalid configuration: failed to parse device`
:   Occurs when you have incorrectly mixed `paths` and `usbs` fields within the same `groups` entry for a device. Each `group` must exclusively use either `paths` or `usbs` to define its devices.


`Cannot define both path and usbs at the same time`
:   Occurs when you have incorrectly mixed `paths` and `usbs` fields within the same `groups` entry for a device. Each `group` must exclusively use either `paths` or `usbs` to define its devices.