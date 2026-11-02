{%- set _mod_docs_content_type = "CONCEPT" %}
# Opting out of the SELinux mount option default {id="using_selinuxChangePolicy_pod-opt-out_{{ context }}"}

If you want to opt out of the future move to mount option as default, you can affirmatively set the  `seLinuxChangePolicy` parameter to `Recursive` at either the individual pod or namespace level.