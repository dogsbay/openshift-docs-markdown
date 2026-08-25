{%- set _mod_docs_content_type = "CONCEPT" %}
# Simultaneous {{ microshift_short }} and {{ op_system_base }} updates {id="microshift-simultaneous-microshift-rhel-updates_{{ context }}"}

You can update your {{ op_system_base }} operating system type and update {{ microshift_short }} at the same time, if the final versions are a supported configuration of {{ op_system_bundle }}. You can use following workflow to plan the general steps to take: {._abstract}

1.  Check for compatibility before beginning an update.
1.  Use the {{ op_system_base }} documentation specific to your update path to plan and update the operating system.
1.  Enable the correct {{ microshift_short }} repository to ensure alignment between your {{ op_system_base }} and {{ microshift_short }} versions.
1.  Use the {{ microshift_short }} update type specific to your update path, such as using an RPM installation or embedding {{ microshift_short }} into an operating system image.