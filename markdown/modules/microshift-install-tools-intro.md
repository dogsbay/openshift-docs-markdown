{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ microshift_short }} installation tools {id="microshift-install-tools-intro_{{ context }}"}

To use {{ microshift_short }}, you must already have or plan to install a {{ op_system_base_full }} type, such as on bare metal, or as a virtual machine (VM) that you provision. Although each use case has different details, each installation of {{ op_system_bundle }} uses {{ op_system_base }} tools and the {{ oc_first }}. {._abstract}

You can use RPMs to install {{ microshift_short }} on an existing {{ op_system_base }} machine. You do not need other tools unless you are also installing an image-based {{ op_system_base }} system or VM at the same time.