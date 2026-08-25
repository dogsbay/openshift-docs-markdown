{%- set _mod_docs_content_type = "CONCEPT" %}
# Logging considerations {id="nbde-logging-considerations_{{ context }}"}

Centralized logging of Tang traffic is advantageous because it might allow you to detect such things as unexpected decryption requests. For example:

*   A node requesting decryption of a passphrase that does not correspond to its boot sequence
*   A node requesting decryption outside of a known maintenance activity, such as cycling keys